"use client"
import { usePathname } from 'next/navigation'
export const useCurrentUrl = (link:string) => {

    const pathname = usePathname()

    return pathname === link
}