"use client";
import { motion } from "framer-motion";
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
   <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
   className="nav-link"
   >
     <Link href={href}>
      <a className="text-blue-500 hover:text-blue-600">{children}</a>
    </Link>
    </motion.div>
  );
}