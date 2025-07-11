import Formulario from "./components/layout/Formulário";
import Header from "./components/layout/Header";
import Hero from "./pages/Hero";
import Marcas from "./pages/Marcas";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Marcas />
      <Formulario />
    </>
  );
}

export default App;
