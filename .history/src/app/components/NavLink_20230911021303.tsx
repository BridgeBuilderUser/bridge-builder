"use client";
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

export function NavLink(link : NavLinkProps) {
  const isCurrent = useCurrentUrl(link.href);

    return (
     
        <Link
          href={link.href}
          className={classNames(
            "font-medium inline-block",
            isCurrent ? "text-black font-bold" : "text-gray-300 hover:text-gray-900"
          )}
          >
            {link.name}
          </Link>
      

  );

}
