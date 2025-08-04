import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: ${theme.espaces.mobileUm};
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  z-index: 1000;

  &.hide {
    transform: translateY(-100%);
  }
  &.show {
    transform: translateY(0);
  }

  @media (min-width: 601px) {
    padding: ${theme.espaces.mobileDois};
  }

  @media (min-width: 769px) {
    padding: ${theme.espaces.desktop};
  }
`;

export const logo = styled.div`
  img {
    width: 80px;
  }

  @media (min-width: 601px) {
    img {
      width: 100px;
    }
  }

  @media (min-width: 769px) {
    img {
      width: 120px;
    }
  }
`;
