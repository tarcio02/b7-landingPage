import styled from "styled-components";

export const Desktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const Mobile = styled.div`
  display: block;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: none;
  }
`;
