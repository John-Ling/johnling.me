import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

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
      <body className={meslo.className}>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
