"use client"
import { useState, useEffect } from "react";

export const useBreakpoints = (breakpoints = { xs: 320, sm: 400, md: 720 }) => {
  const [breakpoint, setBreakpoint] = useState<string | null>(null);

  useEffect(() => {
    const handleBreakpointChange = (mediaQuery: MediaQueryListEvent) => {
      const matchingBreakpoint = Object.keys(breakpoints).find((key) =>
        mediaQuery.matches ? mediaQuery.media === `(max-width: ${breakpoints[key]}px)` : false
      );

      if (matchingBreakpoint) {
        setBreakpoint(matchingBreakpoint);
      }
    };

    const mediaQueries = Object.keys(breakpoints).map((key) =>
      window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
    );

    mediaQueries.forEach((mediaQuery) => {
      mediaQuery.addEventListener("change", handleBreakpointChange);
      handleBreakpointChange(mediaQuery);
    });

    return () => {
      mediaQueries.forEach((mediaQuery) =>
        mediaQuery.removeEventListener("change", handleBreakpointChange)
      );
    };
  }, [breakpoints]);

  return breakpoint;
};
