import ButtonForm from "../../ui/ButtonForm";
import { Drawer, Lista } from "./styles";
import { BotaoMobile } from "../../ui/ButtonForm/styles";

const MenuLateral = ({ aberto, formularioRef, fechar }) => {
  return (
    <Drawer $aberto={aberto}>
      <Lista>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Resultados</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </Lista>
      <BotaoMobile>
        <ButtonForm
          texto="Agendar uma reunião"
          formularioRef={formularioRef}
          fecharMenu={fechar}
        />
      </BotaoMobile>
    </Drawer>
  );
};

export default MenuLateral;
