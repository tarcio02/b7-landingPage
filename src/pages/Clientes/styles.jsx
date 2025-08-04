import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const scroll = keyframes`
  0%{transform: translateX(0);}
  100% {transform: translateX(-50%);}
`;

export const StylesClientes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 64px ${theme.espaces.mobileUm};
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;

  .texto {
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    animation: ${scroll} 30s linear infinite;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};
  }
`;

export const Titulo = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 32px;
`;

export const paragrafo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #99a1af;
`;

export const CardCliente = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 12px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  .cliente {
    width: 120px;
  }
`;
