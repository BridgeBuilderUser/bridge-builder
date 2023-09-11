"use client";
import {BasePage} from '@/BasePage'

 
export default function Page() {
  return (
    <>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
            Convallis feugiat et aliquet pellentesque dictum nisi, velit.
            Egestas fermentum adipiscing risus quam ac consectetur mattis turpis
            tristique.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>

            <div className="p-5 lg:p-10 w-full lg:w-1/2">
              <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">
                Let's work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3 break-words whitespace-break-spaces">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us. We’d love to hear from you! Send us a
                message using the form opposite, or email us.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">
                    Expected budget
                  </legend>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    <div className="flex items-center">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        defaultValue="under_25k"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-under-25k" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          Less than $25K
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        defaultValue="25k-50k"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-25k-50k" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          $25K – $50K
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        defaultValue="50k-100k"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-50k-100k" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          $50K – $100K
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        defaultValue="over_100k"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-over-100k" className="ml-3">
                        <span className="block text-sm text-gray-700">
                          $100K+
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="how-did-you-hear-about-us"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-grape-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>


      </div>

      {/* CTA Section */}
      <div className="bg-grape-400">
        <div className="mx-auto max-w-md py-16 px-4 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="block text-white">Looking for a new career?</span>
            <span className="block text-grape-900">We’re hiring.</span>
          </h2>
          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium text-grape-600 shadow-md hover:bg-grape-50 sm:w-auto"
          >
            <span>See open positions</span>
            <ArrowTopRightOnSquareIcon
              className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </>
  );
}
