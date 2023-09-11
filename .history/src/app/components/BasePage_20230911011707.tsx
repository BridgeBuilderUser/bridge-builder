


const Hero = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            {children}
        </>
    )
}
export function BasePage({ children }: { children: React.ReactNode }) {

    return (
        <main className="isolate bg-white">
            <div className="h-10"></div>
            <Hero>
                {children}
            </Hero>
        </main>
    );
}

BasePage.Hero = Hero;
