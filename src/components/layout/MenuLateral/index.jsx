import ButtonForm from "../../ui/ButtonForm";
import { Drawer } from "./styles";
import { Mobile } from "../../../styles/Components/Responsivo";
import NavBar from "../NavBar";

const MenuLateral = ({
  formularioRef,
  inicioRef,
  metodologiaRef,
  feedbackRef,
  faqRef,
  aberto,
  fechar,
}) => {
  return (
    <Drawer $aberto={aberto}>
      <NavBar
        fecharMenu={fechar}
        formularioRef={formularioRef}
        inicioRef={inicioRef}
        metodologiaRef={metodologiaRef}
        feedbackRef={feedbackRef}
        faqRef={faqRef}
      />
      <Mobile>
        <ButtonForm
          texto="Agendar uma reunião"
          formularioRef={formularioRef}
          fecharMenu={fechar}
        />
      </Mobile>
    </Drawer>
  );
};

export default MenuLateral;
