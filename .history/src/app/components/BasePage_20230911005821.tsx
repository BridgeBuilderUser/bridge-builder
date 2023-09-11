

export function BasePage({ children }: { children: React.ReactNode }) {

    return (
        <div className="bg-white">
            {children}
        </div>
    );
}