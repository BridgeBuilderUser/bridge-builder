
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { NavLink } from "./NavLink";
import { useUi } from "@/store/Ui";
export default function MobileNav({
    links,
}:any) {
    const { mobileNavOpen, setMobileNavOpen } = useUi();
  return (
    <>
      <RxHamburgerMenu
        onClick={() => setMobileNavOpen(true)}
        className={`${isOpen ? "hidden" : "visible"} absolute top-5 right-5 h-10 w-10 text-black cursor-pointer`}
      />
      <AiOutlineCloseCircle
        onClick={() => setMobileNavOpen(false)}
        className={`${
            mobileNavOpen ? "visible" : "hidden"
        } absolute top-5 right-5 h-10 w-10 text-black cursor-pointer`}
      />
      <ul className="mobile flex h-full w-full flex-col items-center justify-center gap-5 lg:flex-row">
        {links.map((link:any) => (
          <li key={link.name}>
            <NavLink link={link} onClose={setMobileNavOpen} />
          </li>
        ))}
      </ul>
    </>
  );
}
