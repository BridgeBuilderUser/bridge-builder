"use client"
import { mobileBreakPoints } from "@/lib/constants"

export const useBreakpoints = () => {
    const [breakpoint, setBreakpoint] = useState<String | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakPoints.md}px)`);

        mediaQuery.addEventListener("change", handleBreakpointChange);
        handleBreakpointChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleBreakpointChange);
        };
    }
        , []);

    const handleBreakpointChange = (mediaQuery: MediaQueryListEvent) => {
        if (mediaQuery.matches) {
            setBreakpoint("xs");
        } else {
            setBreakpoint("md");
        }
    }

    return breakpoint;
}