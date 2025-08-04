import styled from "styled-components";
import { theme } from "../theme";

export const StylesButtonGradiente = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  font-size: 16px;
  background: ${theme.colors.buttonColorLinear};
  color: ${theme.colors.texto};
  border-radius: 20px;
  border: none;
  cursor: pointer;
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

  @media (min-width: 601px) {
  }

  @media (min-width: 769px) {
  }
`;
