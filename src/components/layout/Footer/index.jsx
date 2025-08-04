import * as S from "./styles";
import logo from "../../../assets/images/logo.png";
import iconeTelefone from "../../../assets/icons/iconeTelefone.png";
import iconeInstagram from "../../../assets/icons/iconeInstagram.png";
import iconeFacebook from "../../../assets/icons/iconeFacebook.png";
import iconeCarta from "../../../assets/icons/iconeCarta.png";
import iconeLocalizacao from "../../../assets/icons/iconeLocalizacao.png";

const Footer = () => {
  return (
    <S.StylesFooter>
      <div className="container">
        <div className="logo">
          <S.Logo>
            <img src={logo} alt="logo" />
            <S.Paragrafo>
              Bem-vindo à Branding7, sua parceira estratégica em marketing e
              publicidade!
            </S.Paragrafo>
          </S.Logo>
        </div>
        <S.Informacoes>
          <h3>Links Rápidos</h3>
          <a className="info" href="#">
            Sobre Nós
          </a>
          <a className="info" href="#">
            Nosso Time
          </a>
          <a className="info" href="#">
            Serviços
          </a>
        </S.Informacoes>
        <S.Informacoes>
          <h3>Contato</h3>
          <div className="info">
            <img src={iconeTelefone} alt="icone" />
            <a href="https://wa.me/557781223827" target="_blank">
              (77) 98122-3827
            </a>
          </div>
          <div className="info">
            <img src={iconeCarta} alt="icone" />
            <a href="mailto:comercial@branding7.com.br" target="_blank">
              comercial@branding7.com.br
            </a>
          </div>
          <div className="info">
            <img src={iconeLocalizacao} alt="icone" />
            <a href="https://maps.app.goo.gl/bvsPTgfYHFiAymWL9" target="_blank">
              Vitória da Conquista - BA
            </a>
          </div>
        </S.Informacoes>
        <S.Sociais>
          <a href="https://www.instagram.com/b7.agencia/" target="_blank">
            <img src={iconeInstagram} alt="icone" />
          </a>
          <a href="#">
            <img src={iconeFacebook} alt="icone" />
          </a>
        </S.Sociais>
      </div>
      <S.Copywrite>
        &copy; 2025 Branding7. Todos os direitos reservados. Designed by
        Branding7
      </S.Copywrite>
    </S.StylesFooter>
  );
};

export default Footer;
