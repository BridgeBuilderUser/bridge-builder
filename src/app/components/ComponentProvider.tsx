"use client";

import Cursor from "./Cursor";
import Scroller from "./Scroller";
import Footer from "@/Footer";
import Navigation from "@/Navigation";
import Debugger from "@/debug/Debugger";
import { useDebug } from "@/store/Debug";
import ToTop from "@/ToTop";

export default function ComponentProvider({ children }: any) {
    const { debugStore } = useDebug();
  return (
    <>
     <Navigation />
      <Scroller>
       
        {children}
        <Cursor />
        <Footer />
      </Scroller>
      <ToTop />
      {debugStore.debugMode && <Debugger />}
    </>
  );
}
