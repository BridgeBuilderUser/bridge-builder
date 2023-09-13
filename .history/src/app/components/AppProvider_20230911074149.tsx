import { ThemeProvider } from "@/store/Theme";

import  Cursor  from "./Cursor";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Cursor />
    </ThemeProvider>
  );
}