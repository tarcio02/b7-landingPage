import { useEffect } from "react";
import * as S from "./styles";
import CloseButton from "../../ui/CloseButton";

const ModalTutorial = ({ show, onClose, numero, titulo, descricao }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // garante o reset se desmontar
    };
  }, [show]);

  if (!show) return null;

  return (
    <S.StylesModalTutorial onClick={onClose}>
      <S.ModalBox>
        <CloseButton onClick={onClose} />
        <S.Numero>{numero}</S.Numero>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Descricao>{descricao}</S.Descricao>
      </S.ModalBox>
    </S.StylesModalTutorial>
  );
};

export default ModalTutorial;
