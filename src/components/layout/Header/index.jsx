import { StylesHeader } from "./styles";
import logo from "../../../assets/images/logo.png";
import MenuHamburguer from "../../ui/MenuHamburguer";
import MenuLateral from "../MenuLateral";
import { useState } from "react";

const Header = ({ scrollToContato }) => {
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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToContato();
              }}
            >
              Contato
            </a>
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
      <a
        className="button"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToContato();
        }}
      >
        Agendar Uma Reunião
      </a>
      <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
      <MenuLateral
        aberto={menuAberto}
        scrollToContato={scrollToContato}
        fechar={() => setMenuAberto(false)}
      />
    </StylesHeader>
  );
};

export default Header;
