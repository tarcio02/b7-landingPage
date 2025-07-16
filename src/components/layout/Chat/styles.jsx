import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const RoboFlutuante = styled.div`
  position: absolute;
  top: -45px;
  left: -40px;
  width: 100px;
  z-index: 5;

  img {
    width: 100%;
    &.fechando {
      opacity: 0;
    }
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
  background-color: ${theme.colors.secondary};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: 1;
  transform: scale(1);

  &.fechando {
    opacity: 0;
    transform: scale(0.95);
  }

  .topo {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 8px 12px;
    background: ${theme.colors.primary};

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
      background-color: ${theme.colors.primary};

      border: none;
      color: white;
      border-radius: 10px;
      padding: 8px;
      font-size: 13px;
      text-align: left;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background-color: rgba(168, 38, 255, 0.4);
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
    background-color: ${theme.colors.primary};
    align-self: flex-end;
  }

  .mensagem.ia {
    /* background-color: ${theme.colors.primary}; */
    background-color: rgba(168, 38, 255, 0.4);

    align-self: flex-start;
  }

  .entrada {
    display: flex;
    padding: 8px;
    background: ${theme.colors.primary};

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
      background: ${theme.colors.buttonColor};
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
