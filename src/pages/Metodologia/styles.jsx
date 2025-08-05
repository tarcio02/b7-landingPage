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
    width: 100%;
    gap: 24px;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};

    .container {
      flex-direction: row;
      justify-content: center;
      gap: 32px;
      width: 100%;
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
  perspective: 1000px;
  width: 100%;
  height: 320px;
  position: relative;

  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
    transform: ${({ $virado }) => ($virado ? "rotateY(180deg)" : "none")};
  }

  .card-front,
  .card-back {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 32px 16px;
    text-align: center;
    /* gap: 16px; */
  }

  .card-front {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .card-back {
    transform: rotateY(180deg);
    background: linear-gradient(
      to right,
      rgba(152, 16, 250, 1) 0%,
      rgba(230, 0, 118, 1) 100%
    );
  }

  .titulo {
    font-size: 18px;
    line-height: 20px;
  }

  .descricao {
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    color: #dab2ff;
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

  .lista {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 8px;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style: none;
      font-weight: bold;
    }
  }

  .imagem-li {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;

    img {
      width: 24px;
      position: absolute;
      top: -4px;
      right: -6px;
    }
  }

  .botao {
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  .botao-front {
    background: linear-gradient(
      to right,
      rgba(173, 70, 255, 0.2),
      rgba(246, 51, 154, 0.2)
    );
  }

  .botao-back {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 601px) {
    height: 360px;
    width: 360px;
  }

  @media (min-width: 769px) {
    height: 340px;
    width: 280px;
  }
`;
