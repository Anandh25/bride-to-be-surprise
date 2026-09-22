import { useState } from "react";
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

function FinalBlessings() {
  const [expandedBlessing, setExpandedBlessing] = useState(null);

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
                  <p className="blessing-message">{blessing.message}</p>
                )}
              </article>
            );
          })}
        </div>

        <div className="blessings-finale">
          <span className="finale-flower" aria-hidden="true">
            🌷
          </span>

          <p className="finale-small">A new chapter, a lifetime of love</p>

          <h3 className="finale-title">Happy Bride-to-Be! 💍</h3>

          <p className="finale-message">
            May your heart always be full, your home always be warm, and your
            days always hold a little magic. You are so loved — today, tomorrow,
            and always. ❤️
          </p>

          <p className="finale-signature">
            With love, from everyone who loves you. 💕
          </p>

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
