import { StylesHero } from "./styles";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import lampada from "../../assets/images/lampada.png";
import luz from "../../assets/images/luz.png";
import ButtonForm from "../../components/ui/ButtonForm";

const Hero = ({ formularioRef }) => {
  return (
    <StylesHero>
      <img className="luz left" src={luz} alt="efeito de luz" />
      <div className="texto">
        <div className="top">
          <h2>
            <span className="color">Tenha Resultados</span> em até
            <span className="bold"> 90 DIAS</span> com o Método
            <span className="bold"> B7-3X </span>{" "}
          </h2>
          <p>
            Do tráfego pago ao atendimento automatizado com IA. Somos a agência
            que conecta estratégia, criatividade e vendas para negócios locais
            crescerem de verdade.
          </p>
          <ButtonForm
            texto="Quero vender mais"
            formularioRef={formularioRef}
            fecharMenu={() => {}}
          />
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
      <div className="detalhe"></div>
    </StylesHero>
  );
};

export default Hero;
