import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "John Ling",
  description: "John Ling website",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>      
        <Footer/>
      </body>
    </html>
  );
}
