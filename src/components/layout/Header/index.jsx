import { StylesHeader } from "./styles";
import logo from "../../../assets/images/logo.png";
import MenuHamburguer from "../../ui/MenuHamburguer";
import MenuLateral from "../MenuLateral";
import { useState } from "react";
import ButtonForm from "../../ui/ButtonForm";
import { BotaoDesktop } from "../../ui/ButtonForm/styles";

const Header = ({ formularioRef }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  return (
    <StylesHeader>
      <div className="logo">
        <img src={logo} alt="logo b7" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">Contato</a>
          </li>
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
          <li></li>
        </ul>
      </div>
      <BotaoDesktop>
        <ButtonForm texto="Agendar uma reunião" formularioRef={formularioRef} />
      </BotaoDesktop>
      <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
      <MenuLateral
        aberto={menuAberto}
        formularioRef={formularioRef}
        fechar={() => setMenuAberto(false)}
      />
    </StylesHeader>
  );
};

export default Header;
