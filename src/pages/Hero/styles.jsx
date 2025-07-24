import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesHero = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 80px;
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
    gap: 56px;
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
    }
  }

  .lampada {
    img {
      width: 480px;
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
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: start;

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
