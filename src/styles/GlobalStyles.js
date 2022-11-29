import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";



const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family:"Sirin Stencil";
    overflow-x: hidden;
}

h1: {
    fontWeight: 700,
    fontSize: 35,

    fontFamily: "'Inter',normal",
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
    fontFamily: "'Inter',normal",
  },
  h3: {
    fontWeight: 700,
    fontSize: 24,

    fontFamily: "'Inter',normal",
  },
  h4: {
    fontWeight: 400,
    fontSize: 20,
    fontFamily: "'Inter',normal",
  },
  h5: {
    fontWeight: 500,
    fontSize: 18,
    fontFamily: "'Inter',normal",
  },
  h6: {
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "'Inter',normal",
  },
a{
    color: inherit;
    text-decoration: none;
}

`
export default GlobalStyles;