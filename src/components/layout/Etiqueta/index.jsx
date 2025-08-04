import { useEffect } from "react";
import { StylesEtiqueta } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

const Etiqueta = ({ texto, icone }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      offset: 50, // Distância do scroll para iniciar a animação
      easing: "ease-in-out", // Tipo de transição
      once: false, // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <StylesEtiqueta data-aos="fade-right">
      {icone ? <img src={icone} alt="icone" /> : null}
      {texto}{" "}
    </StylesEtiqueta>
  );
};

export default Etiqueta;
