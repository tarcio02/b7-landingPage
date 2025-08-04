import styled from "styled-components";

export const StylesFormulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 64px 32px;
  background-color: rgba(255, 255, 255, 0.1);

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 20px;
    width: 100%;

    .input-form {
      z-index: 1;
      width: 100%;
      padding: 13px;
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 9px;
      font-size: 16px;
      margin-top: 8px;
      color: #99a1af;
    }

    .label {
      font-size: 14px;
      line-height: 14px;
      font-weight: 100;
    }

    .autor {
      h3 {
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 4px;
      }
      select {
        width: 50%;
      }
    }

    button {
      background: linear-gradient(to right, #9810fa 0%, #e60076 100%);
      color: white;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 8px;
      font-size: 14px;
      border-radius: 20px;
      width: 100%;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.98);
      }

      img {
        width: 24px;
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
  }

  @media (min-width: 601px) {
    width: 576px;
  }
`;
