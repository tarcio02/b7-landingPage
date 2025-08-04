import { StylesNavBar } from "./styles";

const NavBar = ({
  formularioRef,
  inicioRef,
  metodologiaRef,
  feedbackRef,
  faqRef,
  fecharMenu,
}) => {
  const handleClick = (e, ref) => {
    e.preventDefault();

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (fecharMenu) {
        fecharMenu(); // opcional: fecha menu se for versão mobile
      }
    }
  };

  return (
    <StylesNavBar>
      <li onClick={(e) => handleClick(e, inicioRef)}>
        <a href="#">Início</a>
      </li>
      <li onClick={(e) => handleClick(e, faqRef)}>
        <a href="#">Sobre</a>
      </li>
      <li onClick={(e) => handleClick(e, metodologiaRef)}>
        <a href="#">Serviços</a>
      </li>
      <li onClick={(e) => handleClick(e, feedbackRef)}>
        <a href="#">Resultados</a>
      </li>
      <li onClick={(e) => handleClick(e, formularioRef)}>
        <a href="#">Contato</a>
      </li>
    </StylesNavBar>
  );
};

export default NavBar;
