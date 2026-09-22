import { useState } from "react";
import "./FunnyMessages.css";

const messages = [
  //   {
  //     id: 1,
  //     title: "The Remote Control 😎",
  //     emoji: "📺",
  //     message:
  //       "In your new home, remote control-ku oru pudhu owner varalaam... but remember, unga brother kitta irundha remote wars dhaan real training! 😂",
  //   },
  {
    id: 1,
    title: "Food Is Always Priority 🍕",
    emoji: "🍟",
    message:
      "Marriage life-la romance mukkiyam dhaan... aana food order panna marandhuta, adhu mattum serious issue! First feed her, then discuss anything. 😌",
  },
  {
    id: 2,
    title: "Shopping Alert 🛍️",
    emoji: "👗",
    message:
      "Shopping-ku ‘just 5 minutes’ nu sonna, adhu oru estimate mattum. Actual duration-ku calculator kooda work aagaadhu! 😂",
  },
  //   {
  //     id: 4,
  //     title: "Sister's Warning 🚨",
  //     emoji: "👭",
  //     message:
  //       "Dear new husband, she's sweet, lovely, and adorable... but her sister knows all the secrets. So behave yourself! 😏",
  //   },
  {
    id: 3,
    title: "Priority Status 💖",
    emoji: "📱",
    message:
      "You may be her husband now, but sister's calls still deserve an immediate answer. No ‘I'll call you later’ excuses accepted! 🤭",
  },
  {
    id: 4,
    title: "One Little Best Friend 🐶",
    emoji: "🐾",
    message:
      "Someone at home is going to miss your cuddles, playtime, and all those little moments. Your furry best friend will always be waiting to welcome you back with the happiest tail wags. ❤️",
  },
];

function FunnyMessages() {
  const [revealedMessages, setRevealedMessages] = useState([]);

  const toggleMessage = (id) => {
    setRevealedMessages((previous) =>
      previous.includes(id)
        ? previous.filter((messageId) => messageId !== id)
        : [...previous, id],
    );
  };

  return (
    <section className="funny-section" id="funny-messages">
      <div className="funny-container">
        <p className="funny-eyebrow">A Few Things You Should Know...</p>

        <h2 className="funny-title">
          Before You Become <span>a Wife</span> 💍
        </h2>

        <p className="funny-description">
          A few friendly reminders from the people who know you best. Tap each
          card to reveal your very important marriage guidelines! 😄
        </p>

        <div className="funny-grid">
          {messages.map((item) => {
            const isRevealed = revealedMessages.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                className={`funny-card ${isRevealed ? "revealed" : ""}`}
                onClick={() => toggleMessage(item.id)}
                aria-expanded={isRevealed}
              >
                <span className="funny-card-emoji">{item.emoji}</span>

                <h3 className="funny-card-title">{item.title}</h3>

                {isRevealed ? (
                  <p className="funny-card-message">{item.message}</p>
                ) : (
                  <span className="funny-card-hint">Tap to reveal 💌</span>
                )}
              </button>
            );
          })}
        </div>

        <p className="funny-ending">
          All jokes aside, you deserve a lifetime full of love, laughter,
          patience, and beautiful little moments. ❤️
        </p>
      </div>
    </section>
  );
}

export default FunnyMessages;
