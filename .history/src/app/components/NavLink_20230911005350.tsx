"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { classNames, matchUrl } from "@/lib/functions";
import { PopOver } from "./PopOver";
import { useCurrentUrl } from "@/hooks/useCurrentUrl";

interface NavLinkProps {
  name: string;
  href: string;
  current?: boolean;
  dropdown?: any;
}

export function NavLink({ ...link }: NavLinkProps) {
    const isCurrent = useCurrentUrl(link.href);
  const linkElement = (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="nav-link"
    >
      <Link
        href={link.href}
        className={classNames(
            isCurrent
            ? "bg-gray-900 text-white"
            : "text-gray-500 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        )}
        aria-current={link.current ? "page" : undefined}
      >
        {link.name}
      </Link>
    </motion.div>
  );
 

  return <>{linkElement}</>;
}
