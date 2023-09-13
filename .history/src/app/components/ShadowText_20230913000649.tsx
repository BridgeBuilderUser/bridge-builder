"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function calculateMaxFontSize(textElement: HTMLDivElement) {
  const setSize = gsap.quickSetter(textElement, "fontSize", "px");
  gsap.set(textElement, { opacity: 0 });
  let wordFits = false;
  let fontSize = 0;

  while (!wordFits) {
    setSize(fontSize);
    if (textElement.offsetWidth <= window.innerHeight) {
      fontSize++;
    } else {
      wordFits = true;
      fontSize--;
      gsap.set(textElement, { opacity: 1 });
    }
  }

}



export default function ShadowText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    
    const text = ref.current;

    if (text && window && text.textContent) {
      // calculateMaxFontSize(text);
      text.style.fontSize = `${window.innerHeight/text.textContent.length}px`;
    }
  }, [window.innerHeight]);


     

  return (
    <div ref={ref} className={`shadow-text left-[-10%] z-[10000000] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb]   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`}>
      {children}
    </div>
  );
}
