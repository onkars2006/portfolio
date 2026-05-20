import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const normalColor = "rgba(16, 185, 129, 1)";
  const hoverColor = "rgba(20, 184, 166, 1)";
  const ringColor = "rgba(16, 185, 129, 0.3)";
  const hoverRingColor = "rgba(20, 184, 166, 0.4)";
  const hoverBgColor = "rgba(20, 184, 166, 0.1)";

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[10000] transition-transform duration-75 ease-out shadow-lg"
        style={{ 
          backgroundColor: isPointer ? hoverColor : normalColor,
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isPointer ? 0.6 : 1})`
        }}
      />
      <div 
        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out backdrop-blur-[1px]"
        style={{ 
          borderColor: isPointer ? hoverRingColor : ringColor,
          backgroundColor: isPointer ? hoverBgColor : 'transparent',
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isPointer ? 1.3 : 1})`
        }}
      />
    </>
  );
}