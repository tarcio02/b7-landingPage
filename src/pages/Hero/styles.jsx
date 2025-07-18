import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesHero = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 80px;
  position: relative;
  border-bottom: 1px solid ${theme.colors.primary};
  overflow: hidden;
  padding-bottom: 0px;

  .luz {
    position: absolute;
    z-index: -1;
    left: -520px;
    top: -320px;
    opacity: 0.3;
    pointer-events: none;
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
  position: relative;
  overflow: hidden;
  width: 272px;
  padding: 16px;
  font-weight: bold;
  font-size: 20px;
  background: #1a1a1a; /* substitua por: ${theme.colors.buttonColor} */
  border: none;
  color: #fff; /* substitua por: ${theme.colors.texto} */
  border-radius: 24px;
  cursor: pointer;
  z-index: 0;
}

/* Efeito de preenchimento da esquerda */
button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #ffd700; /* cor do efeito de hover, substitua se quiser */
  z-index: -1;
  border-radius: 24px;
  transition: width 0.4s ease;
}

/* Quando passar o mouse, o preenchimento vai até a direita */
button:hover::before {
  width: 100%;
}

/* Opcional: muda a cor do texto durante o hover */
button:hover {
  color: #1a1a1a; /* mesmo tom do background original */
}

      /* button {
        width: 272px;
        padding: 16px;
        font-weight: bold;
        font-size: 20px;
        background: ${theme.colors.buttonColor};
        border: none;
        color: ${theme.colors.texto};
        border-radius: 24px;
        cursor: pointer;

        } */
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

  @media (max-width: 768px) {
    padding: 32px;
    .texto {
      .top {
        h2 {
          font-size: 32px;
          line-height: 34px;
          letter-spacing: 1px;
        }
        p {
          font-size: 14px;
        }

        button {
          width: 180px;
          font-size: 16px;
          padding: 8px;
        }
      }

      .botton {
        p {
          margin-bottom: 8px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: start;

    .luz {
      /* display: none; */
    }

    .texto {
      align-items: center;
      gap: 32px;
      .top {
        p {
          font-size: 15px;
        }
        button {
          width: 80%;
          height: 48px;
          font-size: 20px;
          margin: 0 auto;
        }
      }

      .botton {
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        display: none;

        p {
          margin-bottom: 8px;
        }

        .sociais {
          gap: 16px;
        }
      }
    }

    .lampada {
      margin: 32px 0px;
      display: flex;
      justify-content: center;
      img {
        width: 80%;
      }
    }
  }
`;
