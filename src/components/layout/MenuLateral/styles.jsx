// src/components/MenuLateral/styles.jsx (CORRIGIDO)

import styled from "styled-components";
// 1. Importe o seu tema diretamente

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $aberto }) =>
    $aberto ? "translateX(0)" : "translateX(100%)"};
  z-index: 1001;
`;
