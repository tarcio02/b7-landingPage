import { StylesFooter } from "./styles";
import logob7 from "../../../assets/images/logo.png";
import instagram from "../../../assets/icons/instagram-rodape.png";
import whatsapp from "../../../assets/icons/whatsapp-rodape.png";

const Footer = () => {
  return (
    <StylesFooter>
      <div className="container">
        <div className="text-box">
          <img src={logob7} alt="logo branding seven" />
          <p>
            Bem-vindo à Branding 7, sua parceira estratégica em marketing e
            publicidade!
          </p>
        </div>
        <div className="links-box">
          <div className="links">
            <h3>Links Rápidos</h3>
            <a href="#">Sobre Nós</a>
            <a href="#">Nosso Time</a>
            <a href="#">Serviços</a>
          </div>
          <div className="links">
            <h3>Suporte</h3>
            <a href="#">Termos e Condiçções</a>
            <a href="#">Política e Privacidade</a>
            <a href="#">FAQs</a>
            <a href="#">Fale com um Especialista B7</a>
          </div>
          <div className="links">
            <h3>Empresa</h3>
            <a href="#">Carreira</a>
            <a href="#">Atualizações</a>
            <a href="#">Trabalhe Conosco</a>
            <a href="#">Anúncios</a>
          </div>
        </div>
        <div className="sociais">
          <a target="blank" href="https://www.instagram.com/b7.agencia/">
            <img src={instagram} alt="instagram" />
          </a>
          <a target="blank" href="https://wa.me/5577981223827">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
      </div>
      <div className="copy">
        <p>Copyrigth</p> &copy; <p>designed by Branding7</p>
      </div>
    </StylesFooter>
  );
};

export default Footer;
