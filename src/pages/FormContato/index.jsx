import * as S from "./styles";
import Formulario from "../../components/layout/Formulário";
import { forwardRef } from "react";

const FormContato = forwardRef((props, ref) => {
  return (
    <S.StylesFormContato ref={ref}>
      <S.Titulo>Preencha o Formulário e Fale Conosco</S.Titulo>
      <S.Paragrafo>
        Pode ficar tranquilo! Seus dados são protegidos e usados apenas para
        entrarmos em contato com você
      </S.Paragrafo>
      <Formulario />
    </S.StylesFormContato>
  );
});

export default FormContato;
