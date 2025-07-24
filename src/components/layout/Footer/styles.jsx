import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  border-top: 1px solid white;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    padding-bottom: 32px;

    .text-box {
      width: 372px;
      img {
        width: 172px;
      }
      p {
        font-size: 16px;
        line-height: 150%;
        font-weight: 400;
      }
    }

    .links-box {
      display: flex;
      gap: 48px;
      .links {
        display: flex;
        flex-direction: column;
        width: 135px;
        gap: 24px;

        h3 {
          color: ${theme.colors.primary};
        }

        a {
          text-decoration: none;
          color: white;
          &:hover {
            color: gray;
          }
        }
      }
    }
    .sociais {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }

  .copy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding-top: 32px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      gap: 16px;

      .links-box {
        display: none;
        gap: 24px;

        .links {
          width: 120px;
        }
      }

      .sociais {
        flex-direction: row;
        gap: 32px;

        img {
          width: 32px;
        }
      }
    }
  }
`;
