import * as S from "./styles";
import Formulario from "../../components/layout/Formulário";
import { forwardRef } from "react";

const FormContato = forwardRef((props, ref) => {
  const webHook = "https://n8n-b7-n8n.xxer28.easypanel.host/webhook/lead_new";

  return (
    <S.StylesFormContato ref={ref}>
      <S.Titulo>Preencha o Formulário e Fale Conosco</S.Titulo>
      <S.Paragrafo>
        Pode ficar tranquilo! Seus dados são protegidos e usados apenas para
        entrarmos em contato com você
      </S.Paragrafo>
      <Formulario webHook={webHook} />
    </S.StylesFormContato>
  );
});

export default FormContato;
