import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Construo from "./components/Construo";
import Projetos from "./components/Projetos";
import Jornada from "./components/Jornada";
import Inspiracoes from "./components/Inspiracoes";
import ForaDoCodigo from "./components/ForaDoCodigo";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";

const App = () => (
  <>
    <Cabecalho />
    <main>
      <Hero />
      <Stack />
      <Construo />
      <Projetos />
      <Jornada />
      <Inspiracoes />
      <ForaDoCodigo />
      <Contato />
    </main>
    <Rodape />
  </>
);

export default App;
