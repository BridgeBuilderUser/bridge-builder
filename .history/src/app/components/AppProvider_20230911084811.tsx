import { ThemeProvider } from "@/store/Theme";
import { UiProvider } from "@/store/Ui";
import Cursor from "./Cursor";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UiProvider>{children}</UiProvider>
      <Cursor />
    </ThemeProvider>
  );
}
