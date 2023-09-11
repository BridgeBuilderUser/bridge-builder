

export function BasePage({ children }: { children: React.ReactNode }) {

    return (
        <main className="isolate bg-white">
            {children}
        </main>
    );
}