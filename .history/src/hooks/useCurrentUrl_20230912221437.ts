"use client"
import { useState, useEffect } from "react";

const useCurrentUrl = () => {
    const [currentUrl, setCurrentUrl] = useState<String | null>(null);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return currentUrl;
}

export default useCurrentUrl;