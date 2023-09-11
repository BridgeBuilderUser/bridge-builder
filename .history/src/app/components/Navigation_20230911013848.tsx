"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "@/lib/functions";
import {
  ChevronDownIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Logo from "./Logo";

import { NavLink } from "./NavLink";

export default function Navigation() {
  const links = [
    { name: "About", href: "/about" },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        {
          name: "Inbox",
          description:
            "Get a better understanding of where your traffic is coming from.",
          href: "#",
          icon: InboxIcon,
        },
        {
          name: "Messaging",
          description:
            "Speak directly to your customers in a more meaningful way.",
          href: "#",
          icon: ChatBubbleBottomCenterTextIcon,
        },
        {
          name: "Live Chat",
          description: "Your customers' data will be safe and secure.",
          href: "#",
          icon: ChatBubbleLeftRightIcon,
        },
        {
          name: "Knowledge Base",
          description:
            "Connect with third-party tools that you're already using.",
          href: "#",
          icon: QuestionMarkCircleIcon,
        },
      ],
    },
    // { name: "Blog", href: "#" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="flex items-center justify-center p-3 sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="flex w-full max-w-[90vw] bg-red-500">
        <div className="w-1/6">
          <Logo size="w-[80px]" />
        </div>
        <nav className="bg-pink-400 w-full flex items-center justify-end">
          <ul className="flex items-center justify-end bg-green-500">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-1/6"></div>
      </div>
    </header>
  );
}
