import "./FallingDecorations.css";

const decorations = [
  {
    id: 1,
    symbol: "🌸",
    left: "5%",
    delay: "0s",
    duration: "13s",
    size: "18px",
  },
  {
    id: 2,
    symbol: "✧",
    left: "14%",
    delay: "3s",
    duration: "16s",
    size: "24px",
  },
  {
    id: 3,
    symbol: "🌷",
    left: "24%",
    delay: "6s",
    duration: "14s",
    size: "17px",
  },
  {
    id: 4,
    symbol: "✦",
    left: "35%",
    delay: "1s",
    duration: "18s",
    size: "20px",
  },
  {
    id: 5,
    symbol: "🌼",
    left: "46%",
    delay: "8s",
    duration: "15s",
    size: "16px",
  },
  {
    id: 6,
    symbol: "✧",
    left: "57%",
    delay: "4s",
    duration: "17s",
    size: "25px",
  },
  {
    id: 7,
    symbol: "🌸",
    left: "67%",
    delay: "10s",
    duration: "14s",
    size: "19px",
  },
  {
    id: 8,
    symbol: "✦",
    left: "77%",
    delay: "2s",
    duration: "16s",
    size: "22px",
  },
  {
    id: 9,
    symbol: "🌷",
    left: "87%",
    delay: "7s",
    duration: "15s",
    size: "18px",
  },
  {
    id: 10,
    symbol: "✧",
    left: "96%",
    delay: "5s",
    duration: "19s",
    size: "20px",
  },
];

function FallingDecorations() {
  return (
    <div className="falling-decorations" aria-hidden="true">
      {decorations.map((item) => (
        <span
          key={item.id}
          className="falling-decoration"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}

export default FallingDecorations;
