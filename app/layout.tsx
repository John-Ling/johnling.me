import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata, Viewport } from "next";
import { meslo } from "@/lib/font";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "John Ling",
  description: "John Ling website",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};


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
