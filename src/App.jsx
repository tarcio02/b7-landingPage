import { useRef, useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/layout/Header";
import MenuLateral from ".//components/layout/MenuLateral";
import Inicio from "./pages/Inicio";
import Cliente from "./pages/Clientes";
import Metodologia from "./pages/Metodologia";
import Tutorial from "./pages/Tutorial";
import FormContato from "./pages/FormContato";
import Feedback from "./pages/Feedback";
import FAQ from "./pages/Faqs";
import Footer from "./components/layout/Footer";
import ChatFlutuante from "./components/ui/ChatFlutuante";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const formularioRef = useRef(null);
  const inicioRef = useRef(null);
  const metodologiaRef = useRef(null);
  const feedbackRef = useRef(null);
  const faqRef = useRef(null);

  const toggleMenu = () => setMenuAberto((prev) => !prev);

  return (
    <>
      <GlobalStyles />
      <Header
        toggleMenu={toggleMenu}
        menuAberto={menuAberto}
        formularioRef={formularioRef}
        inicioRef={inicioRef}
        metodologiaRef={metodologiaRef}
        feedbackRef={feedbackRef}
        faqRef={faqRef}
      />
      <MenuLateral
        aberto={menuAberto}
        fechar={() => setMenuAberto(false)}
        formularioRef={formularioRef}
        inicioRef={inicioRef}
        metodologiaRef={metodologiaRef}
        feedbackRef={feedbackRef}
        faqRef={faqRef}
      />
      <Inicio ref={inicioRef} formularioRef={formularioRef} />
      <Cliente />
      <Metodologia ref={metodologiaRef} />
      <Tutorial />
      <FormContato ref={formularioRef} />
      <Feedback ref={feedbackRef} />
      <FAQ ref={faqRef} />
      <Footer />
      <ChatFlutuante />
    </>
  );
}

export default App;
