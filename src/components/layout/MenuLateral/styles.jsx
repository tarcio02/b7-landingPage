// src/components/MenuLateral/styles.jsx (CORRIGIDO)

import styled from "styled-components";
// 1. Importe o seu tema diretamente
import { theme } from "../../../styles/theme";

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $aberto }) => ($aberto ? "0" : "-100%")};
  width: 80%;
  height: 100vh;
  background-color: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  transition: right 0.3s ease-in-out;
  z-index: 999;
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  list-style: none;
  margin-top: 48px;

  li a {
    color: ${theme.colors.texto || "#fff"};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
