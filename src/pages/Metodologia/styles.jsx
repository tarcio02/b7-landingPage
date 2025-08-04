import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const StylesMetodologia = styled.div`
  text-align: center;
  padding: 64px ${theme.espaces.mobileUm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.bgUm};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 24px;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};

    .container {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      gap: 0;
    }
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};

    .container {
      justify-content: center;
      gap: 32px;
    }
  }
`;

export const Titulo = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 32px;
  margin: 16px 0;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #d1d5dc;
  margin-bottom: 32px;
`;

export const CardMetodo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  text-align: center;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  .icone {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to right,
      rgba(173, 70, 255, 0.2),
      rgba(246, 51, 154, 0.2)
    );

    img {
      width: 32px;
    }
  }

  .titulo {
    font-size: 18px;
    line-height: 20px;
    /* width: 280px; */
  }

  .descricao {
    font-size: 14px;
    line-height: 20px;
    width: 280px;
    color: #dab2ff;
  }

  @media (min-width: 601px) {
    padding: 8px;
    height: 320px;

    .titulo,
    .descricao {
      width: auto;
    }
  }

  @media (min-width: 769px) {
    height: 280px;
  }
`;
