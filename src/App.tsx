// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Atualidades from "./pages/atualidades/Atualidades";
import EventosHistoricos from "./pages/eventosHistoricos/EventosHistoricos";
import EventosFuturos from "./pages/eventosFuturos/EventosFuturos";
import ReliquiasXadrezUERJ from "./pages/reliquiasXadrezUERJ/ReliquiasXadrezUERJ";
import Reliquias from "./pages/reliquias/Reliquias";
import Formulario from "./pages/formularios/Formulario"; // ✅ IMPORTADO

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atualidades" element={<Atualidades />} />
        <Route path="/eventosHistoricos" element={<EventosHistoricos />} />
        <Route path="/eventosFuturos" element={<EventosFuturos />} />
        <Route path="/ReliquiasXadrezUERJ" element={<ReliquiasXadrezUERJ />} />
        <Route path="/Reliquias" element={<Reliquias />} />
        <Route path="/about" element={<About />} />

        {/* ✅ NOVA ROTA ADICIONADA */}
        <Route path="/formularios/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
