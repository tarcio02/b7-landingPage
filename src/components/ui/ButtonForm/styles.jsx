import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesButtonForm = styled.button`
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  max-width: 240px;
  background: ${theme.colors.buttonColor};
  color: ${theme.colors.texto};
  border: 1px solid ${theme.colors.primary};
  border-radius: 16px;
  cursor: pointer;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: ${theme.colors.texto};
    z-index: -1;
    border-radius: 16px;
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${theme.colors.primary};
  }

  &:active {
    border-radius: 16px;
  }
`;

export const BotaoDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const BotaoMobile = styled.div`
  display: block;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: none;
  }
`;
