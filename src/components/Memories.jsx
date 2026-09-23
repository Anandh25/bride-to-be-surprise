import { useEffect, useState } from "react";
import "./Memories.css";

const memoryChapters = [
  {
    id: 1,
    title: "The Little Girl We All Love",
    subtitle: "Once upon a little time...",
    description:
      "From those tiny little steps to the beautiful person you are today, every moment has been precious.",
    memories: [
      {
        id: 1,
        label: "Little beginnings",
        caption:
          "The little girl who filled every room with her own kind of magic. ❤️",
        placeholder: "Childhood photo",
        emoji: "🧸",
        image: "/images/bride-childhood-1.jpeg",
      },
      {
        id: 2,
        label: "Tiny adventures",
        caption:
          "Small hands, big dreams, and a thousand little adventures waiting to happen.",
        placeholder: "Cute childhood moment",
        emoji: "🌸",
        image: "/images/bride-childhood-2.jpeg",
      },
      {
        id: 3,
        label: "Growing up",
        caption:
          "Some things changed as you grew up, but that beautiful smile stayed the same.",
        placeholder: "Growing-up memory",
        emoji: "🦋",
        image: "/images/bride-childhood-3.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Partners in Crime",
    subtitle: "Two sisters. Endless stories.",
    description:
      "The silly fights, the secret conversations, the laughter, and the memories only the two of you understand.",
    memories: [
      {
        id: 4,
        label: "Double trouble",
        caption:
          "Together, you were always twice the fun and probably twice the trouble. 😄",
        placeholder: "Sisters childhood photo",
        emoji: "👭",
        image: "/images/sisters-2.jpeg",
      },
      {
        id: 5,
        label: "Secret conversations",
        caption:
          "Some stories are too special to explain to anyone else. Only sisters understand.",
        placeholder: "Sisters bonding moment",
        emoji: "💌",
        image: "/images/sisters-3.jpeg",
      },
      {
        id: 6,
        label: "Still the same team",
        caption:
          "Different chapters, different versions of you, but always the same team. ❤️",
        placeholder: "Recent sisters photo",
        emoji: "🤍",
        image: "/images/sisters-1.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "The People Who Made You, You",
    subtitle: "A lifetime of love, in little moments.",
    description:
      "Behind the person you are today is a family that loved you, guided you, and stood beside you through it all.",
    memories: [
      {
        id: 7,
        label: "Dad's little girl",
        caption:
          "No matter how grown up you become, you'll always be his little girl. ❤️",
        placeholder: "Bride with her father",
        emoji: "👨‍👧",
        image: "/images/parents-2.jpeg",
      },
      {
        id: 8,
        label: "A mother's love",
        caption:
          "A love that comforted you, cheered for you, and stayed with you through every chapter.",
        placeholder: "Bride with her mother",
        emoji: "🌷",
        image: "/images/parents-3.jpg",
      },
      {
        id: 9,
        label: "All together",
        caption:
          "Your first home, your forever people, and a love you'll carry wherever life takes you.",
        placeholder: "Family photo",
        emoji: "🏡",
        image: "/images/parents-1.jpeg",
      },
    ],
  },
];

function Memories() {
  // Store every revealed memory ID.
  // Revealed cards stay open until the page is reloaded.
  const [revealedMemories, setRevealedMemories] = useState([]);

  // Store the memory currently displayed in the popup.
  const [activeMemory, setActiveMemory] = useState(null);

  const revealMemory = (memoryId) => {
    setRevealedMemories((currentMemories) => {
      // If already revealed, keep it revealed.
      if (currentMemories.includes(memoryId)) {
        return currentMemories;
      }

      // Add the newly revealed memory.
      return [...currentMemories, memoryId];
    });
  };

  // First click reveals the memory.
  // Clicking an already-revealed memory opens the popup.
  const handleMemoryClick = (memory) => {
    const isRevealed = revealedMemories.includes(memory.id);

    if (!isRevealed) {
      revealMemory(memory.id);
      return;
    }

    setActiveMemory(memory);
  };

  // Close the photo popup.
  const closeMemoryPopup = () => {
    setActiveMemory(null);
  };

  // Close the popup when the Escape key is pressed.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMemoryPopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="memories-section" id="memories">
      <div className="memories-container">
        <header className="memories-header">
          <p className="memories-eyebrow">A LITTLE JOURNEY THROUGH TIME</p>

          <h2>
            Our Little <span>World</span>
          </h2>

          <p className="memories-intro">
            Every picture holds a story.
            <br />
            Every story holds a little piece of our hearts.
          </p>
        </header>

        {memoryChapters.map((chapter) => (
          <article className="memory-chapter" key={chapter.id}>
            <div className="chapter-heading">
              <p className="chapter-subtitle">{chapter.subtitle}</p>

              <h3>{chapter.title}</h3>

              <p className="chapter-description">{chapter.description}</p>
            </div>

            <div className="memory-grid">
              {chapter.memories.map((memory, index) => {
                const isRevealed = revealedMemories.includes(memory.id);

                return (
                  <button
                    type="button"
                    className={`memory-card ${
                      isRevealed ? "memory-card-active" : ""
                    }`}
                    key={memory.id}
                    onClick={() => handleMemoryClick(memory)}
                    aria-expanded={isRevealed}
                    aria-label={
                      isRevealed
                        ? `${memory.label} - click to enlarge photo`
                        : `Reveal memory: ${memory.label}`
                    }
                  >
                    <div className={`memory-photo memory-photo-${index + 1}`}>
                      {isRevealed ? (
                        <>
                          {memory.image ? (
                            <img
                              src={memory.image}
                              alt={memory.placeholder}
                              className="memory-sample-image polaroid-photo-reveal"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <>
                              <span className="memory-placeholder-emoji">
                                {memory.emoji}
                              </span>

                              <span className="memory-placeholder-label">
                                {memory.placeholder}
                              </span>
                            </>
                          )}

                          <span className="memory-tap-hint">
                            Memory revealed ♡
                          </span>
                        </>
                      ) : (
                        <div className="memory-hidden-content">
                          <span className="memory-question-mark">?</span>

                          <span className="memory-hidden-label">
                            A little surprise awaits...
                          </span>

                          <span className="memory-tap-hint">
                            Tap to reveal ♡
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="memory-card-content">
                      <span className="memory-card-label">{memory.label}</span>

                      {isRevealed && (
                        <span className="memory-caption memory-caption-revealed">
                          {memory.caption}
                        </span>
                      )}

                      {!isRevealed && (
                        <span className="memory-caption memory-caption-hidden">
                          Tap the card to uncover this memory ♡
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </article>
        ))}

        {/* Enlarged photo popup */}
        {activeMemory && (
          <div
            className="memory-popup-overlay"
            onClick={closeMemoryPopup}
            role="presentation"
          >
            <div
              className="memory-popup"
              role="dialog"
              aria-modal="true"
              aria-label={`Memory: ${activeMemory.label}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="memory-popup-close"
                onClick={closeMemoryPopup}
                aria-label="Close photo"
                title="Close photo"
              >
                ✕
              </button>

              {activeMemory.image ? (
                <img
                  src={activeMemory.image}
                  alt={activeMemory.placeholder}
                  className="memory-popup-image"
                />
              ) : (
                <div className="memory-popup-placeholder">
                  <span>{activeMemory.emoji}</span>
                  <p>{activeMemory.placeholder}</p>
                </div>
              )}

              <div className="memory-popup-caption">
                <h3>{activeMemory.label}</h3>
                <p>{activeMemory.caption}</p>
              </div>
            </div>
          </div>
        )}

        <footer className="memories-footer">
          <p>And through every little moment, one thing remained the same...</p>

          <h3>You were always surrounded by love. ♡</h3>
        </footer>
      </div>
    </section>
  );
}

export default Memories;
