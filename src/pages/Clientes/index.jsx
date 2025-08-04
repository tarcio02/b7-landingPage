import * as S from "./styles";
import clienteA from "../../assets/images/1.png";
import clienteB from "../../assets/images/2.png";
import clienteC from "../../assets/images/3.png";
import clienteD from "../../assets/images/4.png";
import clienteE from "../../assets/images/5.png";
import clienteF from "../../assets/images/6.png";
import clienteG from "../../assets/images/7.png";
import clienteH from "../../assets/images/8.png";

const clientes = [
  clienteA,
  clienteB,
  clienteC,
  clienteD,
  clienteE,
  clienteF,
  clienteG,
  clienteH,
];

const Cliente = () => {
  return (
    <S.StylesClientes>
      <div className="texto">
        <S.Titulo>Empresas que Confiam na Branding7</S.Titulo>
        <S.paragrafo>
          Clientes que já experimentaram o poder do método B7-3X
        </S.paragrafo>
      </div>
      <div className="container">
        {clientes.map((cliente) => {
          return (
            <S.CardCliente>
              <img className="cliente" src={cliente} alt="logo cliente" />
            </S.CardCliente>
          );
        })}
        {clientes.map((cliente) => {
          return (
            <S.CardCliente>
              <img className="cliente" src={cliente} alt="logo cliente" />
            </S.CardCliente>
          );
        })}
      </div>
    </S.StylesClientes>
  );
};

export default Cliente;
