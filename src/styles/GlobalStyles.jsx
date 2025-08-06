import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }


    body{
      color: ${theme.colors.texto};
      font-family: ${theme.fonts.main};
      background: ${theme.colors.bgMain};
      padding-top: 72px; /* altura do header */
      max-width: 100%;
    }
`;
