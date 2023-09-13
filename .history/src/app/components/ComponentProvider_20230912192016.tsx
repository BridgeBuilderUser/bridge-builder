"use client";

import Scroller from "./Scroller";

export default function ComponentProvider({
    children,
}:any) {
  return (
    <Scroller>
        {children}
        <Cursor />
    </Scroller>
  )
}