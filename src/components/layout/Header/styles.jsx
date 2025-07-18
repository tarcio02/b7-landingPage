import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 80px;
  border-bottom: 1px solid ${theme.colors.primary};

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 120px;
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
        font-weight: bold;
      }
    }
  }

  .button {
    /* Estilos base que você já tinha */
    background: ${theme.colors.buttonColor};
    width: 180px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.texto};
    padding: 8px;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: rgba(168, 38, 255, 0.5);
      transition: width 0.4s ease-in-out;
      z-index: -1;

      &:hover::before {
        width: 100%;
      }

      &:hover {
        color: #dfe4ea;
      }

      /* Mantém a consistência para os estados de active e focus */
      &:active,
      &:focus {
        background: rgba(168, 38, 255, 0.5);
        color: #dfe4ea;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 24px 32px;
      align-items: center;
      justify-content: space-between;

      .logo {
        img {
          width: 120px;
        }
      }

      .nav {
        display: none;
      }

      .button {
        width: 160px;
        font-size: 14px;
        padding: 4px;
        display: flex;
        display: none;
        align-items: center;

        &:hover {
          color: black;
        }
      }
    }
  }
`;
