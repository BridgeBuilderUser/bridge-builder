"use client";

import Cursor from "./Cursor";
import Scroller from "./Scroller";
import Footer from "@/Footer";
import Navigation from "@/Navigation";
import Debugger from "@/debug/Debugger";
import { useDebug } from "@/store/Debug";

export default function ComponentProvider({ children }: any) {
    const { debugStore } = useDebug();
  return (
    <>
      <Scroller>
        <Navigation />
        {children}
        <Cursor />
        <Footer />
      </Scroller>
      {debugStore.debugMode && <Debugger />}
    </>
  );
}
