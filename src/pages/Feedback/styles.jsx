import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesFeedback = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 64px ${theme.espaces.mobileUm};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};

    .container {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};

    .container {
      flex-direction: row;
      justify-content: center;
      gap: 40px;
    }
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

export const CardFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  gap: 24px;
  width: 100%;
  height: 266px;
  padding: 0 24px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  .avaliacao {
    display: flex;
    align-items: center;

    img {
      width: 20px;
    }
  }

  .comentario {
    font-size: 16px;
    line-height: 24px;
    color: #d1d5dc;
  }

  .perfil {
    h3 {
      color: #ffff;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 4px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 601px) {
    width: 244px;
    height: 320px;
    justify-content: space-between;
    gap: 0;
    padding: 32px 24px;
  }

  @media (min-width: 769px) {
    width: 480px;
    height: 260px;
  }
`;
