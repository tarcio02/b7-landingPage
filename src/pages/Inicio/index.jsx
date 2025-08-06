import { forwardRef, useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./styles";
import Etiqueta from "../../components/layout/Etiqueta";
import iconeFoguete from "../../assets/icons/foguete.png";
import iconeRaio from "../../assets/icons/iconeRaio.png";
import iconePlay from "../../assets/icons/iconePlay.png";
import iconeEspiral from "../../assets/icons/iconeEspiral.png";
import iconeGrafico from "../../assets/icons/iconeGrafico.png";
import banner from "../../assets/images/bannerInicio.png";

const Inicio = forwardRef((props, ref) => {
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

  function TituloDigitado({ partes }) {
    const [textoRenderizado, setTextoRenderizado] = useState([]);

    useEffect(() => {
      let totalChars = partes.reduce(
        (acc, parte) => acc + parte.texto.length,
        0
      );
      let i = 0;
      let currentPart = 0;
      let currentChar = 0;
      const chars = [];

      const intervalo = setInterval(() => {
        if (currentPart >= partes.length) {
          clearInterval(intervalo);
          return;
        }

        const { texto, classe } = partes[currentPart];
        const char = texto.charAt(currentChar);

        chars.push({ char, classe });

        setTextoRenderizado([...chars]);

        currentChar++;

        if (currentChar >= texto.length) {
          currentPart++;
          currentChar = 0;
        }

        i++;
        if (i >= totalChars) {
          clearInterval(intervalo);
        }
      }, 80);

      return () => clearInterval(intervalo);
    }, [partes]);

    return (
      <S.Titulo
        style={{ position: "relative" }}
        data-aos="fade-right"
        data-aos-once="true"
      >
        {/* Reserva o espaço do texto completo */}
        <div style={{ visibility: "hidden" }}>
          {partes.map((parte, idx) =>
            parte.classe ? (
              <span key={`hidden-${idx}`} className={parte.classe}>
                {parte.texto}
              </span>
            ) : (
              <span key={`hidden-${idx}`}>{parte.texto}</span>
            )
          )}
        </div>

        {/* Texto digitando por cima */}
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          {textoRenderizado.map((item, idx) =>
            item.classe ? (
              <span key={idx} className={item.classe}>
                {item.char}
              </span>
            ) : (
              <span key={idx}>{item.char}</span>
            )
          )}
        </div>
      </S.Titulo>
    );
  }

  const handleClick = (e) => {
    console.log("formularioRef:", props.formularioRef);
    e.preventDefault();

    if (props.formularioRef?.current) {
      props.formularioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function Contador({ valorFinal, duracao = 6000, sufixo = "" }) {
    const [contador, setContador] = useState(0);
    const [visivel, setVisivel] = useState(false);
    const [ativo, setAtivo] = useState(false);
    const elementoRef = useRef(null);

    // Verifica se está visível na tela
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting) {
            setVisivel(true);
            setTimeout(() => {
              setAtivo(true); // inicia o contador 1s depois (mesmo tempo da animação)
            }, 1000);
          }
        },
        { threshold: 0.5 }
      );

      if (elementoRef.current) {
        observer.observe(elementoRef.current);
      }

      return () => {
        if (elementoRef.current) {
          observer.unobserve(elementoRef.current);
        }
      };
    }, []);

    // Lógica do contador
    useEffect(() => {
      if (!ativo) return;

      const inicio = performance.now();

      const animar = (agora) => {
        const tempoPassado = agora - inicio;
        const progresso = Math.min(tempoPassado / duracao, 1);
        const valorAtual = Math.floor(progresso * valorFinal);
        setContador(valorAtual);

        if (progresso < 1) {
          requestAnimationFrame(animar);
        }
      };

      requestAnimationFrame(animar);
    }, [ativo, valorFinal, duracao]);

    return (
      <span
        ref={elementoRef}
        className={`contador ${visivel ? "visivel" : ""}`}
      >
        {contador}
        {sufixo}
      </span>
    );
  }

  return (
    <S.StylesInicio ref={ref}>
      {/* Textos que estão no início */}

      <S.Texto>
        <Etiqueta texto="Método Exclusivo B7-3X" icone={iconeFoguete} />

        <TituloDigitado
          partes={[
            { texto: "Tenha " },
            { texto: "Resultados", classe: "gradiente" },
            { texto: " em até " },
            { texto: "90 DIAS", classe: "tempo" },
          ]}
        />
        <S.Paragrafo
          data-aos="fade-right"
          data-aos-delay="2000"
          data-aos-once="true"
        >
          Do tráfego pago ao atendimento automatizado com IA. Somos a agência
          que conecta{" "}
          <span className="bold">estratégia, criatividade e vendas</span> para
          negócios locais crescerem de verdade.
        </S.Paragrafo>
        <div className="buttons">
          <S.Botao
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-once="true"
            primary
            onClick={handleClick}
          >
            <img src={iconeRaio} alt="icone" />
            Quero Vender Mais
          </S.Botao>
          <S.Botao
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <img src={iconePlay} alt="icone" />
            Ver Como Funciona
          </S.Botao>
        </div>
        <S.Metricas
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="1000"
          data-aos-once="true"
        >
          <div className="dado">
            <Contador valorFinal={90} />
            <p>Dias para Resultados</p>
          </div>
          <div className="dado">
            <Contador valorFinal={250} sufixo="+" />
            <p>Clientes Atendidos</p>
          </div>
          <div className="dado">
            <Contador valorFinal={300} sufixo="%" />
            <p>Crescimento Médio</p>
          </div>
        </S.Metricas>
      </S.Texto>
      {/* banner e detalhes */}
      <S.Banner>
        <div className="detalhe left">
          <img className="imageDetalhe" src={iconeGrafico} alt="icone" />
        </div>
        <img className="banner" src={banner} alt="banner do site" />
        <div className="detalhe rigth">
          <img className="imageDetalhe" src={iconeEspiral} alt="caracol" />
        </div>
      </S.Banner>
    </S.StylesInicio>
  );
});

export default Inicio;
