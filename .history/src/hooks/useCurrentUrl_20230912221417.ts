"use client"
import { useState, useEffect } from "react";

const useCurrentUrl = () => {
    const [currentUrl, setCurrentUrl] = useState(null);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return currentUrl;
}