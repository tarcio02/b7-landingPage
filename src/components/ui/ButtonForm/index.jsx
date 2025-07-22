import { StylesButtonForm } from "./styles";

const ButtonForm = ({ texto, formularioRef, fecharMenu }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (formularioRef?.current) {
      formularioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    if (typeof fecharMenu === "function") {
      fecharMenu();
    }
  };

  return <StylesButtonForm onClick={handleClick}>{texto}</StylesButtonForm>;
};

export default ButtonForm;
