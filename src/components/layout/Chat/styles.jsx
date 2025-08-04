import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const RoboFlutuante = styled.div`
  position: absolute;
  top: -45px;
  left: -40px;
  width: 100px;
  z-index: 5;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease; /* animação */

  transform: scale(1);
  opacity: 1;

  &.fechando {
    opacity: 0;
    transform: scale(0.95);
  }

  img {
    width: 100%;
  }
`;

export const StylesChat = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: sans-serif;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: 1;
  transform: scale(1);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &.fechando {
    opacity: 0;
    transform: scale(0.95);
  }

  .topo {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 8px 12px;
    background: linear-gradient(
      to right,
      rgba(152, 16, 250, 1) 0%,
      rgba(230, 0, 118, 1) 100%
    );

    .fechar {
      background: none;
      color: white;
      border: none;
      cursor: pointer;
    }
  }

  .mensagens {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .sugestoes {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    /* background: white; */

    button {
      background: linear-gradient(
        to right,
        rgba(152, 16, 250, 1) 0%,
        rgba(230, 0, 118, 1) 100%
      );

      border: none;
      color: white;
      border-radius: 10px;
      padding: 8px;
      font-size: 13px;
      text-align: left;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  .mensagem {
    margin-bottom: 8px;
    padding: 8px 12px;
    border-radius: 12px;
    max-width: 80%;
  }

  .mensagem.usuario {
    background-color: rgba(230, 0, 118, 8);
    align-self: flex-end;
  }

  .mensagem.ia {
    /* background-color: ${theme.colors.primary}; */
    background-color: rgba(152, 16, 250, 1);

    align-self: flex-start;
  }

  .entrada {
    display: flex;
    padding: 8px;
    background: linear-gradient(
      to right,
      rgba(152, 16, 250, 1) 0%,
      rgba(230, 0, 118, 1) 100%
    );

    input {
      flex: 1;
      border: none;
      padding: 8px;
      font-size: 14px;
      border-radius: 8px;
      outline: none;
    }

    button {
      margin-left: 8px;
      padding: 8px 12px;
      background-color: rgba(168, 38, 255, 1);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;
