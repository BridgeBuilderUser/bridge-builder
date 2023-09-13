"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Scroller({ children }: { children: React.ReactNode }) {
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);
  const barHeight = gsap.quickSetter(scrollBarRef.current, "height", "px");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.set(scrollTrackRef.current, {
      height: window.innerHeight / .9
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
