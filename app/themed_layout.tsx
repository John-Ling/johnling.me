"use client";
import { useEffect } from "react";
import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const meslo = localFont({ 
  src: [
      { 
        path: "../public/fonts/meslolgs_nf_regular.woff2",
        weight: "400",
        style: "normal",
      },
      {
        path: "../public/fonts/meslolgs_nf_bold.woff2",
        weight: "700",
        style: "normal",
      },
      {
        path: "../public/fonts/meslolgs_nf_italic.woff2",
        weight: "400",
        style: "italic",
      },
      {
        path: "../public/fonts/meslolgs_nf_bold_italic.woff2",
        weight: "700",
        style: "italic",
      },
    ],
    variable: "--meslo",
});

const ThemedLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    
    return;
  }, [])

  return (
    <body className={`${meslo.variable} font-meslo`}>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </body>      
  )
}

export default ThemedLayout;