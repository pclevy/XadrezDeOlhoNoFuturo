import { useRef, useEffect } from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// alterado em 27/09/2025, 18:26

type NavbarProps = {
  onHeightChange?: (height: number) => void;
  onWidthChange?: (width: number) => void;
};

const Navbar = ({ onHeightChange, onWidthChange }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);

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
        padding: "5px 6px",
        display: "flex",
        justifyContent: "space-around",
        zIndex: 1000,
      }}
    >
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Menu: Aba 'Início'"
          aria-label="Menu: Aba 'Início'"
        >
          Início
        </NavLink>{" "}
        &nbsp;{" "}
        <NavLink
          to="/atualidades"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Aba 'Atualidades'"
          //aria-label="Menu aria label: Aba 'Atualidades'"
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
          //aria-label="Menu: Aba 'Históricos'"
        >
          Históricos
        </NavLink>{" "}
        &nbsp;{" "}
        <NavLink
          to="/ReliquiasXadrezUERJ"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Aba 'Eventos UERJ'"
          //aria-label="Menu: Aba 'EventosUERJ'"
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
          //aria-label="Menu: Aba 'Próximos Eventos'"
        >
          Próximos Eventos
        </NavLink>{" "}
        &nbsp;{" "}
        <NavLink
          to="/Reliquias"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Aba 'Relíquias'"
          //aria-label="Menu: Aba 'Relíquias'"
        >
          Relíquias
        </NavLink>{" "}
        &nbsp;{" "}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Aba 'Sobre Nós'"
          //aria-label="Menu: Aba 'Sobre'"
        >
          Sobre Nós
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
