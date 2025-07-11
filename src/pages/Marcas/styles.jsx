import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0%{transform: translateX(0);}
  100% {transform: translateX(-50%);}
`;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 240px;
  margin-top: 32px;
`;

export const LogosTrack = styled.div`
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  border-radius: 50%;

  img {
    /* max-height: 60px; */
    width: 200px;
  }
`;

export const DuplicatedTrack = styled.div`
  display: flex;
  align-items: center;
`;
