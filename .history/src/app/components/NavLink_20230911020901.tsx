"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { classNames } from "@/lib/functions";
import { PopOver } from "./PopOver";
import { useCurrentUrl } from "@/hooks/useCurrentUrl";

interface NavLinkProps {
  name: string;
  href: string;
  current?: boolean;
  dropdown?: any;
}

export function NavLink({ link }: NavLinkProps) {
  const isCurrent = useCurrentUrl(link.href);

    return (
      <Link
        href={link.href}
        className={classNames(
          "block px-3 py-2 font-medium",
          isCurrent ? "font-bold text-black" : "text-gray-400"rgb(99, 102, 241)
        )}

        aria-current={link.current ? "page" : undefined}
      >
        {link.name}
      </Link>

  );

}
