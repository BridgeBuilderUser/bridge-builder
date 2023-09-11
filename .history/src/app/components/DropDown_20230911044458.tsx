import React from "react";
import {Dropdown as DD, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Dropdown({ children }) {
  return (
    <DD>
      <DD>
        <Button 
          variant="bordered" 
        >
          {children}
        </Button>
      </DD>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </DD>
  );
}
