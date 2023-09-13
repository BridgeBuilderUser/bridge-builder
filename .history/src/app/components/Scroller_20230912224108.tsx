"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUi } from "@/store/Ui";
import { useDebug } from "@/store/Debug";

export default function Scroller({ children }: { children: React.ReactNode }) {
  const { uiStore, uiActions } = useUi();
  const { debugMode } = useDebug();
  const { scrollDirection } = uiStore;
  const { setScrollDirection, setScrollPosition } = uiActions;
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);
  const barHeight = gsap.quickSetter(scrollBarRef.current, "height", "px");
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }, []);

  const calcScrollProgress = (progress: number) => {
    barHeight(progress);

    if(debugMode) {
      setScrollPosition(progress);
    }
  };

  const calcScrollDirection = (dir:number) => {
    const direction = self..direction;

    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
  };

  useEffect(() => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        onUpdate: ({ scrollTrigger }) => {
          if (scrollTrigger && track && bar) {
            calcScrollProgress(scrollTrigger.progress * track.offsetHeight);
            calcScrollDirection(scrollTrigger.direction);
          }
        },
      });
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
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
