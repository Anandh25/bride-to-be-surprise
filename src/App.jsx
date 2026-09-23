import { useRef, useState } from "react";
import gsap from "gsap";
import "./App.css";
import Memories from "./components/Memories";
import CopperSection from "./components/CopperSection";
import SisterLetter from "./components/SisterLetter";
import FinalBlessings from "./components/FinalBlessings";
import FallingDecorations from "./components/FallingDecorations";

function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const pageRef = useRef(null);
  const coverRef = useRef(null);
  const flapRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const sealRef = useRef(null);
  const butterflyRef = useRef(null);
  const welcomeRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const audioRef = useRef(null);

  // Toggle music mute/unmute.
  const toggleSound = () => {
    setIsMuted((currentMuted) => !currentMuted);
  };

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Start background music after the user's click.
    if (audioRef.current) {
      audioRef.current.volume = 0.5;

      audioRef.current.play().catch((error) => {
        console.log("Audio playback could not start:", error);
      });
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setHasOpened(true);
      },
    });

    // 1. The golden seal glows and gently enlarges.
    timeline.to(sealRef.current, {
      scale: 1.2,
      boxShadow: "0 0 35px rgba(255, 226, 151, 0.9)",
      duration: 0.45,
      ease: "power2.out",
    });

    // 2. The envelope's top flap opens.
    timeline.to(
      flapRef.current,
      {
        rotateX: 180,
        transformOrigin: "top center",
        duration: 0.75,
        ease: "power2.inOut",
      },
      "+=0.1",
    );

    // 3. The envelope panels move away from the center.
    timeline.to(
      leftPanelRef.current,
      {
        x: -180,
        rotate: -12,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.2",
    );

    timeline.to(
      rightPanelRef.current,
      {
        x: 180,
        rotate: 12,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<",
    );

    timeline.to(
      bottomPanelRef.current,
      {
        y: 150,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<",
    );

    // 4. The invitation cover fades away.
    timeline.to(
      coverRef.current,
      {
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.15",
    );

    // 5. The page background transitions to a warm cream color.
    timeline.to(
      pageRef.current,
      {
        backgroundColor: "#fbf5ed",
        duration: 1.2,
        ease: "power2.inOut",
      },
      "<",
    );

    // 6. Reveal the welcome screen.
    timeline.to(
      welcomeRef.current,
      {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    );

    // 7. The butterfly gently appears.
    timeline.fromTo(
      butterflyRef.current,
      {
        autoAlpha: 0,
        y: 20,
        scale: 0.6,
        rotation: -15,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    );

    // 8. Welcome text fades into view.
    timeline.fromTo(
      welcomeTextRef.current,
      {
        autoAlpha: 0,
        y: 25,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.3",
    );
  };

  return (
    <>
      <main className="invitation-page" ref={pageRef}>
        <FallingDecorations />

        {/* ================================
            INVITATION COVER
        ================================= */}

        <div className="invitation-cover" ref={coverRef}>
          <span className="cover-decoration decoration-top">✦</span>
          <span className="cover-decoration decoration-bottom">✧</span>

          <p className="cover-eyebrow">A LITTLE SURPRISE FOR YOU</p>

          {/* Envelope */}

          <div className="envelope">
            {/* Letter inside the envelope */}

            <div className="envelope-letter">
              <span className="envelope-heart">♡</span>

              <p>A little surprise is waiting for you...</p>
            </div>

            {/* Envelope side panels */}

            <div className="envelope-panel envelope-left" ref={leftPanelRef} />

            <div
              className="envelope-panel envelope-right"
              ref={rightPanelRef}
            />

            <div
              className="envelope-panel envelope-bottom"
              ref={bottomPanelRef}
            />

            {/* Envelope top flap */}

            <div className="envelope-flap" ref={flapRef} />

            {/* Golden seal button */}

            <button
              type="button"
              className="seal-button"
              ref={sealRef}
              onClick={openInvitation}
              disabled={isOpening}
              aria-label="Open the invitation"
            >
              <span className="seal-shine" />
              <span className="seal-icon">✦</span>
            </button>
          </div>

          <p className="cover-instruction">
            Someone special has a little something for you ♡
          </p>

          <p className="cover-hint">Tap the seal to open</p>
        </div>

        {/* ================================
            WELCOME SCREEN
        ================================= */}

        <section className="welcome-screen" ref={welcomeRef} aria-live="polite">
          <span
            className="welcome-butterfly"
            ref={butterflyRef}
            aria-hidden="true"
          >
            🦋
          </span>

          <div className="welcome-copy" ref={welcomeTextRef}>
            <p className="welcome-eyebrow">A LITTLE SURPRISE, MADE WITH LOVE</p>

            <h1>
              To the
              <br />
              <span>Beautiful Bride-to-Be</span>
            </h1>

            <div className="welcome-divider">
              <span>✧</span>
              <span>♡</span>
              <span>✧</span>
            </div>

            <p className="welcome-message">
              Before your beautiful new beginning,
              <br />
              we have something special just for you...
            </p>

            <p className="welcome-signature">With all our love ♡</p>
          </div>
        </section>

        {/* Background music */}

        <audio ref={audioRef} src="/audio/1.mp3" loop muted={isMuted} />
      </main>

      {/* ================================
          SOUND BUTTON
      ================================= */}

      <button
        type="button"
        className="sound-toggle-button"
        onClick={toggleSound}
        aria-label={
          isMuted ? "Unmute background music" : "Mute background music"
        }
        aria-pressed={isMuted}
        title={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          // Muted speaker icon
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="m17 9 5 6" />
            <path d="m22 9-5 6" />
          </svg>
        ) : (
          // Sound-on speaker icon
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        )}
      </button>

      {/* ================================
          MEMORIES SECTION
      ================================= */}

      {hasOpened && (
        <>
          <Memories />
          <CopperSection />
          <SisterLetter />
          <FinalBlessings />
        </>
      )}
    </>
  );
}

export default App;
