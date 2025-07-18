import { forwardRef } from "react";
import { StylesContato } from "./styles";
import Formulario from "../../components/layout/Formulário";
import CardContato from "../../components/layout/CardContato";
import prancheta from "../../assets/icons/prancheta.png";
import whatsapp from "../../assets/icons/whatsapp.png";

const Contato = forwardRef(({ formularioRef }, ref) => {
  return (
    <StylesContato ref={ref}>
      <div>
        <div className="detalhe"></div>
        <div className="explicacao">
          <div className="texto-pai">
            <h3>APENAS 4 CLIQUES</h3>
            <div className="paragrafo">
              É o que você precisa para dar o
              <div className="span">
                <span>primerio passo.</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <CardContato
              icone={prancheta}
              titulo="ENVIE AS INFORMAÇÕES"
              texto="Pode ficar tranquilo seus! Seus dados são protegidos e usados apenas para entrarmos em contato com você"
            />
            <CardContato
              icone={whatsapp}
              titulo="FIQUE DE OLHO NO WHATSAPP"
              texto="Queremos entender suas necesidadese e agendar um horario que funcione para você"
            />
          </div>
        </div>
      </div>
      <Formulario ref={formularioRef} />
    </StylesContato>
  );
});

export default Contato;
