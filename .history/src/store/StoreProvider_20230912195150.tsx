import { ThemeProvider } from "./Theme";
import { DebugProvider } from "./Ui";
import { UiProvider } from "./Ui";


export default function StoreProvider({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider>
            <UiProvider>
                <DebugProvider>
                    {children}
                </DebugProvider>
            </UiProvider>
        </ThemeProvider>
    );
}