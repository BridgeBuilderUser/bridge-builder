"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import Logo from "./Logo";
import { AiOutlineCloseCircle} from "react-icons/ai";
import { useEffect } from "react";
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

  useEffect(() => {
    // const handleScroll = () => {
    //   gsap.to("header", {
    //     height: window.scrollY > 0 ? "60px" : "80px",
    //     duration: 0.5,
    //     ease: "power4.out",
    //   });
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <header className="flex items-center justify-center p-3 sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="flex w-full max-w-[90vw] h-full gap-5">
        <div className="w-1/6">
          <Logo className="h-full w-auto" />
        </div>
        <nav className={`${isMobile ? 'mobile' : ''} fixed h-screen w-screen bg-white top-0 left-0`}>
          <AiOutlineCloseCircle className="absolute top-5 right-5 h-10 w-10 text-black cursor-pointer" />
          <ul className="flex h-full w-full flex-col items-center justify-center gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-1/6 flex gap-5">
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
          >
            Request A Demo
          </Link>
         
        </div>
      </div>
    </header>
  );
}
