import { StylesCloseButton } from "./styles";
import icone from "../../../assets/icons/iconeFechar.png";

const CloseButton = ({ onClick }) => {
  return (
    <StylesCloseButton onClick={onClick}>
      <img src={icone} alt="Fechar" />
    </StylesCloseButton>
  );
};

export default CloseButton;
