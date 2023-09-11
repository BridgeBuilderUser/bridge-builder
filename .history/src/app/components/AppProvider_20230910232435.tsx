import { ThemeProvider } from "@/store/Theme";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}