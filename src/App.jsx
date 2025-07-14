import Header from "./components/layout/Header";
import Contato from "./pages/Contato";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import Footer from "./components/layout/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import Card from "./components/designer/Card";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Card />
      <Hero />
      <Marcas />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
