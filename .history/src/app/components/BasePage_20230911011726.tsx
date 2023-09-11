


const Hero = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="mt-10">
            {children}
        </div>
    )
}
export function BasePage({ children }: { children: React.ReactNode }) {

    return (
        <main className="isolate bg-white">
            <Hero>
                {children}
            </Hero>
        </main>
    );
}

BasePage.Hero = Hero;
