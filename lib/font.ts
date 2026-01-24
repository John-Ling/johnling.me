import localFont from "next/font/local";

export const meslo = localFont({
  src: [
    {
      path: "../public/fonts/meslolgs_nf_regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/meslolgs_nf_bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/meslolgs_nf_italic.woff2",
      weight: "400",
      style: "italic"
    }
  ],
  variable: "--font-meslo",
  fallback: ["monospace", "arial"]
});

export const serif = localFont({
  src: [
    {
      path: "../public/fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-serif"
});

export const fira = localFont({
  src: [
    {
      path: "../public/fonts/FiraSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/FiraSans-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/FiraSans-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    },
    {
      path: "../public/fonts/FiraSans-Italic.ttf",
      weight: "400",
      style: "italic"
    }
  ],
  variable: "--font-fira"
});
