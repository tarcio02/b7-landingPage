import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px;

  .logo {
    img {
      width: 168px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    font-size: 16px;
    font-weight: 200;
    li {
      cursor: pointer;
    }
  }

  button {
    background: ${theme.colors.buttonColor};
    width: 272px;
    border-radius: 8px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.texto};
    padding: 16px;
    border: 1px solid ${theme.colors.borders};
    letter-spacing: 1px;
    cursor: pointer;
  }
`;
