import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesNavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  z-index: 999;

  li {
    list-style: none;
    transition: transform 0.2s ease-in-out;

    a {
      text-decoration: none;
      color: ${theme.colors.texto};
      font-weight: bold;
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (min-width: 601px) {
    // No momento não está sendo utilizada, mas manteremos
    // caso necessite de estilização para esse breakpoint.
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    width: 408px;
    margin-bottom: 0;

    li {
      list-style: none;

      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
`;
