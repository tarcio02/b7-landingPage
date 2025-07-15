import { useRef } from "react";
import Header from "./components/layout/Header";
import Contato from "./pages/Contato";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import Footer from "./components/layout/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import Card from "./components/designer/Card";
import FAQ from "./pages/Faqs";

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
      {/* <Card /> */}
      <Marcas />
      <Contato ref={contatoRef} />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
