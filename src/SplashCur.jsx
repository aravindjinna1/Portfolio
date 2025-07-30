import { useEffect, useState } from 'react';
import React from 'react';
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: 20,
        height: 20,
        backgroundColor: '#00c6ff',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;
