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
      width: 80px;
    }
  }

  .texto {
    margin-left: 16px;
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  }
`;
