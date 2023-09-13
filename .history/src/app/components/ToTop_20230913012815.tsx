"use client";
import React, { use, useEffect, useState } from 'react';
import { useUi } from "@/store/Ui";
import gsap from "gsap";

const ToTop = () => {
  const { uiStore } = useUi();
  const [showButton, setShowButton] = useState(false);

  // Calculate scroll dash offset based on scroll progress
  const circleRadius = 18; // Adjust as needed
  const circumference = 2 * Math.PI * circleRadius;
  const scrollProgress = uiStore.scrollPosition;
  const dashOffset = circumference * (1 - Math.min(scrollProgress / 200, 1));

  useEffect(() => {
    // Show/hide the "to-top" button based on scroll position
    console.log(uiStore.scrollPosition);
    setShowButton(scrollProgress > 200);
  }, [uiStore.scrollPosition]);

  useEffect(() => {

    gsap.to(".to-top-button", {
        opacity: 1,
        yPercent: 100,
        duration: .3,
        ease: "elastic.inOut",
    })

    }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`to-top-button fixed right-10 bottom-10 z-50`} onClick={scrollToTop}>
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
