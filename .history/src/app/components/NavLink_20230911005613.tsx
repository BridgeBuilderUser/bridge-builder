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
          "block px-3 py-2",
            isCurrent
            ? "font-medium text-black"
            : "text-gray-500 hover:bg-gray-700",
        )}
        aria-current={link.current ? "page" : undefined}
      >
        {link.name}
      </Link>
    </motion.div>
  );
 

  return <>{linkElement}</>;
}
