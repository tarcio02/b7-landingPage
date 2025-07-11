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
      background-color: ${theme.colors.secondary};
      padding: 32px 76px;
    }
`;
