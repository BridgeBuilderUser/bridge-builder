"use client"
import { usePathname } from 'next/navigation'
const useCurrentUrl = (link:string) => {

    const pathname = usePathname()

    return pathname === link
}