"use client";
import { useEffect, useState } from 'react';

const ToTop = () => {
  const [scrollY, setScrollY] = useState(0);
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

  return (
    <div className={`to-top-button fixed z-50 right-10 bottom-10 ${showButton ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#007bff" strokeWidth="5" />
      </svg>
    </div>
  );
};

export default ToTop;
