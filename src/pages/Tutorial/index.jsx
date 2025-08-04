import * as S from "./styles";

const Tutorial = () => {
  return (
    <S.StylesTutorial>
      <S.Titulo>Apenas 4 Cliques</S.Titulo>
      <S.Paragrafo>É o que você precisa para dar o primeiro passo</S.Paragrafo>
      <div className="container">
        <S.Acao>
          <span className="numero">1</span>
          <h3 className="nome">Preencha o Formulário</h3>
          <p className="descricao">Conte-nos sobre seu negócio</p>
        </S.Acao>
        <S.Acao>
          <span className="numero">2</span>
          <h3 className="nome">Envie as Informações</h3>
          <p className="descricao">Seus dados são protegidos</p>
        </S.Acao>
        <S.Acao>
          <span className="numero">3</span>
          <h3 className="nome">Fique de Olho no WhatsApp</h3>
          <p className="descricao">Entraremos em contato</p>
        </S.Acao>
        <S.Acao>
          <span className="numero">4</span>
          <h3 className="nome">Agende sua Reunião</h3>
          <p className="descricao">Vamos planejar seu crescimento</p>
        </S.Acao>
      </div>
    </S.StylesTutorial>
  );
};

export default Tutorial;
