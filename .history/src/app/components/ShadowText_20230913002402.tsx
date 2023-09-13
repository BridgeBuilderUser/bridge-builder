"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function calculateMaxFontSize(textElement: HTMLDivElement) {
  gsap.set(textElement, { opacity: 0 });
  const headerHeight = document.querySelector("header")?.offsetHeight;
  if (!headerHeight) return;
  const targetHeight = window.innerHeight - headerHeight;
  let wordFits = false;
  let fontSize = 0;

  while (!wordFits) {
    textElement.style.fontSize = `${fontSize}px`;
    if (textElement.offsetWidth <= targetHeight) {
      fontSize++;
    } else {
      wordFits = true;
      fontSize--;
      gsap.set(textElement, { opacity: 1, writingMode: "vertical-rl", delay: 0.5});
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
      calculateMaxFontSize(text);
      // text.style.fontSize = `${window.innerHeight/text.textContent.length}px`;
    }
  }, []);


     

  return (
    <div ref={ref} className={`shadow-text fixed left-[-1%] z-[-1] font-montserrat-black font-black w-auto h-auto   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`}>
      {children}
    </div>
  );
}
