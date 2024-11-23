import React, { useState, useEffect } from 'react';

interface RollingTextProps {
  texts: string[];
  interval?: number;
}

export function RollingText({ texts, interval = 2000 }: RollingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsRolling(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsRolling(false);
      }, 600);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className="relative inline-block min-w-[200px]">
      <div className={`word-roll ${isRolling ? 'exit' : ''} bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}>
        {texts[currentIndex]}
      </div>
    </div>
  );
}