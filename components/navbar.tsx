'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import "/styles/globals.css";

interface NavLink {
  name: string;
  target: string;
}

const Navbar = () => {
  const links: NavLink[] = [
    { name: "Home", target: "/" },
    { name: "Projects", target: "/projects" },
    { name: "Blog", target: "/blog" },
    { name: "Contact", target: "/#contact"},
    { name: "Resume", target: "https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing"},
  ];
 
  // status of mobile menu
  const [open, setOpen] = useState<boolean>(false);
  
  const path: string = '/' + usePathname().split("/")[1];
  return (
    <nav className="relative w-full bg-grey-light gap-x-4 gap-y-2 flex flex-col md:flex-row z-10">  
      <span className="flex justify-between p-2 md:p-0">
        <h1 className="text-xl md:self-center md:pl-3">John Ling</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon className="active:text-muted-white"/>
        </button>
      </span>
      {/* desktop menu */} 
      <div className="hidden invisible md:flex md:visible">
        <NavbarMenu links={links} activeLink={path} handle_click={() => setOpen(false)}/>
      </div>

      {/* mobile menu */}
      <div 
        className={
          `shadow-md absolute visible block md:invisible md:hidden top-11 bg-[#262626] transition-all
          ease-in-out ${open ? 'duration-500 max-h-96' : ' duration-300 max-h-0'}`}
      >
        <div className={`transition-all ease-in-out ${open ? 'duration-500 opacity-100' : " duration-300 opacity-0 invisible"}`}>
          <NavbarMenu links={links} activeLink={path} handle_click={() => setOpen(false)}/>
        </div>
      </div>
    </nav>
  )
}

const NavbarMenu: React.FC<{links: NavLink[], activeLink: string, handle_click: () => void}> = ({links, activeLink, handle_click}) => {
  return (
    <ul className="flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-2">
    {links.map((link: NavLink) => {
      let className: string = "no-underline p-2 inline-block w-screen md:w-auto";
      let ariaCurrent: "page" | undefined = undefined;

      // apply special styles for active page
      if (link.target === activeLink) {
        className += " border-orange md:border-b-2 border-l-2 md:border-l-0 font-bold";
        ariaCurrent = "page";
      }

      return <li key={link.name}>
        <Link onClick={handle_click} className={className} 
          aria-current={ariaCurrent} href={link.target}
        >
          {link.name}
        </Link>
      </li>
    })}
    </ul>
  )
}

export default Navbar;