"use client";

import Cursor from "./Cursor";
import Scroller from "./Scroller";
import Footer from "@/Footer";
import Navigation from "@/Navigation";
import Debugger from "@/debug/Debugger";

export default function ComponentProvider({ children }: any) {
  return (
    <>
      <Scroller>
        <Navigation />
        {children}
        <Cursor />
        <Footer />
      </Scroller>
      <Debugger />
    </>
  );
}
