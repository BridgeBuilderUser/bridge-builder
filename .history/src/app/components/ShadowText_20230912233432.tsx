"use client";
import cn from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function calculateMaxFontSize(word) {
  // Function definition from previous response...
}

export default function ShadowText({
  children,
  position = "top",
  size = "30vh",
  word, // Add a word prop for the text you want to display
}: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = ref.current;

    if (word && text) {
      const calculatedFontSize = calculateMaxFontSize(word);
      text.style.fontSize = `${calculatedFontSize}px`;
      setFontSize(calculatedFontSize);
    }
  }, [word, ref]);

  const classes = cn(
    `left-[-10%] z-[-1] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb]   bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`,
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
