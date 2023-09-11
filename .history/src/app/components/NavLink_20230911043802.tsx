"use client";

import { useState } from "react";
//
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
// import Link from "next/link";
import { classNames } from "@/lib/functions";
import { PopOver } from "./PopOver";
import { useCurrentUrl } from "@/hooks/useCurrentUrl";
import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
  current?: boolean;
  dropdown?: any;
}

export function NavLink({link} : any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isCurrent = useCurrentUrl(link.href);

  const el = (
    <Link
    href={link.href}
    className={classNames(
      "font-medium inline-block",
      isCurrent ? "text-black font-bold" : "text-gray-400 hover:text-gray-900"
    )}
    >
      {link.name}
    </Link>
  )

  if (link.dropdown) {

    return (
      <PopOver
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
       dropdownContent={link.dropdown}>
        {el}
      </PopOver>
    );
  }
    return (
      <>
        {el}
      </>
     
       
      

  );

}
