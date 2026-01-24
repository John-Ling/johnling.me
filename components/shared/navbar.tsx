"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { AnimatePresence, motion, stagger } from "framer-motion";

interface NavLink {
  name: string;
  target: string;
}

export default function Navbar() {
  const links: NavLink[] = [
    { name: "HOME", target: "/" },
    { name: "PROJECTS", target: "/projects" },
    { name: "BLOG", target: "/blog" },
    {
      name: "RESUME",
      target: "https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing"
    }
  ];

  // status of mobile menu
  const [open, setOpen] = useState<boolean>(false);

  const path: string = "/" + usePathname().split("/")[1];
  return (
    <motion.nav
      className={`max-w-[1920px] mx-auto justify-end md:justify-center items-center transition-all duration-10  z-50 pt-4 font-mono
        ${open ? "bg-grey-normal" : "bg-opacity-0 "}  flex flex-row`}
    >
      {/* mobile hamburger menu */}
      <motion.button
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ delay: 0.3 }}
        className='md:hidden p-2 z-50'
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className='active:text-muted-white' />
      </motion.button>

      {/* desktop menu */}
      <div className={`hidden invisible md:flex md:visible p-4 z-40`}>
        <NavbarMenu links={links} activeLink={path} on_click={() => setOpen(false)} />
      </div>

      {/* mobile menu */}
      <div
        className={`absolute visible block md:invisible md:hidden top-12 w-full bg-grey-normal transition-all 
          ease-in-out duration-300 z-50`}
      >
        <div
          className={`transition-all ease-in-out z-50  ${open ? "duration-300 opacity-100" : " duration-300 opacity-0 invisible"}`}
        >
          <AnimatePresence>
            {open && <MobileMenu links={links} activeLink={path} on_click={() => setOpen(false)} />}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}

const desktopContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1)
    }
  }
};

const mobileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1)
    }
  },
  exit: {
    opacity: 0
  }
};

const item = {
  hidden: { opacity: 0, transform: "translateY(8px)" },
  show: { opacity: 1, transform: "translateY(0px)" }
};

interface NavMenuProps {
  links: NavLink[];
  activeLink: string;
  on_click: () => void;
}

function NavbarMenu({ links, activeLink, on_click }: NavMenuProps) {
  return (
    <motion.ul
      variants={desktopContainer}
      initial='hidden'
      animate='show'
      className='flex flex-col md:flex-row gap-x-2 gap-y-2 md:gap-x-6 align-middle md:mr-10'
    >
      {links.map((link) => {
        return (
          <motion.li key={link.name} className='p-2' variants={item}>
            <Link
              onClick={on_click}
              className={`no-underline navlink  hover:text-orange w-screen md:w-auto ${link.target === activeLink ? "font-bold text-orange" : ""}`}
              aria-current={link.target === activeLink ? "page" : undefined}
              href={link.target}
            >
              {link.name}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

function MobileMenu({ links, activeLink, on_click }: NavMenuProps) {
  return (
    <div className='fixed top-0 w-full min-h-screen z-30'>
      <motion.div
        className='flex'
        variants={mobileContainer}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <div className='z-40 w-full pt-4'>
          <div className='flex w-full justify-end'>
            <button onClick={on_click} className='p-2'>
              <CloseIcon className='active:text-muted-white' />
            </button>
          </div>
          <ul className='p-5'>
            {links.map((link) => {
              return (
                <motion.li key={link.name} className='mb-3 mt-3' variants={item}>
                  <Link
                    href={link.target}
                    onClick={on_click}
                    className={`text-7xl no-underline font-bold  ${link.target === activeLink ? " text-orange" : ""}`}
                    aria-current={link.target === activeLink ? "page" : undefined}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className='absolute w-full h-full bg-grey-normal z-30'></div>
      </motion.div>
    </div>
  );
}
