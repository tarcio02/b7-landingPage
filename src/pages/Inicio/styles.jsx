import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const StylesInicio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 64px ${theme.espaces.mobileUm};
  background: ${theme.colors.bgUm};

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};
    .buttons {
      flex-direction: row;
      width: 400px;
    }
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};
    justify-content: center;
    gap: 120px;
    flex-direction: row;
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  text-align: start;
  width: 100%;

  @media (min-width: 601px) {
    width: 600px;
    gap: 16px;
  }

  @media (min-width: 769px) {
    width: 600px;
  }
`;

export const Titulo = styled.h2`
  width: 352px;
  font-size: 48px;
  font-weight: bold;
  line-height: 60px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  .gradiente {
    background: linear-gradient(to right, #c27aff 0%, #fb64b6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .tempo {
    color: #fdc700;
  }

  @media (min-width: 601px) {
    width: 100%;
  }

  @media (min-width: 769px) {
  }
`;

export const Paragrafo = styled.p`
  width: 352px;
  font-size: 16px;
  line-height: 32px;
  color: #d1d5dc;

  .bold {
    font-weight: bold;
    color: #dab2ff;
    font-size: 18px;
  }

  @media (min-width: 601px) {
    width: 100%;
  }

  @media (min-width: 769px) {
  }
`;

export const Botao = styled.button`
  background: ${({ primary }) =>
    primary
      ? "linear-gradient(to right, #9810FA 0%, #E60076 100%)"
      : "rgba(255, 255, 255, 0.2)"};
  color: ${({ primary }) => (primary ? "white" : "white")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #dab2ff")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
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
    width: 18px;
  }
`;

export const Metricas = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 32px 0;

  .dado {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    width: 72px;

    span {
      font-size: 24px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: #99a1af;
      line-height: 20px;
    }
  }

  @media (min-width: 601px) {
    width: 100%;
    justify-content: space-around;

    .dado {
      margin: 0;
    }
  }

  @media (min-width: 769px) {
    .dado {
      width: fit-content;
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .banner {
    width: 100%;
  }

  .detalhe {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: rgba(246, 51, 154, 0.2);
  }

  .imageDetalhe {
    width: 24px;
  }

  .rigth {
    right: -20px;
    bottom: 50%;
  }

  .left {
    left: -20px;
    top: -10px;
  }

  @media (min-width: 601px) {
    width: 340px;
  }

  @media (min-width: 769px) {
    /* width: 100%; */

    .rigth {
      right: 30px;
      bottom: 50%;
    }

    .left {
      left: 40px;
      top: -10px;
    }

    .banner {
      width: 440px;
    }
  }
`;
