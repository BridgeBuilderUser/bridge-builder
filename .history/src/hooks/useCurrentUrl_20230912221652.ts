"use client"
import { useState, useEffect } from "react";

const useCurrentUrl = (url:string) => {
    return window.location.pathname === url;
}

export default useCurrentUrl;