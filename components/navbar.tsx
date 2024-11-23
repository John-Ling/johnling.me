"use client";
import { usePathname } from "next/navigation";
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
  
  const path: string = usePathname();

  return (
    <nav className="w-full bg-grey-50 gap-x-9 p-1.5 flex flex-row items-center">
      <a className="text-xl no-underline" href="/">John Ling</a>
      <ul className="flex flex-row gap-x-8">
        {links.map((link: NavLink, i) => {
          let className: string = "no-underline p-1";
          if (link.target === path)
          {
            className += " border-b-2 border-orange";
          }
          return <li key={i} className="text-l">
            <a className={className} href={link.target}>{link.name}</a>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar;