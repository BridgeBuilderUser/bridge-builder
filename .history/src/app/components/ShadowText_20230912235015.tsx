"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function calculateMaxFontSize(textElement) {
  

  let fontSize = 1;
  let wordFits = false;

  while (!wordFits) {
    container.style.fontSize = `${fontSize}px`;
    container.textContent = word;
    if (container.offsetWidth <= window.innerHeight) {
      fontSize++;
    } else {
      wordFits = true;
      fontSize--;
    }
  }

  // document.body.removeChild(container);
  return fontSize;
}



export default function ShadowText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    
    const text = ref.current;

    if (text) {
      const calculatedFontSize = calculateMaxFontSize(text);
      text.style.fontSize = `${calculatedFontSize}px`;
      setFontSize(calculatedFontSize);
    }
  }, []);


     

  return (
    <div ref={ref} className={`shadow-text left-[-10%] z-[10000000] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb]   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`}>
      {children}
    </div>
  );
}
