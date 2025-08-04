import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
      color: ${theme.colors.texto};
      font-family: ${theme.fonts.main};
      background: ${theme.colors.bgMain};
      width: 100%;
      overflow-x: hidden;
      padding-top: 72px; /* altura do header */
    }
`;
