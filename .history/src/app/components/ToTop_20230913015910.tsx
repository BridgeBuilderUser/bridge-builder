"use client";
import React, { useEffect, useState } from 'react';
import { useUi } from "@/store/Ui";
import { AiOutlineArrowUp } from 'react-icons/ai';
const ToTop = ({
    size = 90
}) => {
  const { uiStore } = useUi();
  const [showButton, setShowButton] = useState(false);
    const strokeWidth = 6;  // Adjust as needed
  // Calculate scroll dash offset based on scroll progress
  const circleRadius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * circleRadius;
 

  function calculateStrokeDashoffset() {
    
    return circumference * (1 - uiStore.scrollPercentage);
  }
  
  const dashOffset = calculateStrokeDashoffset(); // Resulting strokeDashoffset value
  

  useEffect(() => {
    // Show/hide the "to-top" button based on scroll position
    setShowButton(uiStore.scrollPercentage > 0);
  }, [uiStore.scrollPercentage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`to-top-button flex items-center justify-center fixed right-10 bottom-10 z-50 ${showButton ? 'to-top-enter' : ''}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 size size`}>
      <circle
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          fill="none"
          stroke="lightgray"
          strokeWidth={strokeWidth}
          className="absolute shadow-xl"
        />
         <circle
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          fill="none"
          stroke="#007bff"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="circle absolute z-10"
        />
        
      </svg>
        <AiOutlineArrowUp className={`absolute font-bold h-${size*.9}rem w-${size*.9}rem text-black`} />
    </div>
  );
};

export default ToTop;
