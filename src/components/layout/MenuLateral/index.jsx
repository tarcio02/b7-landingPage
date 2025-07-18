import { Drawer, Lista, Botao } from "./styles";

const MenuLateral = ({ aberto }) => {
  return (
    <Drawer $aberto={aberto}>
      <Lista>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Resultados</a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToContato();
              fechar();
            }}
          >
            Contato
          </a>
        </li>
      </Lista>

      <Botao
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToContato();
          fechar();
        }}
      >
        Agendar Uma Reunião
      </Botao>
    </Drawer>
  );
};

export default MenuLateral;
