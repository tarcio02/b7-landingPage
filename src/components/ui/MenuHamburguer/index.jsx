import { StylesMenuHamburguer } from "./styles";
import { useState, useEffect } from "react";

const MenuHamburguer = ({ menuAberto, toggleMenu }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      // No topo, mostra o header
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 72) {
      // Scroll para baixo E passou de 72px
      setShowHeader(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll para cima
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

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
