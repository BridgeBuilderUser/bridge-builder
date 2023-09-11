
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { classNames } from '@/lib/functions'
import {
    ChevronDownIcon,
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftRightIcon,
    InboxIcon,
    QuestionMarkCircleIcon,
    XMarkIcon,
    } from "@heroicons/react/24/outline";
export function PopOver({
    children
}:any) {

    return (

        
        <Popover as="header" className="relative">
        <div className="bg-warm-gray-50">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 xl:px-8"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  
                </a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 lg:ml-10 lg:flex">
                
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="rounded-md border border-transparent bg-warm-gray-100 py-2 px-6 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
              >
                Login
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
 
            
    )
}