import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0%{transform: translateX(0);}
  100% {transform: translateX(-50%);}
`;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 140px;
  /* border: 1px solid red; */
  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const LogosTrack = styled.div`
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 140px;

  img {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 120px;
  }
`;

export const DuplicatedTrack = styled.div`
  display: flex;
  align-items: center;
`;
