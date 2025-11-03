/* Navbar.tsx */
/* alterado em 03/11/2025, 14:16 */
/* Adicionado menu hambúrguer em 23/10/2025 */

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

        // Só envia a largura em telas grandes
        if (window.innerWidth > 768) {
          onWidthChange?.(width);
        }

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
          alignItems: "center",
        }}
      >
        {/* Botão hamburger só aparece em telas pequenas */}
        <button
          className="hamburger-btn"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          ☰ &nbsp; &nbsp; Xadrez de Olho no Futuro
        </button>

        {/* Menu desktop - esconde em telas pequenas */}
        <div className="menu-links-desktop">
          <div className="menu-group">
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
          <div className="menu-group">
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
          <div className="menu-group">
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
              to="/XDesafios"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Aba 'Desafio e Links'"
              onClick={() => setMenuOpen(false)}
            >
              Desafio
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
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <nav aria-label="Menu móvel" className="menu-mobile">
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
        </>
      )}
    </>
  );
};

export default Navbar;
