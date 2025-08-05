import styled, { keyframes } from "styled-components";

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

export const StylesModalExitIntent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background: linear-gradient(
    to right,
    rgba(152, 16, 250, 1) 0%,
    rgba(230, 0, 118, 1) 100%
  );
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  width: 90%;
  max-width: 400px;
  animation: ${fadeIn} 0.2s ease-out;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

export const Titulo = styled.h3`
  font-size: 24px;
`;

export const Descricao = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const image = styled.div`
  img {
    width: 64px;
  }
`;

export const Botao = styled.button`
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 8px;
  cursor: pointer;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
