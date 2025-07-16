import { useRef } from "react";
import Header from "./components/layout/Header";
import Contato from "./pages/Contato";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import Footer from "./components/layout/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import FAQ from "./pages/Faqs";
import ChatFlutuante from "./components/ui/ChatFlutuante";
// import Chat from "./components/layout/Chat";
// import Card from "./components/designer/Card";

function App() {
  const contatoRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <Header
        scrollToContato={() =>
          contatoRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero
        scrollToContato={() =>
          contatoRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Marcas />
      <Contato ref={contatoRef} />
      <FAQ />
      <Footer />
      <ChatFlutuante />
    </>
  );
}

export default App;
