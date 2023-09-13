import { ThemeProvider } from "@/store/Theme";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Cursor />
    </ThemeProvider>
  );
}