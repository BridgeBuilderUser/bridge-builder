import { ThemeProvider } from "@/store/Theme";
import { UiProvider } from "@/store/Ui";
import { DebugProvider } from "@/store/Debug";
export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UiProvider>
        <DebugProvider>{children}</DebugProvider>
      </UiProvider>
    </ThemeProvider>
  );
}
