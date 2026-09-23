import { useEffect, useState } from "react";
import "./CopperSection.css";

const copperImages = [
  "/images/copper-1.png",
  "/images/copper-2.png",
  "/images/copper-3.jpg",
  "/images/copper-4.png",
  "/images/copper-5.png",
  "/images/copper-6.png",
  "/images/copper-7.png",
  "/images/copper-8.png",
  "/images/copper-9.jpg",
];

function CopperSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % copperImages.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="copper-section" id="copper">
      <div className="copper-container">
        <h2 className="copper-heading">A Little Love, A Lot of Paws 🐾</h2>

        <div className="copper-content">
          {/* Left side - Copper photo slideshow */}
          <div className="copper-gallery">
            <div className="copper-photo-frame" key={currentImage}>
              <img
                src={copperImages[currentImage]}
                alt={`Copper memory ${currentImage + 1}`}
                className="copper-photo"
              />

              {/* <span className="copper-photo-heart">♡</span> */}
            </div>
          </div>

          {/* Right side - Sweet message */}
          <div className="copper-message">
            <p className="copper-subtitle">Your Four-Legged Best Friend 🐶</p>

            <p className="copper-description">
              No matter where life takes you,
              <br />
              you'll always be Copper's favourite human. ❤️
            </p>

            <div className="copper-divider">
              <span>🐾</span>
              <span>♡</span>
              <span>🐾</span>
            </div>

            <p className="copper-fun-message">
              P.S. Copper is already waiting for your next cuddle! 🐶💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CopperSection;
