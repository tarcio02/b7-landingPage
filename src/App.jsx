import { useRef } from "react";
import Header from "./components/layout/Header";
import Contato from "./pages/Contato";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import Footer from "./components/layout/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import FAQ from "./pages/Faqs";
import ChatFlutuante from "./components/ui/ChatFlutuante";

function App() {
  const contatoRef = useRef(null);
  const formularioRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <Header formularioRef={formularioRef} />
      <Hero formularioRef={formularioRef} />
      <Marcas />
      <Contato formularioRef={formularioRef} ref={contatoRef} />
      <FAQ />
      <Footer />
      <ChatFlutuante />
    </>
  );
}

export default App;
