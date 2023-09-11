


const Hero = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            {children}
        </>
    )
}
function BasePage({ children }: { children: React.ReactNode }) {

    return (
        <main className="isolate bg-white">
            <Hero />
        </main>
    );
}

BasePage.Hero = Hero;
