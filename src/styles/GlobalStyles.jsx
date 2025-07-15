import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  html {
    scroll-padding-top: 200px; 
    scroll-behavior: smooth;
  }


    body{
      color: ${theme.colors.texto};
      font-family: ${theme.fonts.main};
      background-color: ${theme.colors.secondary};
      width: 100%;
    }
`;
