import Image from "next/image";
export function LandingHero({ children }: { children: React.ReactNode }) {

    return (
        <div className="relative mt-10">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                fill
                className="hero h-full w-full object-cover "
                src={hero}
                alt="Bridge Builder"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r blue-gradient mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <div className="landing-hero block text-white">
                  <span>Honest.</span>
                  <span> Reliable.</span> <span>Practical.</span>
                </div>
                <span className="block text-indigo-200">Partners</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                Maximize Salesforce. Minimize Hassle. Contact Us for Seamless
                CRM.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </Link>
                  <Link
                    href="/solutions"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}