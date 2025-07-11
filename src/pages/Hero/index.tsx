import { StylesHero } from "./styles";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import lampada from "../../assets/images/lampada.png";
import Card from "../../components/designer/Card";
import luz from "../../assets/images/luz.png";

const Hero = () => {
  return (
    <StylesHero>
      <Card />
      <img className="luz left" src={luz} alt="efeito de luz" />
      <div className="texto">
        <div className="top">
          <h2>
            <span className="color">ACELERE AS VENDAS</span> COM{" "}
            <span className="bold">ESTRATÉGIAS</span> QUE{" "}
            <span className="bold">FUNCIONAM</span>
          </h2>
          <p>
            Do tráfego pago ao atendimento automatizado com IA. Somos a agência
            que conecta estratégia, criatividade e vendas para negócios locais
            crescerem de verdade.
          </p>
          <button>Quero Vender Mais!</button>
        </div>
        <div className="botton">
          <p>
            <span>Siga a Branding7</span> nas Redes Social
          </p>
          <div className="sociais">
            <a>
              <img src={facebook} alt="Ir para o facebook" />
            </a>
            <a href="">
              <img src={instagram} alt="Ir para o instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="lampada">
        <img src={lampada} alt="" />
      </div>
    </StylesHero>
  );
};

export default Hero;
