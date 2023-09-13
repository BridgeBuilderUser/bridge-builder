import cn from "classnames";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShadowText({
  children,
  position = "top",
  size = "30vh",
}: any) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const el = ref.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "0",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
      yPercent: -100,
      ease: "power2.out",
    });
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
