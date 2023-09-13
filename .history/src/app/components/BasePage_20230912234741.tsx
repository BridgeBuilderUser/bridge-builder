import ShadowText from "./ShadowText";



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
            <Hero>
                {children}
            </Hero>
            <ShadowText text="Bridge" />
        </main>
    );
}

BasePage.Hero = Hero;
