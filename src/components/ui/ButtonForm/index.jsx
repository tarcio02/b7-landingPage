import { StylesButtonGradiente } from "../../../styles/Components/ButtonGradiente";
import calendar from "../../../assets/icons/calendar.png";

const ButtonForm = ({ texto, formularioRef, fecharMenu }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (formularioRef?.current) {
      formularioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (typeof fecharMenu === "function") {
      fecharMenu();
    }
  };

  return (
    <StylesButtonGradiente onClick={handleClick}>
      <img src={calendar} alt="formulário" />
      {texto}
    </StylesButtonGradiente>
  );
};

export default ButtonForm;
