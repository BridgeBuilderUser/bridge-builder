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

export function NavLink({ navItem }: NavLinkProps) {
  const isCurrent = useCurrentUrl(link.href);

    return (
     
        {navItem.name}
      

  );

}
