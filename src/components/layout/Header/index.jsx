import { StylesHeader } from "./styles";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <StylesHeader>
      <div className="logo">
        <img src={logo} alt="logo b7" />
      </div>
      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Resultados</li>
        <li>Contatos</li>
      </ul>
      <button>Agendar Uma Reunião</button>
    </StylesHeader>
  );
};

export default Header;
