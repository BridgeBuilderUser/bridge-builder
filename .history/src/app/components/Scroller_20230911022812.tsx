"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function Scroller({ children }) {
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

  const setScrollbar = (scrolled) => {
    gsap.to(scrollBarRef.current, {
      height:
        (scrolled / scrollTrackRef.current.clientHeight) *
        scrollTrackRef.current.clientHeight,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      onUpdate: (self) => {
        // update scrollbar with scroll progress
        const scrollBarHeight =
          scrollTrackRef.current.clientHeight *
          (scrollTrackRef.current.clientHeight /
            scrollTrackRef.current.scrollHeight);
        gsap.to(scrollBarRef.current, {
          height: scrollBarHeight * self.progress,
          duration: 0.1,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper" className="flex w-full bg-white">
        <div id="smooth-content" className="flex flex-col w-full pt-[5rem]">
          {children}
        </div>
      </div>

      <div
        className="scroll-track fixed w-[2px] bg-gray-8 right-[5px] h-[90vh] z-[99999]"
        ref={scrollTrackRef}
      >
        <div
          className="scroll-bar absolute top-0 bg-black w-full"
          ref={scrollBarRef}
        ></div>
      </div>
    </>
  );
}
