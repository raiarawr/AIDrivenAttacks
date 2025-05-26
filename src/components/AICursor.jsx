import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function AICursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  // Update position
  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Listen for click and hover
  useEffect(() => {
    const handleClickDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150); // quick scale effect
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousedown', handleClickDown);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousedown', handleClickDown);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - 20, // Adjust to center
        y: position.y - 20,
        scale: isClicked ? 0.8 : isHovering ? 1.3 : 1,
        opacity: isHovering ? 0.2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="3"
        stroke={isHovering ? '#e01010' : '#ff0000'}
        fill="none"
        width="40"
        height="40"
      >
        <g>
          <circle cx="34.52" cy="11.43" r="5.82" />
          <circle cx="53.63" cy="31.6" r="5.82" />
          <circle cx="34.52" cy="50.57" r="5.82" />
          <circle cx="15.16" cy="42.03" r="5.82" />
          <circle cx="15.16" cy="19.27" r="5.82" />
          <circle cx="34.51" cy="29.27" r="4.7" />
          <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
          <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
          <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
          <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
          <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
          <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
          <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
          <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
          <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
        </g>
      </svg>
    </motion.div>
  );
}
