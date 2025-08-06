import { useEffect } from "react";
import * as S from "./styles";
import CloseButton from "../../ui/CloseButton";
import Formulario from "../Formulário";

const ModalForm = ({ onClose, show }) => {
  const webHook =
    "https://n8n-b7-n8n.xxer28.easypanel.host/webhook/Ebook_Whatsapp";

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
    <S.StylesModalForm>
      <S.ModalBox>
        <CloseButton onClick={onClose} />
        <S.ModalContent>
          <S.Titulo>Preencha o Fomulário Para Resgatar o E-book</S.Titulo>
          <Formulario webHook={webHook} />
        </S.ModalContent>
      </S.ModalBox>
    </S.StylesModalForm>
  );
};

export default ModalForm;
