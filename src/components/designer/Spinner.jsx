// src/components/Spinner.jsx
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #fff;
  border-top: 3px solid #1e90ff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader />
    </SpinnerWrapper>
  );
};

export default Spinner;
