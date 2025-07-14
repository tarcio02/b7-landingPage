import { StylesHeader } from "./styles";
import logo from "../../../assets/images/logo.png";

const Header = ({ scrollToContato }) => {
  const mensagem = encodeURIComponent(
    "Olá! Vim do site, quero agendar uma reunião personalizada."
  );
  const numero = "5577981223827"; // Substitua pelo seu número
  const link = `https://wa.me/${numero}?text=${mensagem}`;

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
        </ul>
        <a
          className="button"
          href={link}
          target="_blank"
          rel="noopener norefrrer"
        >
          Agendar Uma Reunião
        </a>
      </div>
    </StylesHeader>
  );
};

export default Header;
