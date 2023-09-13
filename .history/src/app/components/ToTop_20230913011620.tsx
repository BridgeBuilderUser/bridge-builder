"use client";
import React, { useEffect, useState } from 'react';


import { useUi } from "@/store/Ui";
const ToTop = () => {
    const { uiStore, uiActions } = useUi();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setShowButton(window.scrollY > 200); // Adjust the scroll threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circleRadius = 18; // Adjust as needed
  const circumference = 2 * Math.PI * circleRadius;
  const dashOffset = circumference * (1 - Math.min(scrollY / 200, 1));

  return (
    <div className={`to-top-button fixed right-10 bottom-10 z-50 ${showButton ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={circleRadius}
          fill="none"
          stroke="#007bff"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="circle"
        />
      </svg>
    </div>
  );
};

export default ToTop;
