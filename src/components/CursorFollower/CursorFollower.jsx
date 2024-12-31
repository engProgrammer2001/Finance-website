import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.4, // Adjust the multiplier for smoother animation
        y: prev.y + (position.y - prev.y) * 0.4,
      }));
    }, 1000 / 100); // 60 FPS for smooth updates

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="bg-gray-900">
      {/* Circle div */}
      <div
        className="hidden lg:flex fixed w-8 h-8 border-2 border-green-500 rounded-full pointer-events-none z-50 justify-center items-center transition-transform duration-300"
        style={{
          top: `${smoothPosition.y}px`,
          left: `${smoothPosition.x}px`,
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 255, 0, 0.4), 0 4px 6px -2px rgba(0, 255, 0, 0.2)",
        }}
      >
        {/* Dot div */}
        <div
          className="w-2 h-2 bg-green-500 rounded-full"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(0, 255, 0, 0.4), 0 4px 6px -2px rgba(0, 255, 0, 0.2)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CursorFollower;
