import styled from "styled-components";

const StylesCard = styled.div`
  position: absolute;
  top: -490px;
  left: -100px;
  width: 600px;
  height: 600px;
  transform: rotate(14deg);
  z-index: 0;
  border-radius: 100px;
  background-color: rgba(168, 38, 255, 0.1);
`;

const Card = () => {
  return <StylesCard></StylesCard>;
};

export default Card;
