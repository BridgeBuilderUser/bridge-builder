import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
 
export function PopOver({ children, dropdownContent }: any) {
  return (
    <Popover as="header" className="relative">
      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-warm-gray-50 p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
        <span className="sr-only">Open main menu</span>
        {children}
      </Popover.Button>

      <Transition
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
          className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden"
        >
          {dropdownContent}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
