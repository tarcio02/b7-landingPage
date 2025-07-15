import { StylesHeader } from "./styles";
import logo from "../../../assets/images/logo.png";

const Header = ({ scrollToContato }) => {
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
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToContato();
          }}
        >
          Agendar Uma Reunião
        </a>
      </div>
    </StylesHeader>
  );
};

export default Header;
