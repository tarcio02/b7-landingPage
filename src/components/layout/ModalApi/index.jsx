import { useEffect } from "react";
import { Backdrop, ModalBox, Button, Title } from "./styles";

const ModalApi = ({ show, onClose, message, isError = false }) => {
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
    <Backdrop>
      <ModalBox>
        <Title error={isError}>{isError ? "Erro" : "#BoraVender+"}</Title>
        <p>{message}</p>
        <Button error={isError} onClick={onClose}>
          Fechar
        </Button>
      </ModalBox>
    </Backdrop>
  );
};

export default ModalApi;
