import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "John Ling",
  description: "John Ling website",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${meslo.variable} font-meslo`}>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>      
    </html>
  );
}
