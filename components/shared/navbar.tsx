"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface NavLink {
  name: string;
  target: string;
}

export default function Navbar() {
  const links: NavLink[] = [
    { name: "Home", target: "/" },
    { name: "Projects", target: "/projects" },
    { name: "Blog", target: "/blog" },
    { name: "Contact", target: "/#contact" },
    {
      name: "Resume",
      target: "https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing"
    }
  ];

  // status of mobile menu
  const [open, setOpen] = useState<boolean>(false);

  const path: string = "/" + usePathname().split("/")[1];
  return (
    <nav
      className={`max-w-[1920px] mx-auto justify-between items-center transition-all duration-10  z-30 pt-4
        ${open ? "bg-grey-normal" : "bg-opacity-0 "}  flex flex-row`}
    >
      <Link
        href='/'
        className={`tracking-wider navlink hover:text-white text-2xl self-center  ml-3 md:ml-10 no-underline opacity-0 font-bold animate-fade-down z-20`}
        style={{ animationDelay: "300ms" }}
      >
        <span className='md:whitespace-pre md:block'>JOHN{"  "}</span>
        <span className='text-orange md:whitespace-pre'>{"  "}LING</span>
      </Link>

      {/* mobile hamburger menu */}
      <button
        className='md:hidden p-2 animate-fade-down opacity-0'
        style={{ animationDelay: "300ms" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className='active:text-muted-white' />
      </button>

      {/* desktop menu */}
      <div
        className={`hidden invisible md:flex md:visible p-4 z-30 opacity-0 animate-fade-down`}
        style={{ animationDelay: "500ms" }}
      >
        <NavbarMenu links={links} activeLink={path} on_click={() => setOpen(false)} />
      </div>

      {/* mobile menu */}
      <div
        className={`absolute visible block md:invisible md:hidden top-12 w-full bg-grey-normal transition-all 
          ease-in-out duration-300 z-30`}
      >
        <div
          className={`transition-all ease-in-out z-30  ${open ? "duration-300 opacity-100" : " duration-300 opacity-0 invisible"}`}
        >
          {open ? (
            <MobileMenu links={links} activeLink={path} on_click={() => setOpen(false)} />
          ) : null}
        </div>
      </div>
    </nav>
  );
}

interface NavMenuProps {
  links: NavLink[];
  activeLink: string;
  on_click: () => void;
}

function NavbarMenu({ links, activeLink, on_click }: NavMenuProps) {
  const linkCount = links.length;
  return (
    <ul className='flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-6 align-middle md:mr-10'>
      {links.map((link: NavLink, i: number) => {
        return (
          <li
            key={link.name}
            className='p-2 opacity-0 animate-fade-down'
            style={{ animationDelay: `${(linkCount - i) * 150}ms` }}
          >
            <Link
              onClick={on_click}
              className={`no-underline navlink  hover:text-orange w-screen md:w-auto ${link.target === activeLink ? "font-bold text-orange" : ""}`}
              aria-current={link.target === activeLink ? "page" : undefined}
              href={link.target}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileMenu({ links, activeLink, on_click }: NavMenuProps) {
  return (
    <>
      <div className='fixed top-0 w-full min-h-screen z-30'>
        <div className='flex'>
          <div className='z-40 w-full pt-4'>
            <div className='flex w-full justify-end'>
              <button onClick={on_click} className='p-2'>
                <CloseIcon className='active:text-muted-white' />
              </button>
            </div>
            <ul className='p-5'>
              {links.map((link: NavLink, i: number) => {
                return (
                  <li
                    key={link.name}
                    className='mb-3 mt-3 opacity-0 animate-fade-up'
                    style={{ animationDelay: `${(i + 1) * 100}ms` }}
                  >
                    <Link
                      href={link.target}
                      onClick={on_click}
                      className={`text-7xl no-underline font-bold ${link.target === activeLink ? " text-orange" : ""}`}
                      aria-current={link.target === activeLink ? "page" : undefined}
                    >
                      {link.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='absolute w-full h-full bg-grey-normal z-30'></div>
        </div>
      </div>
    </>
  );
}
