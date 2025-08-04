import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  > div:first-child {
    margin-bottom: 12px;
  }
`;

export const StylesButtonChat = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.buttonColorLinear};
  padding: 10px;
  gap: 8px;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;

  h3 {
    font-size: 12px;
    color: white;
    margin-left: 38px;
    margin-right: 16px;
  }

  img {
    width: 120px;
    position: absolute;
    top: -59px;
    left: -45px;
  }

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ChatAnimado = styled.div`
  animation: aparecer 0.8s ease forwards;
  transform: translateY(20px);
  opacity: 0;

  @keyframes aparecer {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
