import { useState } from "react";
import "./SisterLetter.css";

function SisterLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="sister-letter-section" id="sister-letter">
      <div className="sister-letter-container">
        <p className="letter-eyebrow">A Little Something From Your Sister</p>

        <h2 className="letter-title">
          From <span>My Heart</span> 💌
        </h2>

        <p className="letter-intro">
          Some feelings are too special to fit into a simple message. So here's
          a little letter, just for you.
        </p>

        <div className={`letter-envelope ${isOpen ? "letter-open" : ""}`}>
          {!isOpen ? (
            <button
              type="button"
              className="letter-open-button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Princy's letter"
            >
              <span className="letter-envelope-icon">💌</span>
              <span className="letter-envelope-label">
                A letter from Princy
              </span>
              <span className="letter-open-hint">Tap to open</span>
            </button>
          ) : (
            <article className="letter-paper">
              <p className="letter-greeting">My dearest sister, ❤️</p>

              <p>
                I still can't believe that your big day is almost here. It feels
                like just yesterday we were making silly memories, laughing over
                the smallest things, and annoying each other like only sisters
                can.
              </p>

              <p>
                No matter how much we tease each other, you will always be
                someone incredibly special to me. You are not just my sister;
                you are my childhood, my comfort, my partner in crime, and one
                of the biggest blessings in my life.
              </p>

              <p>
                As you begin this beautiful new chapter, I hope your days are
                filled with patience, understanding, endless laughter, and a
                love that keeps growing stronger with every passing year. May
                your new home always be filled with warmth, peace, and joy.
              </p>

              <p>
                Amma Stella, Appa Benit, and all of us will always be cheering
                for you. And of course, Copper will be waiting for those
                familiar cuddles, playtime, and special moments with you. 🐾
              </p>

              <p>
                Wherever life takes you, never forget that you will always have
                a home in my heart. Marriage may bring a new journey, but it can
                never change the bond we share.
              </p>

              <p>
                I may not say it every day, but I love you more than words can
                explain. I am so proud of you, and I wish you a lifetime of
                beautiful memories and happiness.
              </p>

              <p className="letter-signoff">
                With all my love, always,
                <br />
                <span>Princy 💕</span>
              </p>

              <button
                type="button"
                className="letter-close-button"
                onClick={() => setIsOpen(false)}
              >
                Fold the letter 💌
              </button>
            </article>
          )}
        </div>

        <p className="letter-bottom-note">
          Different chapters, same sisterly bond. Always. ❤️
        </p>
      </div>
    </section>
  );
}

export default SisterLetter;
