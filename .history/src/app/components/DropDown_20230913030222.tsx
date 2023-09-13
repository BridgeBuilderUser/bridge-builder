"use client";
  import React from "react";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Dropdown({ children, dropdownContent }: { children: React.ReactNode, dropdownContent: React.ReactNode }) {
  return (
  
    
      
        <DD>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              {children}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {dropdownContent}
          </DropdownMenu>
        </DD>
  
    
  );
}
