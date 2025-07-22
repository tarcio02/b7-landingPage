import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 80px;
  border-bottom: 1px solid ${theme.colors.primary};

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 120px;
    }
  }

  .nav {
    display: flex;
    gap: 42px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    font-size: 16px;
    font-weight: 200;

    li {
      a {
        z-index: 1;
        cursor: pointer;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    .nav {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 24px 32px;
    align-items: center;
    justify-content: space-between;

    .logo {
      img {
        width: 120px;
      }
    }

    .nav {
      display: none;
    }

    .button {
      width: 160px;
      font-size: 14px;
      padding: 4px;
      display: flex;
      display: none;
      align-items: center;

      &:hover {
        color: black;
      }
    }
  }
`;
