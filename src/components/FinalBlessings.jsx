import { useEffect, useRef, useState } from "react";
import "./FinalBlessings.css";

const blessings = [
  {
    id: 1,
    title: "A Lifetime of Love ❤️",
    emoji: "💍",
    message:
      "May your marriage be filled with understanding, patience, laughter, and a love that grows stronger with every passing day. May you always find comfort and happiness in each other.",
  },
  {
    id: 2,
    title: "A Message from Amma & Appa 🌷",
    emoji: "🏡",
    message:
      "We will always be cheering for you. May your new home be filled with peace, warmth, respect, and countless beautiful memories. Wherever life takes you, your family will always be beside you.",
  },
  {
    id: 3,
    title: "From Your Sister, Princy 💕",
    emoji: "👭",
    message:
      "You may be starting a new chapter, but you'll always be my sister, my favourite person to tease, and my partner in crime. No distance or new responsibilities can ever change our bond. I love you endlessly!",
  },
  {
    id: 4,
    title: "Copper's Little Wish 🐾",
    emoji: "🐶",
    message:
      "Dear favourite human, I may miss our cuddles, playtime, and all our little moments, but I'll always be excited to see you again. No matter where you go, you'll forever be my special human. Love, Copper. 🐾❤️",
  },
  {
    id: 5,
    title: "A Beautiful New Beginning ✨",
    emoji: "🌸",
    message:
      "May this new journey bring you wonderful adventures, shared dreams, silly laughter, peaceful evenings, and a thousand reasons to smile. Here's to a beautiful life together!",
  },
];

function LetterReveal({ text, className, visible }) {
  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <span
            key={index}
            className={`finale-letter ${visible ? "visible" : ""}`}
            style={{ animationDelay: `${index * 18}ms` }}
          >
            {character === " " ? "\u00A0" : character}
          </span>
        ))}
      </span>
    </p>
  );
}

function FinalBlessings() {
  const [expandedBlessing, setExpandedBlessing] = useState(null);
  const finaleRef = useRef(null);
  const [finaleVisible, setFinaleVisible] = useState(false);

  useEffect(() => {
    const finaleElement = finaleRef.current;

    if (!finaleElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFinaleVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(finaleElement);

    return () => observer.disconnect();
  }, []);

  const toggleBlessing = (id) => {
    setExpandedBlessing((previous) => (previous === id ? null : id));
  };

  const replayInvitation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="blessings-section" id="final-blessings">
      <div className="blessings-container">
        <p className="blessings-eyebrow">With All Our Love</p>

        <h2 className="blessings-title">
          Your Beautiful <span>New Beginning</span> 🌸
        </h2>

        <p className="blessings-intro">
          A few wishes for the wonderful journey ahead. Open each little
          blessing with love. 💌
        </p>

        <div className="blessings-list">
          {blessings.map((blessing) => {
            const isExpanded = expandedBlessing === blessing.id;

            return (
              <article
                key={blessing.id}
                className={`blessing-card ${isExpanded ? "expanded" : ""}`}
              >
                <button
                  type="button"
                  className="blessing-card-button"
                  onClick={() => toggleBlessing(blessing.id)}
                  aria-expanded={isExpanded}
                >
                  <span className="blessing-emoji">{blessing.emoji}</span>

                  <span className="blessing-card-title">{blessing.title}</span>

                  <span className="blessing-toggle" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded && (
                  <div className="blessing-expanded-content">
                    <p className="blessing-message">{blessing.message}</p>

                    {blessing.id === 4 && (
                      <div className="copper-paw-prints" aria-hidden="true">
                        <span>🐾</span>
                        <span>🐾</span>
                        <span>🐾</span>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="blessings-finale" ref={finaleRef}>
          <span className="finale-flower" aria-hidden="true">
            🌷
          </span>

          <p className="finale-small">A new chapter, a lifetime of love</p>

          <h3 className="finale-title">Happy Bride-to-Be! 💍</h3>

          <LetterReveal
            className="finale-message"
            visible={finaleVisible}
            text="As you begin this beautiful new chapter, remember that no matter how far life takes you, you will always have a home in our hearts. May your marriage be filled with endless love, laughter, patience, and countless beautiful memories. ❤️"
          />

          <div className="finale-family-row">
            <LetterReveal
              className="finale-message"
              visible={finaleVisible}
              text="Amma, Appa, Princy, and Copper will always be cheering for you. We may miss having you around every day, but we will always be here for you—with open arms, warm hugs, and all our love. 🏡"
            />

            <svg
              className="finale-paw"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="paw print"
              role="img"
            >
              <ellipse cx="24" cy="31" rx="11" ry="9" fill="currentColor" />
              <ellipse cx="11" cy="17" rx="5" ry="7" fill="currentColor" />
              <ellipse cx="21" cy="11" rx="5" ry="7" fill="currentColor" />
              <ellipse cx="31" cy="12" rx="5" ry="7" fill="currentColor" />
              <ellipse cx="39" cy="20" rx="5" ry="7" fill="currentColor" />
            </svg>
          </div>

          <LetterReveal
            className="finale-signature"
            visible={finaleVisible}
            text="You are loved more than words can say. Today, tomorrow, and always. 💕"
          />

          <LetterReveal
            className="finale-signature"
            visible={finaleVisible}
            text="With all our love, forever and always. ❤️"
          />

          <button
            type="button"
            className="replay-button"
            onClick={replayInvitation}
          >
            Back to the Beginning ↑
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalBlessings;
