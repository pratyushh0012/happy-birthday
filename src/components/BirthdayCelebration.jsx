import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const BirthdayCelebration = () => {
  const [showBirthday, setShowBirthday] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Typewriter state
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Happy Birthday Ira!!!';

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    setShowBirthday(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!showBirthday) return;
    if (currentIndex >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(fullText.slice(0, currentIndex + 1));
      setCurrentIndex((i) => i + 1);
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, showBirthday]);

  // Generate confetti pieces
  useEffect(() => {
    if (!showBirthday || typeof window === 'undefined') return;

    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57',
      '#ff9ff3', '#54a0ff', '#ff9f43', '#00d2d3', '#ff6348',
      '#2ed573', '#1e90ff'
    ];
    const shapes = ['circle', 'square', 'triangle', 'diamond'];
    const newConfetti = [];

    for (let i = 0; i < 200; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speed: Math.random() * 4 + 3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        wobble: Math.random() * 2,
        wobbleSpeed: Math.random() * 0.1 + 0.05,
      });
    }

    setConfetti(newConfetti);
  }, [showBirthday]);

  // Animate confetti
  useEffect(() => {
    if (!showBirthday || typeof window === 'undefined') return;

    const interval = setInterval(() => {
      setConfetti((prev) =>
        prev
          .map((piece) => ({
            ...piece,
            y: piece.y + piece.speed,
            rotation: piece.rotation + piece.rotationSpeed,
            x: piece.x + Math.sin(piece.wobble) * 0.5,
            wobble: piece.wobble + piece.wobbleSpeed,
          }))
          .filter((piece) => piece.y < window.innerHeight + 50)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [showBirthday]);

  if (!isClient || !showBirthday) return null;

  return (
    <>
      {/* Confetti overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((piece) => {
          const baseStyle = {
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.9,
            position: 'absolute',
          };

          let style;

          switch (piece.shape) {
            case 'circle':
              style = { ...baseStyle, backgroundColor: piece.color, borderRadius: '50%' };
              break;
            case 'square':
              style = { ...baseStyle, backgroundColor: piece.color, borderRadius: '2px' };
              break;
            case 'triangle':
              style = {
                ...baseStyle,
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderLeft: `${piece.size / 2}px solid transparent`,
                borderRight: `${piece.size / 2}px solid transparent`,
                borderBottom: `${piece.size}px solid ${piece.color}`,
              };
              break;
            case 'diamond':
              style = {
                ...baseStyle,
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation}deg) rotate(45deg)`,
                borderRadius: '2px',
              };
              break;
            default:
              style = { ...baseStyle, backgroundColor: piece.color };
          }

          return <div key={piece.id} style={style} />;
        })}
      </div>

      {/* Birthday message overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30">
        <div className="relative bg-background border border-border rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setShowBirthday(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close birthday message"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Animated Happy Birthday text */}
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            {currentIndex >= fullText.length && <span className="text-foreground"> 🎉🎂🎈</span>}
            {currentIndex < fullText.length && <span className="text-foreground animate-pulse">|</span>}
          </h2>
        </div>
      </div>
    </>
  );
};
