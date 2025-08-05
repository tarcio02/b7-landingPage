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

export const StylesModalForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
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
  padding: 48px 0px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  width: 95%;
  max-width: 500px;
  animation: ${fadeIn} 0.2s ease-out;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
`;

export const ModalContent = styled.div`
  max-height: 70vh; /* controla altura scrollável */
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
`;

export const Titulo = styled.h3`
  font-size: 24px;
`;

export const Descricao = styled.p`
  font-size: 16px;
  line-height: 20px;
`;
