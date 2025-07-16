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
  background-color: ${theme.colors.primary};
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

  &:hover {
    opacity: 0.9;
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
