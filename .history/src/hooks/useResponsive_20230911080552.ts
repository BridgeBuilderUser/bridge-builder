import { useState, useEffect } from 'react';

const useResponsive = (breakpoints) => {
  const [responsiveValues, setResponsiveValues] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newResponsiveValues = {};

      for (const breakpoint in breakpoints) {
        if (breakpoints.hasOwnProperty(breakpoint)) {
          newResponsiveValues[breakpoint] = windowWidth >= breakpoints[breakpoint];
        }
      }

      setResponsiveValues(newResponsiveValues);
    };

    handleResize(); // Initial call

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints]);

  return responsiveValues;
};

export default useResponsive;
