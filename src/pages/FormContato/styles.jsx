import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesFormContato = styled.div`
  text-align: center;
  padding: 64px ${theme.espaces.mobileUm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.bgUm};
  @media (min-width: 601px) {
  }

  @media (min-width: 769px) {
  }
`;

export const Titulo = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #d1d5dc;
  margin-bottom: 32px;
`;
