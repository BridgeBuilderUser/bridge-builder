"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function calculateMaxFontSize(textElement: HTMLDivElement) {
  const headerHeight = document.querySelector("header")?.offsetHeight;
  if (!headerHeight) return;
  const offset = headerHeight ;
  gsap.set(textElement, { opacity: 0, top: (window.innerHeight/2 ) + (offset/2), yPercent: -50 });
  
  const targetHeight = window.innerHeight - offset;
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
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }, []);

  useEffect(() => {
    const split = () => {
      const splitText = new SplitText(ref.current, { type: "chars", charsClass: "char"  });
      const chars = splitText.chars;
      const words = splitText.words;

      // gsap.set(ref.current, { perspective: 400 });

      // gsap.set(chars, { opacity: .5, yPercent: 100, transformOrigin: "0% 50%" });

      gsap.from(chars, {
        opacity: 0,
        xPercent: -100,
        stagger: 0.01,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",  
          scrub: true,
        },
      });

      
    };

    
    const text = ref.current;

    if (text && window && text.textContent) {
      calculateMaxFontSize(text);
      split();
      // text.style.fontSize = `${window.innerHeight/text.textContent.length}px`;
    }
  }, []);


     

  return (
    <div ref={ref} className={`shadow-text leading-none fixed left-[-1%] z-[1] font-montserrat-black font-black w-auto h-auto   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`}>
      {children}
    </div>
  );
}
