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
        <main className="isolate bg-white pt-10">
            <Hero>
                {children}
            </Hero>
            <ShadowText>
                BRIDGE
            </ShadowText>
        </main>
    );
}

BasePage.Hero = Hero;
