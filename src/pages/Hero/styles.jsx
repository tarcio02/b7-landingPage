import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesHero = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 40px;
  position: relative;
  border-bottom: 1px solid ${theme.colors.primary};
  overflow: hidden;

  .luz {
    position: absolute;
    z-index: 0;
    left: -520px;
    top: -320px;
    opacity: 0.3;
  }

  .texto {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 72px;
    max-width: 640px;
    z-index: 1;

    .top {
      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {
        font-size: 52px;
        line-height: 56px;
        letter-spacing: 3px;
        font-weight: 200;
        .color {
          color: ${theme.colors.primary};
        }
        .color,
        .bold {
          font-weight: bold;
        }
      }

      p {
        max-width: 480px;
        line-height: 150%;
        font-size: 16px;
      }

      button {
        width: 272px;
        padding: 16px;
        font-weight: bold;
        font-size: 20px;
        background: ${theme.colors.buttonColor};
        border: 1px solid ${theme.colors.borders};
        color: ${theme.colors.texto};
        border-radius: 8px;
        letter-spacing: 1px;
      }
    }

    .botton {
      p {
        font-size: 16px;
        margin-bottom: 16px;
        span {
          font-weight: bold;
        }
      }
      .sociais {
        display: flex;
        gap: 32px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid rgba(168, 38, 255, 0.2);
          width: 48px;
          height: 48px;
          img {
            width: 24px;
          }
        }
      }
    }
  }

  .lampada {
    img {
      width: 536px;
    }
  }

  .detalhe {
    position: absolute;
    background-color: ${theme.colors.primary};
    width: 280px;
    height: 100px;
    right: -19px;
    bottom: -88px;
    transform: rotate(-10deg);
  }
`;
