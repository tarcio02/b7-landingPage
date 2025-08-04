import { StylesMenuHamburguer } from "./styles";
import { useState, useEffect } from "react";

const MenuHamburguer = ({ menuAberto, toggleMenu }) => {
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
