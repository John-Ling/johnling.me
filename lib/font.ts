import localFont from "next/font/local";

export const meslo = localFont({ 
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