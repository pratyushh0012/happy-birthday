import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const BirthdayCelebration = () => {
  const [showBirthday, setShowBirthday] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [isClient, setIsClient] = useState(false);
<<<<<<< HEAD
=======
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "Happy Birthday Ira!!!";
>>>>>>> 2939c10 (brithday prompt section)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    setShowBirthday(true);
  }, []);

<<<<<<< HEAD
  // Generate confetti pieces
  useEffect(() => {
    if (showBirthday && typeof window !== 'undefined') {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
      const newConfetti = [];
      
      for (let i = 0; i < 150; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 10 + 5,
          speed: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
=======
  // Typewriter effect
  useEffect(() => {
    if (showBirthday && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, showBirthday, fullText]);

  // Generate confetti pieces
  useEffect(() => {
    if (showBirthday && typeof window !== 'undefined') {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#ff9f43', '#00d2d3', '#ff6348', '#2ed573', '#1e90ff'];
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
>>>>>>> 2939c10 (brithday prompt section)
        });
      }
      
      setConfetti(newConfetti);
    }
  }, [showBirthday]);

  // Animate confetti
  useEffect(() => {
    if (!showBirthday || typeof window === 'undefined') return;

    const interval = setInterval(() => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          y: piece.y + piece.speed,
          rotation: piece.rotation + piece.rotationSpeed,
<<<<<<< HEAD
        })).filter(piece => piece.y < window.innerHeight + 50)
      );
    }, 50);
=======
          x: piece.x + Math.sin(piece.wobble) * 0.5,
          wobble: piece.wobble + piece.wobbleSpeed,
        })).filter(piece => piece.y < window.innerHeight + 50)
      );
    }, 30);
>>>>>>> 2939c10 (brithday prompt section)

    return () => clearInterval(interval);
  }, [showBirthday]);

  if (!isClient || !showBirthday) return null;

  return (
    <>
      {/* Confetti overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
<<<<<<< HEAD
        {confetti.map(piece => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
=======
        {confetti.map(piece => {
          const getShapeStyle = () => {
            const baseStyle = {
>>>>>>> 2939c10 (brithday prompt section)
              left: piece.x,
              top: piece.y,
              backgroundColor: piece.color,
              width: piece.size,
              height: piece.size,
              transform: `rotate(${piece.rotation}deg)`,
<<<<<<< HEAD
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      {/* Birthday message overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background border border-border rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setShowBirthday(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Simple Happy Birthday text */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Happy Birthday Ira!
=======
              opacity: 0.9,
              position: 'absolute',
            };

            switch (piece.shape) {
              case 'circle':
                return { ...baseStyle, borderRadius: '50%' };
              case 'square':
                return { ...baseStyle, borderRadius: '2px' };
              case 'triangle':
                return {
                  ...baseStyle,
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent',
                  borderLeft: `${piece.size / 2}px solid transparent`,
                  borderRight: `${piece.size / 2}px solid transparent`,
                  borderBottom: `${piece.size}px solid ${piece.color}`,
                };
              case 'diamond':
                return {
                  ...baseStyle,
                  transform: `rotate(${piece.rotation}deg) rotate(45deg)`,
                  borderRadius: '2px',
                };
              default:
                return baseStyle;
            }
          };

          return (
            <div
              key={piece.id}
              style={getShapeStyle()}
            />
          );
        })}
      </div>

      {/* Birthday message overlay */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/30"
        onClick={() => setShowBirthday(false)}
      >
        <div className="bg-background border border-border rounded-2xl p-6 max-w-sm w-full text-center shadow-5xl animate-fade-in">
          {/* Simple Happy Birthday text */}
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            {currentIndex >= fullText.length && (
              <span className="text-foreground"> 🎉🎂🎈</span>
            )}
            {currentIndex < fullText.length && (
              <span className="text-foreground animate-pulse">|</span>
            )}
>>>>>>> 2939c10 (brithday prompt section)
          </h2>
        </div>
      </div>
    </>
  );
};
