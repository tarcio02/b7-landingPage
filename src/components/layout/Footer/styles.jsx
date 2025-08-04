import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesFooter = styled.div`
  padding: 64px ${theme.espaces.mobileUm};
  background-color: rgba(0, 0, 0, 0.2);
  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileUm};
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      width: 240px;
    }
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};
  }
`;

export const Logo = styled.div`
  img {
    width: 140px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
  margin-bottom: 24px;
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  text-align: start;

  h3 {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  .info {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 12px;
    color: #99a1af;
    text-decoration: none;
    cursor: pointer;

    img {
      width: 16px;
      margin-right: 8px;
    }

    a {
      color: #99a1af;
      text-decoration: none;
    }

    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Sociais = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  img {
    width: 32px;
    height: 32px;

    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Copywrite = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #99a1af;
  padding-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
