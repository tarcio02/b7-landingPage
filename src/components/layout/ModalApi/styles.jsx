import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

const fadeIn = keyframes`
from{
  opacity: 0;
  transform: scale(0.95);
}
to{
  opacity: 1;
  transform: scale(1);
}
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: ${theme.colors.buttonColor};
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  animation: ${fadeIn} 0.2s ease-out;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${({ error }) => (error ? "#d9534f" : "#fff")};
`;

export const Button = styled.button`
  background-color: ${({ error }) => (error ? "#d9534f" : "#28a745")};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`;
