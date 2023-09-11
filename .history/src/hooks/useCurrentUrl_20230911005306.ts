"use client"
import { usePathname } from 'next/navigation'
const useCurrentUrl = (link) => {

    const {
        pathname
    } = usePathname()

    return pathname === link
}