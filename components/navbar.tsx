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
      <nav className={`justify-between items-center transition-all duration-10 ${open ? "bg-grey-normal" : "bg-opacity-0 " } gap-x-4 gap-y-2 flex flex-row`}>  
      <Link href="/" className="text-2xl md:self-center md:pl-3 p-4 no-underline font-bold ">John Ling</Link>
      <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
        <MenuIcon className="active:text-muted-white"/>
      </button>

      {/* desktop menu */} 
      <div className="hidden invisible md:flex md:visible p-4">
        <NavbarMenu links={links} activeLink={path} handle_click={() => setOpen(false)}/>
      </div>
  
      {/* mobile menu */}
      <div 
        className={
          `absolute visible block md:invisible md:hidden top-12 w-full bg-grey-normal transition-all z-10 
          ease-in-out ${open ? 'duration-500 max-h-96 p-2 shadow-md' : ' duration-500 max-h-0 shadow-none'}`}
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
    <ul className="flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-6 align-middle">
    {links.map((link: NavLink) => {
      let className: string = "no-underline w-screen md:w-auto p-1";
      let ariaCurrent: "page" | undefined = undefined;

      // apply special styles for active page
      if (link.target === activeLink) {
        className += " font-bold text-orange";
        ariaCurrent = "page";
      }

      return <li key={link.name} className="p-2">
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