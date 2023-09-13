"use client";

import Cursor from "./Cursor";
import Scroller from "./Scroller";
import Footer from "@/Footer";
import Navigation from "@/Navigation";

export default function ComponentProvider({
    children,
}:any) {
  return (
    <Scroller>
        <Navigation />
        {children}
        <Cursor />
        <Footer />
    </Scroller>
  )
}