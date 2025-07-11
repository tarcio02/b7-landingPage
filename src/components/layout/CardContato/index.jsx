import { StylesCardContato } from "./styles";

const CardContato = ({ icone, titulo, texto }) => {
  return (
    <StylesCardContato>
      <div className="imagem">
        <img src={icone} alt="icone" />
      </div>
      <div className="texto">
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </StylesCardContato>
  );
};

export default CardContato;
