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
  /* 2. Use o 'theme' importado diretamente */
  background-color: ${theme.colors.background || "#1e1e1e"};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  transition: right 0.3s ease-in-out;
  z-index: 998;
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin-top: 48px;

  li a {
    /* 4. Use o 'theme' importado diretamente */
    color: ${theme.colors.texto || "#fff"};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Botao = styled.a`
  margin-top: 32px;
  /* 5. Use o 'theme' importado diretamente */
  background: ${theme.colors.buttonColor || "#ffd700"};
  color: ${theme.colors.texto || "#fff"};
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;
