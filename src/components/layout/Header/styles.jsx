import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px;

  .logo {
    img {
      width: 168px;
    }
  }

  .nav {
    display: flex;
    gap: 42px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    font-size: 16px;
    font-weight: 200;

    li {
      a {
        z-index: 1;
        cursor: pointer;
        color: white;
        text-decoration: none;
      }
    }
  }

  .button {
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
    text-align: center;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 24px 40px;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    .logo {
      img {
        width: 120px;
      }
    }

    .nav {
      gap: 16px;

      .button {
        width: 160px;
        font-size: 14px;
        padding: 4px;
        display: flex;
        align-items: center;
      }
    }
  }

  ul {
    display: none;
  }
`;
