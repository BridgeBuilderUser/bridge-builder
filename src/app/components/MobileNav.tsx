
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { NavLink } from "./NavLink";
import { useUi } from "@/store/Ui";
export default function MobileNav({
    links,
}:any) {
    const { mobileNavOpen, toggleMobileNav } = useUi();
  return (
    <>
      <RxHamburgerMenu
        onClick={() => toggleMobileNav()}
        className={`${mobileNavOpen ? "hidden" : "visible"} absolute top-5 right-5 h-10 w-10 text-black z-100 cursor-pointer`}
      />
      <AiOutlineCloseCircle
        onClick={() => toggleMobileNav()}
        className={`${
            mobileNavOpen ? "visible" : "hidden"
        } absolute top-5 right-5 h-10 w-10 text-black cursor-pointer z-[99999]`}
      />
      <ul className={`bg-white mobile fixed h-screen w-screen top-0 left-0 flex flex-col items-center justify-center gap-5 ${mobileNavOpen ? "open" : "closed"}`}>
        {links.map((link:any) => (
          <li key={link.name}>
            <NavLink link={link} onClose={toggleMobileNav} />
          </li>
        ))}
      </ul>
    </>
  );
}
