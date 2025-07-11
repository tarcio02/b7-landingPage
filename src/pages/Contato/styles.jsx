import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesContato = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid ${theme.colors.primary};
  padding: 32px;
  position: relative;

  .detalhe {
    position: absolute;
    background-color: ${theme.colors.primary};
    width: 180px;
    height: 100px;
    left: 0px;
    top: -90px;
  }

  .explicacao {
    margin-right: 0px;

    .texto-pai {
      width: 448px;
      margin-bottom: 80px;
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
`;
