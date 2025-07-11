import CardContato from "./components/layout/CardContato";
import Formulario from "./components/layout/Formulário";
import Header from "./components/layout/Header";
import Contato from "./pages/Contato";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import { GlobalStyles } from "./styles/GlobalStyles";
import prancheta from "./assets/icons/prancheta.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Marcas />
      <Contato />
    </>
  );
}

export default App;
