import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesContato = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${theme.colors.primary};
  border-top: 1px solid ${theme.colors.primary};
  padding: 48px;
  overflow: hidden;
  position: relative;

  .detalhe {
    position: absolute;
    background-color: ${theme.colors.primary};
    width: 280px;
    height: 100px;
    left: -19px;
    top: -88px;
    transform: rotate(-10deg);
  }

  .explicacao {
    margin-right: 0px;

    .texto-pai {
      width: 448px;
      margin-bottom: 24px;
      h3 {
        color: ${theme.colors.primary};
        font-size: 32px;
        font-weight: bold;
      }

      .paragrafo {
        font-size: 18px;
        font-weight: 100;

        .span {
          display: flex;
          flex-direction: column;
          position: relative;
          span {
            font-weight: bold;
            font-size: 22px;
            text-decoration: underline;
            text-decoration-thickness: 2px;
          }
          .sublinhado {
            position: absolute;
            width: 140px;
            top: 28px;
            left: 24px;
            border-bottom: 3px solid ${theme.colors.texto};
            transform: rotate(-5deg);
          }
        }
      }
    }

    .cards {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .explicacao {
      .cards {
        gap: 8px;
      }
    }
  }
`;
