import { forwardRef } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./styles";
import Etiqueta from "../../components/layout/Etiqueta";
import iconeA from "../../assets/icons/iconeLupa.png";
import iconeB from "../../assets/icons/iconeFoguete.png";
import iconeC from "../../assets/icons/iconeGraficoB.png";
import iconeCheck from "../../assets/icons/iconeCheck.png";

const Metodologia = forwardRef((props, ref) => {
  const cards = [
    {
      id: 1,
      iconeModal: iconeA,
      titulo: "Diagnóstico Estratégico",
      descricao:
        "Análise aprofundada gestão de clientes, ofertas e metas para identificar oportunidades de crescimento.",
      item1: "Gestão de Clientes",
      item2: "Gestão de Ofertas",
      item3: "Gestão de Metas",
    },
    {
      id: 2,
      iconeModal: iconeB,
      titulo: "Execução Criativa",
      descricao:
        "Desenvolvimento de estratégias específicas baseadas no diagnóstico para maximizar seus resultados.",
      item1: "CRM Personalizado",
      item2: "Funil de Vendas",
      item3: "KPIs Definidos",
    },
    {
      id: 3,
      iconeModal: iconeC,
      titulo: "Execução e Resultados",
      descricao:
        "Execução orientada por resultados, aplicando com precisão as estratégias desenvolvidas para maximizar suas vendas.",
      item1: "Processo Replicável",
      item2: "Presença Digital",
      item3: "Aumento do Ticket Médio",
    },
  ];

  const [displayFlex, setDisplayFlex] = useState(false);
  const [cardVirado, setCardVirado] = useState(null);

  const virarCard = (id) => {
    setCardVirado(cardVirado === id ? null : id); // alterna
  };

  function atualizarDisplayFlex() {
    if (window.innerWidth >= 600) {
      setDisplayFlex(true);
    } else {
      setDisplayFlex(false);
    }
  }

  return (
    <S.StylesMetodologia ref={ref}>
      <Etiqueta texto="Método B7-3X" />
      <S.Titulo>Como Transformamos Seu Negócio</S.Titulo>
      <S.Paragrafo>
        Nosso método exclusivo combina estratégia, criatividade e tecnologia
        para gerar resultados reais
      </S.Paragrafo>
      <div className="container">
        <S.CardMetodo $virado={cardVirado === 1}>
          <div className="card-inner">
            <div className="card-front">
              <div className="icone">
                <img src={iconeA} alt="icone" />
              </div>
              <h3 className="titulo">Diagnóstico Estratégico</h3>
              <p className="descricao">
                Análise completa do seu negócio para identificar oportunidades
                de crescimento
              </p>
              <button
                onClick={() => virarCard(1)}
                className="botao botao-front"
              >
                Saiba mais
              </button>
            </div>
            <div className="card-back">
              <h3 className="titulo">{cards[0].titulo}</h3>
              <p className="descricao">{cards[0].descricao}</p>
              <ul className="lista">
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[0].item1}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[0].item2}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[0].item3}
                </li>
              </ul>
              <button onClick={() => virarCard(1)} className="botao botao-back">
                Voltar
              </button>
            </div>
          </div>
        </S.CardMetodo>
        <S.CardMetodo $virado={cardVirado === 2}>
          <div className="card-inner">
            <div className="card-front">
              <div className="icone">
                <img src={iconeB} alt="icone" />
              </div>
              <h3 className="titulo">Execução Criativa</h3>
              <p className="descricao">
                Criação de campanhas e conteúdos que convertem visitantes em
                clientes.
              </p>
              <button
                onClick={() => virarCard(2)}
                className="botao botao-front"
              >
                Saiba mais
              </button>
            </div>
            <div className="card-back">
              <h3 className="titulo">{cards[1].titulo}</h3>
              <p className="descricao">{cards[1].descricao}</p>
              <ul className="lista">
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[1].item1}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[1].item2}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[1].item3}
                </li>
              </ul>
              <button onClick={() => virarCard(2)} className="botao botao-back">
                Voltar
              </button>
            </div>
          </div>
        </S.CardMetodo>
        <S.CardMetodo $virado={cardVirado === 3}>
          <div className="card-inner">
            <div className="card-front">
              <div className="icone">
                <img src={iconeC} alt="icone" />
              </div>
              <h3 className="titulo">Acompanhamento Inteligente</h3>
              <p className="descricao">
                Monitoramento e otimização contíua para maximizar seus
                resultados.
              </p>
              <button
                onClick={() => virarCard(3)}
                className="botao botao-front"
              >
                Saiba mais
              </button>
            </div>
            <div className="card-back">
              <h3 className="titulo">{cards[2].titulo}</h3>
              <p className="descricao">{cards[2].descricao}</p>
              <ul className="lista">
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[2].item1}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[2].item2}
                </li>
                <li>
                  <div className="imagem-li">
                    <img src={iconeCheck} alt="icone" />
                  </div>
                  {cards[2].item3}
                </li>
              </ul>
              <button onClick={() => virarCard(3)} className="botao botao-back">
                Voltar
              </button>
            </div>
          </div>
        </S.CardMetodo>
      </div>
    </S.StylesMetodologia>
  );
});

export default Metodologia;
