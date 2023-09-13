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

  const scrollProgress = (self:any) => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;
    const progress = self.scrollTrigger.progress * track.clientHeight;
            setScrollPosition(progress);
            gsap.to(bar, {
              height: progress,
              duration: 0.1,
            });
  }

  const dispatchScrollDirection = () => {

  }

  useEffect(() => {
    

    if (track && bar) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        onUpdate: (self) => {
          if (self.scrollTrigger) {
           
            const direction = self.scrollTrigger.direction;
            
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            
          }
        },
      });
    }
  }, [scrollTrackRef, scrollBarRef, setScrollDirection, setScrollPosition, scrollDirection]);

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
