import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
 import {BiChevronDown} from 'react-icons/bi'
export function PopOver({ children, isOpen, dropdownContent }: any) {
  return (
    <Popover as="header" className="relative">
      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
        <span className="sr-only">Open main menu</span>
        {children}
        <BiChevronDown className="ml-2 h-5 w-5 stroke-black fill-black" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute bg-red-500 inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden"
        >
          {dropdownContent}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
