"use client";
  import React from "react";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Dropdown({ children, dropdownContent }: { children: React.ReactNode, dropdownContent:any}) {
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
              <DropdownItem key={item.name}  className="text-black font-bold border-none outline-none">
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DD>
  
    
  );
}
