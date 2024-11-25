"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
    { name: "Contact", target: "/contact"},
    { name: "Resume", target: "/resume"},
  ];
 
  // status of mobile menu
  const [open, setOpen] = useState<boolean>(false);
  
  const path: string = usePathname();
  return (
    <nav className="w-full bg-grey-light gap-x-4 gap-y-2 flex flex-col md:flex-row">
      <span className="p-2 flex justify-between">
        <a className="text-xl no-underline md:self-center" href="/">John Ling</a>
        <button className="md:hidden bg-orange hover:bg-blue active:bg-red" onClick={() => setOpen(!open)}>Dropdown</button>
      </span>
      {/* desktop menu */}
      <div className="hidden md:flex">
        <NavbarMenu links={links} activeLink={path}/>
      </div>
      

      {/* mobile menu */}
      {open && <NavbarMenu links={links} activeLink={path}/>}
    </nav>
  )
}

const NavbarMenu: React.FC<{links: NavLink[], activeLink: string}> = ({links, activeLink}) => {
  return (
    <ul className="flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-2 absolute bg-grey-normal top-10 shadow-md">
    {links.map((link: NavLink) => {
      let className: string = "w-max no-underline p-2 inline-block w-screen md:w-auto";
      let ariaCurrent: any = undefined;

      // apply special styles for active page
      if (link.target === activeLink) {
        className += " border-orange md:border-b-2 border-l-2 md:border-l-0";
        ariaCurrent = "page";
      }

      return <li key={link.name}>
        <Link className={className} aria-current={ariaCurrent} href={link.target}>{link.name}</Link>
      </li>
    })}
    </ul>
  )
}

export default Navbar;