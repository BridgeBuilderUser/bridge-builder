"use client";

import { useState } from "react";
//
import { BiChevronDown } from "react-icons/bi";
import { classNames } from "@/lib/functions";

import Dropdown from "./DropDown";
import { useCurrentUrl } from "@/hooks/useCurrentUrl";
import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
  current?: boolean;
  dropdown?: any;
}

export function NavLink({ link }: any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isCurrent = useCurrentUrl(link.href);

  const el = (
    <Link
      href={link.href}
      className={classNames(
        "font-medium inline-block text-[50px]",
        isCurrent ? "text-black font-bold" : "text-gray-400 hover:text-gray-900"
      )}
    >
      {link.name}
    </Link>
  );

  if (link.dropdown) {
    return (
      <Dropdown
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        isOpen={isDropdownOpen}
        dropdownContent={link.dropdown}
      >
        {el}
        <BiChevronDown className="inline-block ml-1 text-red-400" />
      </Dropdown>
    );
  }

  return <>{el}</>;
}
