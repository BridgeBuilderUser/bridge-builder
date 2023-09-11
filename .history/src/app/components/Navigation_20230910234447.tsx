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
import Link from "next/link";

export default function Navigation() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#"},
    {
      name: "Solutions",
      href: "#",
      current: false,
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
    { name: "Blog", href: "#"},
    { name: "FAQ", href: "#"},
    { name: "Contact", href: "#"},
  ];
  return (
    <header>
      <Logo />
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={classNames(
                  link.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={link.current ? "page" : undefined}
              >
                {link.name}
              </Link>
            </li>
        </ul>
    </header>
  );
}
