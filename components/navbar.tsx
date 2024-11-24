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
  const [open, setOpen] = useState<boolean>(true);
  
  const path: string = usePathname();
  return (
    <nav className="w-full bg-grey-light gap-x-4 gap-y-2 flex flex-col md:flex-row">
      <a className="text-xl no-underline md:self-center" href="/">John Ling</a>
      <div id="navbar"> 
        <div className="bg-red">
          <button className="md:hidden bg-orange"></button>
        </div>
        {open && 
          <ul className="flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-2">
          {links.map((link: NavLink) => {
            let className: string = "w-max no-underline p-2 inline-block w-screen md:w-auto";
            let ariaCurrent: any = undefined;

            // apply special styles for active page
            if (link.target === path) {
              className += " border-orange md:border-b-2 border-l-2 md:border-l-0 bg-grey-dark md:bg-grey-light";
              ariaCurrent = "page";
            }

            return <li className="active:bg-grey-dark">
              <Link className={className} aria-current={ariaCurrent} href={link.target}>{link.name}</Link>
            </li>
          })}
          </ul>
        }
      </div>
    </nav>
  )
}

export default Navbar;