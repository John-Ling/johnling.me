import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import type { Metadata, Viewport } from "next";
import { caskaydia } from "@/lib/font";
import "/styles/globals.css";

export const metadata: Metadata = {
  title: "John Ling",
  description: "John Ling website"
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${caskaydia.className} antialiased`}>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/devicon.min.css'
        />
        <link
          rel='preload'
          href='/fonts/CaskaydiaMonoNerdFontMono-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/CaskaydiaMonoNerdFontMono-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
