"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Scroller({ children }: { children: React.ReactNode }) {
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }, []);

  useEffect(() => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;

    if (track && bar) {
      // update scrollbar height
      const trackHeight = track.clientHeight;
      const barHeight = bar.clientHeight;

      const scrollBarHeight =
        trackHeight * (trackHeight / track.scrollHeight);

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        onUpdate: (self) => {
          console.log(self.progress);
          if (scrollTrackRef.current && scrollBarRef.current) {
            const updatedTrack = scrollTrackRef.current;
            const updatedBar = scrollBarRef.current;

            // update scrollbar with scroll progress
            const updatedScrollBarHeight =
              updatedTrack.clientHeight *
              (updatedTrack.clientHeight /
                updatedTrack.scrollHeight);

              // update the scroll bar height 
              updatedBar.style.height = `${updatedScrollBarHeight * self.progress}px`;
            // gsap.to(updatedBar, {
            //   height: updatedScrollBarHeight * self.progress,
            //   duration: 0.1,
            //   ease: "power2.out",
            // });
          }
        },
      });
    }
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>

      <div className="scroll-track fixed w-[2px] right-[5px] h-[90vh] z-[99999]" ref={scrollTrackRef}>
        <div className="scroll-bar absolute top-0 w-full" ref={scrollBarRef}></div>
      </div>
    </>
  );
}
