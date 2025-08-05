import { useEffect, useState } from "react";
import * as S from "./styles";
import CloseButton from "../../ui/CloseButton";
import ebook from "../../../assets/images/ebook.png";
import ModalForm from "../ModalForm";

const ModalExitIntent = ({ onClose, show, showForm }) => {
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
    <>
      <S.StylesModalExitIntent>
        <S.ModalBox>
          <CloseButton onClick={onClose} />
          <S.Titulo>
            Olá, não vá embora agora, temos um presente para você!
          </S.Titulo>
          <S.Descricao>E-Book Como vender mais pelo WhatsApp!</S.Descricao>
          <S.image>
            <img src={ebook} alt="ebook como vender mais pelo instagram" />
          </S.image>
          <S.Botao
            onClick={() => {
              onClose();
              showForm();
            }}
          >
            Resgatar E-book
          </S.Botao>
        </S.ModalBox>
      </S.StylesModalExitIntent>
    </>
  );
};

export default ModalExitIntent;
