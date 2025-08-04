import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translatex(20px);
  }
  to {
    opacity: 1;
    transform: translatex(0);
  }
`;
