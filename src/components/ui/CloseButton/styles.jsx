import styled from "styled-components";

export const StylesCloseButton = styled.button`
  width: 32px;
  height: 32px;
  top: 15px;
  right: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  img {
    width: 24px;
  }

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
