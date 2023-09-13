import cn from "classnames";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShadowText({
  children,
  position = "top",
  size = "30vh",
}: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = ref.current as HTMLDivElement;
    // write fn that salculates the size of the text when rotated 90 deg so it fits the screen
    const calcSize = () => {
      

      const textHeight = text.offsetHeight;
      const textWidth = text.offsetWidth;

      const textDiagonal = Math.sqrt(
        Math.pow(textHeight, 2) + Math.pow(textWidth, 2)
      );

      const textDiagonalInVh = (textDiagonal / window.innerHeight) * 100;

      return textDiagonalInVh;
    };

    const textDiagonalInVh = calcSize();

    text.style.fontSize = `${textDiagonalInVh}vh`;

  }, []);


 

  const classes = cn(
    `left-[-10%] z-[-1] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb] text-[40vh] bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`,
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
