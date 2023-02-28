import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";

const montserratfont = Montserrat({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
:root{
  --color-lightblue: #38b6ff;
  --color-royalblue: #5271ff;
  --color-cobaltblue: #004aad;
  --color-creamwhite: white;
  --color-lightgrey: #d3d3d3;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${montserratfont.style.fontFamily};
  
  }
`;
