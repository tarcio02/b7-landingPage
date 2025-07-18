import { StylesMenuHamburguer } from "./styles";

const MenuHamburguer = ({ menuAberto, toggleMenu }) => {
  return (
    <StylesMenuHamburguer onClick={toggleMenu}>
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
      <div className={menuAberto ? "linha ativa" : "linha"}></div>
    </StylesMenuHamburguer>
  );
};

export default MenuHamburguer;
