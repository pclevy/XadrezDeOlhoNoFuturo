// App.tsx
/* alterado em 03/11/2025, 14:16 */
/* Adicionado menu hambúrguer em 23/10/2025 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Atualidades from "./pages/atualidades/Atualidades";
import EventosHistoricos from "./pages/eventosHistoricos/EventosHistoricos";
import EventosFuturos from "./pages/eventosFuturos/EventosFuturos";
import ReliquiasXadrezUERJ from "./pages/reliquiasXadrezUERJ/ReliquiasXadrezUERJ";
import Reliquias from "./pages/reliquias/Reliquias";
import XDesafios from "./pages/XDesafios/XDesafios";
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
        <Route path="/XDesafios" element={<XDesafios />} />
      </Routes>
    </Router>
  );
}

export default App;
