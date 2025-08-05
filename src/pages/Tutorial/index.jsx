import { useState } from "react";
import * as S from "./styles";
import ModalTutorial from "../../components/layout/ModalTutorial";

const Tutorial = () => {
  const modais = [
    {
      id: 0,
      titulo: "Preencher o Formulário",
      descricao:
        "Preencha o formulário na sessão abaixo, isirendo todos os dados e em instantes o nosso especialista irá te atender.",
    },
    {
      id: 1,
      titulo: "Envie as Informações",
      descricao:
        "Ao enviar os seus dados, você terá a certeza de que deus dados são armazenados e protegidos pelo nosso sistema de web segurança.",
    },
    {
      id: 2,
      titulo: "Fique de Olho no Whatsapp",
      descricao:
        "Após realizar o passo a passo, aguarde alguns instantes e enviaremos uma menssagem para você.",
    },
    {
      id: 3,
      titulo: "Agende sua Reunião",
      descricao:
        "Agende sua reunião para podermos melhor análisar e planejar o crescimento de sua empresa.",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState(null);

  const abrirModal = (card) => {
    setShowModal(true);
    setCardSelecionado(card);
  };

  return (
    <S.StylesTutorial>
      <S.Titulo>Apenas 4 Cliques</S.Titulo>
      <S.Paragrafo>É o que você precisa para dar o primeiro passo</S.Paragrafo>
      <div className="container">
        <S.Acao>
          <span onClick={() => abrirModal(modais[0])} className="numero">
            1
          </span>
          <h3 className="nome">Preencha o Formulário</h3>
          <p className="descricao">Conte-nos sobre seu negócio</p>
        </S.Acao>
        <S.Acao>
          <span onClick={() => abrirModal(modais[1])} className="numero">
            2
          </span>
          <h3 className="nome">Envie as Informações</h3>
          <p className="descricao">Seus dados são protegidos</p>
        </S.Acao>
        <S.Acao>
          <span onClick={() => abrirModal(modais[2])} className="numero">
            3
          </span>
          <h3 className="nome">Fique de Olho no WhatsApp</h3>
          <p className="descricao">Entraremos em contato</p>
        </S.Acao>
        <S.Acao>
          <span onClick={() => abrirModal(modais[3])} className="numero">
            4
          </span>
          <h3 className="nome">Agende sua Reunião</h3>
          <p className="descricao">Vamos planejar seu crescimento</p>
        </S.Acao>
      </div>
      {cardSelecionado && (
        <ModalTutorial
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setCardSelecionado(null);
          }}
          numero={cardSelecionado.id + 1}
          titulo={cardSelecionado.titulo}
          descricao={cardSelecionado.descricao}
        />
      )}
    </S.StylesTutorial>
  );
};

export default Tutorial;
