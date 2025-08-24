import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const BirthdayCelebration = () => {
  const [showBirthday, setShowBirthday] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    setShowBirthday(true);
  }, []);

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
        })).filter(piece => piece.y < window.innerHeight + 50)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [showBirthday]);

  if (!isClient || !showBirthday) return null;

  return (
    <>
      {/* Confetti overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map(piece => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: piece.x,
              top: piece.y,
              backgroundColor: piece.color,
              width: piece.size,
              height: piece.size,
              transform: `rotate(${piece.rotation}deg)`,
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
          </h2>
        </div>
      </div>
    </>
  );
};
