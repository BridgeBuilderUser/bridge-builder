"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function calculateMaxFontSize(word) {
  const container = document.createElement('div');
  // container.style.visibility = 'hidden';
  container.style.backgroundColor = 'red';
  container.style.position = 'fixed';
  container.style.height = '100vh'; // Set the container height to the height of the screen
  container.style.width = 'auto';
  container.style.transform = 'rotate(-90deg)';
  container.style.whiteSpace = 'nowrap';
  container.style.fontFamily = 'Arial'; // Change the font family as needed
  container.style.fontSize = '1px'; // Initial font size

  document.body.appendChild(container);

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



export default function ShadowText({
  children,
  position = "top",
  size = "30vh",
  word = "Bridge", // Add a word prop for the text you want to display
}: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = ref.current;

    if (word && text) {
      const calculatedFontSize = calculateMaxFontSize(word);
      text.style.fontSize = `${calculatedFontSize}px`;
      setFontSize(calculatedFontSize);
    }
  }, []);

  const classes = cn(
    `left-[-10%] z-[10000000] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb]   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`,
    {
      "top-0": position === "top",
      "top-1/2 -translate-y-1/2": position === "center",
    }
  );

  return (
    <div ref={ref} className={`shadow-text ${classes}`}>
      {children}
    </div>
  );
}
