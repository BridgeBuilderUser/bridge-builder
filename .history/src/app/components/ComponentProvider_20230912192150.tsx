"use client";

import Cursor from "./Cursor";
import Scroller from "./Scroller";
import Footer from "@/Footer";

export default function ComponentProvider({
    children,
}:any) {
  return (
    <Scroller>
        {children}
        <Cursor />
        <Footer />
    </Scroller>
  )
}