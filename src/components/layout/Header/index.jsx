import { useState, useEffect } from "react";
import * as S from "./styles";
import logo from "../../../assets/images/logo.png";
import MenuHamburguer from "../../ui/MenuHamburguer";
import ButtonForm from "../../ui/ButtonForm";
import { Desktop } from "../../../styles/Components/Responsivo";
import NavBar from "../NavBar";

const Header = ({
  formularioRef,
  inicioRef,
  metodologiaRef,
  feedbackRef,
  faqRef,
  toggleMenu,
  menuAberto,
}) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // rolando para baixo
    } else {
      setShowHeader(true); // rolando para cima
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <>
      <S.StylesHeader className={showHeader ? "show" : "hide"}>
        <S.logo>
          <img src={logo} alt="Logo Branding7" />
        </S.logo>
        <Desktop>
          <NavBar
            formularioRef={formularioRef}
            inicioRef={inicioRef}
            metodologiaRef={metodologiaRef}
            feedbackRef={feedbackRef}
            faqRef={faqRef}
          />
        </Desktop>
        <Desktop>
          <ButtonForm
            texto="Agendar uma reunião"
            formularioRef={formularioRef}
          />
        </Desktop>
      </S.StylesHeader>
      <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
