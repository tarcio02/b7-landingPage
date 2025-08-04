import { forwardRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./styles";
import iconeEstrela from "../../assets/icons/iconeestrela2.png";

const Feedback = forwardRef((props, ref) => {
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
      easing: "ease-in-out", // Tipo de transição
      once: false, // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <S.StylesFeedback ref={ref}>
      <S.Titulo>O Que Nossos Clientes Dizem</S.Titulo>
      <S.Paragrafo>
        Resultados reais de empresas que confiaram no método B7-3X
      </S.Paragrafo>
      <div className="container">
        <S.CardFeedback data-aos="flip-left">
          <div className="avaliacao">
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
          </div>
          <p className="comentario">
            "Em 90 dias, aumentamos nossas vendas em 300% com o método B7-3X.
            Resultado incrível!"
          </p>
          <div className="perfil">
            <h3>Carlos Silva</h3>
            <p>TechStart</p>
          </div>
        </S.CardFeedback>
        <S.CardFeedback data-aos="flip-left">
          <div className="avaliacao">
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
          </div>
          <p className="comentario">
            "A Branding7 transformou nossa presença digital. Agora temos uma
            agenda sempre cheia."
          </p>
          <div className="perfil">
            <h3>Ana Costa</h3>
            <p>Bella Estética</p>
          </div>
        </S.CardFeedback>
        <S.CardFeedback data-aos="flip-left">
          <div className="avaliacao">
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
            <img src={iconeEstrela} alt="icone" />
          </div>
          <p className="comentario">
            "Profissionalismo e resultados. Recomendo a Branding7 para qualquer
            empresa."
          </p>
          <div className="perfil">
            <h3>Roberto Lima</h3>
            <p>Lima Advocacia</p>
          </div>
        </S.CardFeedback>
      </div>
    </S.StylesFeedback>
  );
});

export default Feedback;
