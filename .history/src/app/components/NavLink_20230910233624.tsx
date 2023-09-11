"use client";
import { motion } from "framer-motion";
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
   <div.motion className="nav-link">
     <Link href={href}>
      <a className="text-blue-500 hover:text-blue-600">{children}</a>
    </Link>
    </div.motion>
  );
}