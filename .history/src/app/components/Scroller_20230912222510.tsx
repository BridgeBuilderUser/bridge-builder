"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUi } from "@/store/Ui";

export default function Scroller({ children }: { children: React.ReactNode }) {
  const { uiStore, uiActions } = useUi();
  const { scrollDirection } = uiStore;
  const { setScrollDirection, setScrollPosition } = uiActions;
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }, []);

  useEffect(() => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;

    if (track && bar) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        onUpdate: (self) => {
          if (self.scrollTrigger) {
            const progress = self.scrollTrigger.progress * track.clientHeight;
            const direction = self.scrollTrigger.direction;
            setScrollPosition(progress);
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            gsap.to(bar, {
              height: progress,
              duration: 0.1,
            });
          }
        },
      });
    }
  }, [scrollTrackRef, scrollBarRef, setScrollDirection, setScrollPosition]);

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
