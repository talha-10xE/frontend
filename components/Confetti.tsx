
import React, { useState, useEffect } from 'react';

const ConfettiPiece: React.FC<{ initialX: number; initialY: number; color: string }> = ({ initialX, initialY, color }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY, rotation: Math.random() * 360 });
  
  useEffect(() => {
    const animation = setTimeout(() => {
      setPosition(p => ({
        x: p.x + (Math.random() - 0.5) * 100,
        y: p.y + Math.random() * 100 + 50,
        rotation: p.rotation + (Math.random() - 0.5) * 720
      }));
    }, 50);
    return () => clearTimeout(animation);
  }, []);

  return (
    <div
      className="absolute rounded-full transition-all duration-1000 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '10px',
        height: '10px',
        backgroundColor: color,
        transform: `rotate(${position.rotation}deg)`,
        opacity: 0
      }}
    />
  );
};

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const colors = ['#8e44ad', '#e67e22', '#27ae60', '#3498db', '#f1c40f'];
    const newPieces = Array.from({ length: 100 }).map((_, i) => {
      const color = colors[i % colors.length];
      return (
        <ConfettiPiece
          key={i}
          initialX={window.innerWidth / 2}
          initialY={window.innerHeight / 2}
          color={color}
        />
      );
    });
    setPieces(newPieces);
  }, []);

  return <div className="fixed inset-0 pointer-events-none z-50">{pieces}</div>;
};

export default Confetti;
