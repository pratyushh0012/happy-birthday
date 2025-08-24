import { useEffect, useState } from "react";

export const StarBackground = () => {
  // State to store the stars and meteors data
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Effect to create stars and meteors when component mounts
  useEffect(() => {
    // Generate initial stars and meteors
    generateStars();
    generateMeteors();

    // Function to regenerate stars when window is resized
    const handleResize = () => {
      generateStars();
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to create random stars
  const generateStars = () => {
    // Calculate number of stars based on screen size
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    // Create each star with random properties
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1-4px
        x: Math.random() * 100, // Random horizontal position (0-100%)
        y: Math.random() * 100, // Random vertical position (0-100%)
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5-1
        animationDuration: Math.random() * 4 + 2, // Random animation duration
      });
    }

    setStars(newStars);
  };

  // Function to create random meteors
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    // Create each meteor with random properties
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Random size
        x: Math.random() * 100, // Random horizontal position
        y: Math.random() * 20, // Random vertical position (top 20% of screen)
        delay: Math.random() * 15, // Random delay before animation starts
        animationDuration: Math.random() * 3 + 3, // Random animation duration
      });
    }

    setMeteors(newMeteors);
  };

  return (
    // Background container - covers entire screen
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Render all the stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render all the meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};