import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesFormulario = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  width: 450px;
  border: 1px solid ${theme.colors.borders};
  border-radius: 24px;
  padding: 24px 32px;
  background-color: rgba(168, 38, 255, 0.1);
  z-index: 999;

  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 27px;
    span {
      color: ${theme.colors.primary};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 8px;
    width: 100%;

    .input-form {
      z-index: 1;
      width: 100%;
      padding: 12px;
      height: 48px;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
    }

    .check {
      h3 {
        font-size: 16px;
        margin-bottom: 4px;
      }

      .inputs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;

        .check-box {
          display: flex;
          gap: 4px;
          align-items: center;
        }
      }
    }

    button {
      border: none;
      border-radius: 8px;
      padding: 12px;
      width: 272px;
      color: ${theme.colors.texto};
      background: ${theme.colors.buttonColor};
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 1px;
      margin: 0 auto;
      cursor: pointer;

      &:hover,
      :active,
      :focus {
        background: rgba(168, 38, 255, 0.5);
        color: #dfe4ea;
      }
    }
  }

  .error {
    display: flex;
    align-items: center;
    color: #ff4d4f;
    font-size: 0.9rem;
    img {
      width: 14px;
      margin-right: 4px;
    }
  }

  .input-form.error {
    border: 3px solid #ff4d4f;
  }

  .luz {
    position: absolute;
    z-index: -1; /* Faz a luz ir para trás de tudo */
    right: 0px;
    top: -120px;
    opacity: 0.3;
    width: 900px;
    pointer-events: none; /* Impede que a imagem bloqueie cliques */
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px 16px;
    margin-top: 40px;
    box-sizing: border-box;

    form {
      .inputs {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }

    .luz {
      width: 100%;
      top: -160px;
      right: 120px;
      z-index: 0;
      opacity: 0.2;
    }
  }
`;
