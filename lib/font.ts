import localFont from "next/font/local";

export const caskaydia = localFont({
  src: [
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-BoldItalic.woff2",
      weight: "700",
      style: "italic"
    }
  ],
  variable: "--font-caskaydia",
  fallback: ["monospace", "arial"]
});
