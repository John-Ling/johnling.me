import ThemedLayout from "./themed_layout";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemedLayout>
        {children}
      </ThemedLayout>
    </html>
  );
}
