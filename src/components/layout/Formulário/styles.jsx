import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesFormulario = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  gap: 16px;
  width: 456px;
  border: 1px solid ${theme.colors.borders};
  border-radius: 24px;
  padding: 24px 40px;
  background-color: rgba(168, 38, 255, 0.1);

  h2 {
    font-size: 28px;
    font-weight: bold;
    line-height: 27px;
    margin-bottom: 16px;
    span {
      color: ${theme.colors.primary};
    }
  }

  p {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 120px;
    border-radius: 8px;
    padding: 4px;
    background: ${theme.colors.buttonColor};
    span {
      font-weight: bold;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    .input-form {
      width: 100%;
      padding: 4px;
      height: 56px;
      outline: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
    }

    .check {
      text-align: start;
      h3 {
        font-size: 16px;
        margin-bottom: 4px;
      }

      .inputs {
        display: flex;
        gap: 8px;

        .check-box {
          display: flex;
          gap: 4px;
          align-items: center;
        }
      }
    }

    button {
      border: 1px solid ${theme.colors.borders};
      border-radius: 8px;
      padding: 12px;
      width: 272px;
      color: ${theme.colors.texto};
      background: ${theme.colors.buttonColor};
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;
