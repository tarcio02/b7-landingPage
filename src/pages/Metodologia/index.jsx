import { forwardRef } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./styles";
import Etiqueta from "../../components/layout/Etiqueta";
import iconeA from "../../assets/icons/iconeCirculos.png";
import iconeB from "../../assets/icons/iconeFoguete.png";
import iconeC from "../../assets/icons/iconeGraficoB.png";

const Metodologia = forwardRef((props, ref) => {
  const [displayFlex, setDisplayFlex] = useState(false);

  function atualizarDisplayFlex() {
    if (window.innerWidth >= 600) {
      setDisplayFlex(true);
    } else {
      setDisplayFlex(false);
    }
  }

  useEffect(() => {
    // Atualiza o estado ao montar o componente
    atualizarDisplayFlex(setDisplayFlex);

    // Atualiza o estado ao redimensionar a janela
    function handleResize() {
      atualizarDisplayFlex(setDisplayFlex);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      offset: 50, // Distância do scroll para iniciar a animação
      easing: "ease-in-out", // Tipo de transição
      once: false, // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <S.StylesMetodologia ref={ref}>
      <Etiqueta texto="Método B7-3X" />
      <S.Titulo>Como Transformamos Seu Negócio</S.Titulo>
      <S.Paragrafo>
        Nosso método exclusivo combina estratégia, criatividade e tecnologia
        para gerar resultados reais
      </S.Paragrafo>
      <div className="container">
        <S.CardMetodo
          data-aos={displayFlex ? "fade-up" : "fade-left"}
          data-aos-delay={displayFlex ? "000" : "0"}
        >
          <div className="icone">
            <img src={iconeA} alt="icone" />
          </div>
          <h3 className="titulo">Diagnóstico Estratégico</h3>
          <p className="descricao">
            Análise completa do seu negócio para identificar oportunidades de
            crescimento
          </p>
        </S.CardMetodo>
        <S.CardMetodo
          data-aos={displayFlex ? "fade-up" : "fade-right"}
          data-aos-delay={displayFlex ? "300" : "0"}
        >
          <div className="icone">
            <img src={iconeB} alt="icone" />
          </div>
          <h3 className="titulo">Execução Criativa</h3>
          <p className="descricao">
            Criação de campanhas e conteúdos que convertem visitantes em
            clientes
          </p>
        </S.CardMetodo>
        <S.CardMetodo
          data-aos={displayFlex ? "fade-up" : "fade-left"}
          data-aos-delay={displayFlex ? "600" : "0"}
        >
          <div className="icone">
            <img src={iconeC} alt="icone" />
          </div>
          <h3 className="titulo">Acompanhamento Inteligente</h3>
          <p className="descricao">
            Criação de campanhas e conteúdos que convertem visitantes em
            clientes
          </p>
        </S.CardMetodo>
      </div>
    </S.StylesMetodologia>
  );
});

export default Metodologia;
