"use client"
const useCurrentUrl = (url:string) => {
    return window.location.pathname === url;
}

export default useCurrentUrl;