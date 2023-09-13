import {BasePage} from '@/BasePage'

import Link from 'next/link'
import Image from 'next/image'
 import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
export default function Page() {
  return (
    <BasePage>
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
        <div className="visible lg:absolute lg:inset-0 ">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              fill
              className="h-56 w-full object-cover md:relative lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>

            <div className="p-5 lg:p-10 w-full lg:w-1/2">
              <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3 break-words whitespace-break-spaces">
                We&apos;d love to hear from you! Send us a message using the form
                opposite, or email us. We&apos;d love to hear from you! Send us a
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
                
                <div className="text-right sm:col-span-2">
                 
                  <button

                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
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
    </BasePage>
  );
}
