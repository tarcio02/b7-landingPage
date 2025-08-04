import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const StylesTutorial = styled.div`
  text-align: center;
  padding: 64px ${theme.espaces.mobileUm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 48px;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};

    .container {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      row-gap: 48px; /* espaço entre as linhas */
      column-gap: 0;
    }
    .container > * {
      width: 50%; /* 2 por linha */
    }
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};

    .container {
      justify-content: center;
      flex-wrap: nowrap;
      /* gap: 64px; */
    }
  }
`;

export const Titulo = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 32px;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #d1d5dc;
  margin-bottom: 56px;
`;

export const Acao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 140px;

  .numero {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background: linear-gradient(to right, #9810fa, #e60076);
    animation: ${float} 1.5s ease-in-out infinite;
  }

  .nome {
    font-size: 16px;
    line-height: 24px;
  }

  .descricao {
    font-size: 12px;
    font-weight: 20px;
    color: #d1d5dc;
  }

  @media (min-width: 601px) {
  }

  @media (min-width: 768px) {
  }
`;
