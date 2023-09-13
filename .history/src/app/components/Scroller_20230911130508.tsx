"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export default function Scroller({ children }:any) {
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

 

  useEffect(() => {
      gsap.to(".shadow-text", {
        scrollTrigger: {
          trigger: ".shadow-text",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
        yPercent: -100,
        ease: "power2.out",
      });

    // ScrollSmoother.create({
    //     wrapper: "#smooth-wrapper",
    //       content: "#smooth-content",
    // });
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 1,
    //   effects: true,
    //   onUpdate: (self) => {

    //     if(scrollTrackRef && scrollTrackRef.current && scrollBarRef && scrollBarRef.current) {
    //     // update scrollbar with scroll progress
    //     const scrollBarHeight =
    //       scrollTrackRef.current.clientHeight *
    //       (scrollTrackRef.current.clientHeight /
    //         scrollTrackRef.current.scrollHeight);
    //     gsap.to(scrollBarRef.current, {
    //       height: scrollBarHeight * self.progress,
    //       duration: 0.1,
    //       ease: "power2.out",
    //     });
    //   }
    //   }, 
  }, []);

  return (
    <>
      <div id="smooth-wrapper" className="flex w-full bg-white">
        <div id="smooth-content" className="flex flex-col w-full">
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
