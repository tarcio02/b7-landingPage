import { StylesMenuHamburguer } from "./styles";
import { useState, useEffect } from "react";

const MenuHamburguer = ({ menuAberto, toggleMenu }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      // Está no topo da página — mostrar o header sempre
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY) {
      // Scroll para baixo — esconder header
      setShowHeader(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll para cima — mostrar header
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <StylesMenuHamburguer
      className={showHeader ? "show" : "hide"}
      onClick={toggleMenu}
    >
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
    </StylesMenuHamburguer>
  );
};

export default MenuHamburguer;
