import localFont from "next/font/local";

export const caskaydia = localFont({
  src: [
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/CaskaydiaMonoNerdFontMono-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    }
  ]
});
