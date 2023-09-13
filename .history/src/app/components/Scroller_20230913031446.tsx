"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUi } from "@/store/Ui";
import { useDebug } from "@/store/Debug";

export default function Scroller({ children }: { children: React.ReactNode }) {
  const { uiStore, uiActions } = useUi();
  const { debugStore, debugActions }: any = useDebug();
  const { debugMode } = debugStore;
  const { scrollDirection, scrollPosition } = uiStore;
  const { setScrollDirection, setScrollPosition, setScrollPercentage } = uiActions;
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }, []);

  const calcScrollDirection = (dir: number) => {
    const direction = dir === 1 ? "down" : "up";

    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
  };

  useEffect(() => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;
    const barHeight = gsap.quickSetter(bar, "height", "px");
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      onUpdate: (self) => {
        if (self.scrollTrigger && track && bar) {
          const scrollTrigger = self.scrollTrigger as ScrollTrigger;

          if (debugMode) {
            calcScrollDirection(scrollTrigger.direction);
          }
          const s = scrollTrigger.progress * track.offsetHeight;

          barHeight(s);
            setScrollPosition(s);
            setScrollPercentage(scrollTrigger.progress);
            console.log(scrollTrigger.progress);
        }
      },
    });
  }, [scrollTrackRef, scrollBarRef, calcScrollDirection, debugMode, setScrollDirection, setScrollPosition, setScrollPercentage]);

  return (
    <>
      <div id="smooth-wrapper">
        <div 
        id="smooth-content"
        className="pt-[4rem]"
        >{children}</div>
      </div>

      <div
        className="scroll-track fixed w-[2px] right-[5px] h-[90vh] z-[99999]"
        ref={scrollTrackRef}
      >
        <div
          className="scroll-bar absolute top-0 w-full"
          ref={scrollBarRef}
        ></div>
      </div>
    </>
  );
}
