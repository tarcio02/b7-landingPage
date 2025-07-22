import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesCardContato = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 20px;
  width: 556px;
  .imagem {
    border-right: 1px solid ${theme.colors.primary};
    img {
      width: 100px;
      margin-right: 4px;
    }
  }

  .texto {
    margin-left: 20px;
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 24px 16px;
    margin-top: 40px;
    box-sizing: border-box;
  }
`;
