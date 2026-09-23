import "./FallingDecorations.css";

const decorations = [
  {
    id: 1,
    symbol: "🌸",
    left: "5%",
    delay: "0s",
    duration: "13s",
    size: "18px",
    type: "falling",
  },
  {
    id: 2,
    symbol: "✧",
    left: "14%",
    delay: "3s",
    duration: "16s",
    size: "24px",
    type: "falling",
  },
  {
    id: 3,
    symbol: "🌷",
    left: "24%",
    delay: "6s",
    duration: "14s",
    size: "17px",
    type: "falling",
  },
  {
    id: 4,
    symbol: "✦",
    left: "35%",
    delay: "1s",
    duration: "18s",
    size: "20px",
    type: "falling",
  },
  {
    id: 5,
    symbol: "🌼",
    left: "46%",
    delay: "8s",
    duration: "15s",
    size: "16px",
    type: "falling",
  },
  {
    id: 6,
    symbol: "✧",
    left: "57%",
    delay: "4s",
    duration: "17s",
    size: "25px",
    type: "falling",
  },
  {
    id: 7,
    symbol: "🌸",
    left: "67%",
    delay: "10s",
    duration: "14s",
    size: "19px",
    type: "falling",
  },
  {
    id: 8,
    symbol: "✦",
    left: "77%",
    delay: "2s",
    duration: "16s",
    size: "22px",
    type: "falling",
  },
  {
    id: 9,
    symbol: "🌷",
    left: "87%",
    delay: "7s",
    duration: "15s",
    size: "18px",
    type: "falling",
  },
  {
    id: 10,
    symbol: "✧",
    left: "96%",
    delay: "5s",
    duration: "19s",
    size: "20px",
    type: "falling",
  },

  // Copper's occasional paw prints
  {
    id: 11,
    symbol: "🐾",
    left: "12%",
    top: "38%",
    delay: "1s",
    duration: "18s",
    size: "35px",
    type: "paw",
  },
  {
    id: 12,
    symbol: "🐾",
    left: "82%",
    top: "68%",
    delay: "9s",
    duration: "20s",
    size: "40px",
    type: "paw",
  },
  {
    id: 13,
    symbol: "🐾",
    left: "35%",
    top: "22%",
    delay: "5s",
    duration: "22s",
    size: "38px",
    type: "paw",
    rotation: "-25deg",
  },
  {
    id: 14,
    symbol: "🐾",
    left: "68%",
    top: "82%",
    delay: "13s",
    duration: "24s",
    size: "43px",
    type: "paw",
    rotation: "30deg",
  },
];

function FallingDecorations() {
  return (
    <div className="falling-decorations" aria-hidden="true">
      {decorations.map((item) => (
        <span
          key={item.id}
          className={
            item.type === "paw"
              ? "falling-decoration paw-decoration"
              : "falling-decoration"
          }
          style={{
            left: item.left,
            top: item.type === "paw" ? item.top : undefined,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
            rotate: item.rotation,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}

export default FallingDecorations;
