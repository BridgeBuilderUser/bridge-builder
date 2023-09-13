import { ThemeProvider } from "@/store/Theme";
import { UiProvider } from "@/store/Ui";
import Cursor from "../app/components/Cursor";
import { DebugProvider } from "@/store/Debug";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UiProvider>
        <DebugProvider>{children}</DebugProvider>
      </UiProvider>
      <Cursor />
    </ThemeProvider>
  );
}
