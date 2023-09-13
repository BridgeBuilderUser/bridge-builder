import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <RxHamburgerMenu
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? "hidden" : "visible"} ${
          !isMobile && "hidden"
        } absolute top-5 right-5 h-10 w-10 text-black cursor-pointer`}
      />
      <AiOutlineCloseCircle
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "visible" : "hidden"
        } absolute top-5 right-5 h-10 w-10 text-black cursor-pointer`}
      />
      <ul className="flex h-full w-full flex-col items-center justify-center gap-5 lg:flex-row">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink link={link} onClose={setIsOpen} />
          </li>
        ))}
      </ul>
    </>
  );
}
