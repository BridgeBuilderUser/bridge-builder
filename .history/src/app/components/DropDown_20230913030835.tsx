"use client";
  import React from "react";
  import { useRouter } from "next/navigation";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Dropdown({ children, dropdownContent }: { children: React.ReactNode, dropdownContent:any}) {
  const router = useRouter();
  return (
  
    
      
        <DD>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              {children}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="bg-white shadow-lg rounded-xl p-3">
            {dropdownContent.map((item:any) => (
              <DropdownItem
                onClick={() => router.push(item.href)}
               key={item.name} 
                className="text-black font-md border-none outline-none">
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DD>
  
    
  );
}
