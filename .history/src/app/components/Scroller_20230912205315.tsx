"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Scroller({ children }:any) {
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;

    // update scrollbar height
    if(track !== null && bar !== null && track.clientHeight && bar.clientHeight) {
      const trackHeight = track.clientHeight;
      const barHeight = bar.clientHeight;
    }
    const scrollBarHeight = track.clientHeight * (track.clientHeight / track.scrollHeight);
    

    ScrollSmoother.create({

      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      onUpdate: (self) => {

        if(scrollTrackRef && scrollTrackRef.current && scrollBarRef && scrollBarRef.current) {
        // update scrollbar with scroll progress
        const scrollBarHeight =
          track.clientHeight *
          (track.clientHeight /
            track.scrollHeight);
        gsap.to(scrollBarRef.current, {
          height: scrollBarHeight * self.progress,
          duration: 0.1,
          ease: "power2.out",
        });
        }
      },
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper" >
        <div id="smooth-content"  >
          {children}
        </div>
      </div>

      <div
        className="scroll-track fixed w-[2px] right-[5px] h-[90vh] z-[99999]"
        ref={scrollTrackRef}
      >
        <div
          className="scroll-bar absolute top-0w-full"
          ref={scrollBarRef}
        ></div>
      </div>
    </>
  );
}
