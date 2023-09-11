import React from "react";
import {Button as BB} from "@nextui-org/react";

export default function Button({ children }) {
  return (
    <BB color="primary">
        {children}
    </BB>
  );
}
