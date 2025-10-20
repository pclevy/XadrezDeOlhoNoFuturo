import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  onHeightChange?: (height: number) => void;
  onWidthChange?: (width: number) => void;
};

const Navbar = ({ onHeightChange, onWidthChange }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry: ResizeObserverEntry) => {
        const { height, width } = entry.contentRect;
        onHeightChange?.(height);
        onWidthChange?.(width);
        console.log("Navbar → altura:", height, "largura:", width);
      });
    });

    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, [onHeightChange, onWidthChange]);

  return (
    <>
      <nav
        ref={navRef}
        tabIndex={0}
        title="Menu: Barra de Opções"
        aria-label="Menu: Barra de Opções"
        style={{
          position: "fixed",
          top: 0,
          marginTop: 0,
          maxWidth: "94%",
          backgroundColor: "rgba(100,200,10,0.2)",
          padding: "3px 2px",
          display: "flex",
          justifyContent: "space-around",
          zIndex: 1000,
          alignItems: "center", // para alinhar o botão hamburger e links
        }}
      >
        {/* Botão hamburger só aparece em telas pequenas */}
        <button
          className="hamburger-btn"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          style={{
            display: "none", // padrão escondido - CSS media query vai mostrar
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            marginRight: "8px",
            color: "black", // cor do ícone (mesma do texto padrão)
          }}
        >
          ☰
        </button>

        {/* Menu normal */}
        <div
          className="menu-links"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Menu: Aba 'Início'"
              aria-label="Menu: Aba 'Início'"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </NavLink>{" "}
            &nbsp;{" "}
            <NavLink
              to="/atualidades"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Atualidades'"
              onClick={() => setMenuOpen(false)}
            >
              Atualidades
            </NavLink>{" "}
            &nbsp;{" "}
          </div>
          <div>
            <NavLink
              to="/eventosHistoricos"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Eventos Históricos'"
              onClick={() => setMenuOpen(false)}
            >
              Históricos
            </NavLink>{" "}
            &nbsp;{" "}
            <NavLink
              to="/ReliquiasXadrezUERJ"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Eventos UERJ'"
              onClick={() => setMenuOpen(false)}
            >
              EventosUERJ
            </NavLink>{" "}
            &nbsp;{" "}
          </div>
          <div>
            <NavLink
              to="/eventosFuturos"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Próximos Eventos'"
              onClick={() => setMenuOpen(false)}
            >
              Próximos Eventos
            </NavLink>{" "}
            &nbsp;{" "}
            <NavLink
              to="/Reliquias"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Relíquias'"
              onClick={() => setMenuOpen(false)}
            >
              Relíquias
            </NavLink>{" "}
            &nbsp;{" "}
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Sobre Nós'"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nós
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Menu hamburguer para telas pequenas, aparece só se menuOpen === true */}
      {menuOpen && (
        <nav
          aria-label="Menu móvel"
          style={{
            position: "fixed",
            top: "44px", // logo abaixo da navbar
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(100,200,10,0.2)",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
            maxWidth: "94%",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Menu: Aba 'Início'"
            aria-label="Menu: Aba 'Início'"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </NavLink>
          <NavLink
            to="/atualidades"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Atualidades'"
            onClick={() => setMenuOpen(false)}
          >
            Atualidades
          </NavLink>
          <NavLink
            to="/eventosHistoricos"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Eventos Históricos'"
            onClick={() => setMenuOpen(false)}
          >
            Históricos
          </NavLink>
          <NavLink
            to="/ReliquiasXadrezUERJ"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Eventos UERJ'"
            onClick={() => setMenuOpen(false)}
          >
            EventosUERJ
          </NavLink>
          <NavLink
            to="/eventosFuturos"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Próximos Eventos'"
            onClick={() => setMenuOpen(false)}
          >
            Próximos Eventos
          </NavLink>
          <NavLink
            to="/Reliquias"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Relíquias'"
            onClick={() => setMenuOpen(false)}
          >
            Relíquias
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            title="Aba 'Sobre Nós'"
            onClick={() => setMenuOpen(false)}
          >
            Sobre Nós
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navbar;
