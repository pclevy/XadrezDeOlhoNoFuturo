//EventosHistoricos.tsx
//2025/10/24 21:52

import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import FundoArte from "../../assets/chesgame.jpg";

//import { Link } from "react-router-dom"; //*** Receber Arquivo ***

import { eventos, type Evento } from "../../data/eventosHistoricos";

function EventosHistoricos() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const titRef = useRef<HTMLDivElement | null>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Detecta mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [eventoSelecionado, setEventoSelecionado] = useState<Evento>(
    eventos[0]
  );

  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleSelect = (evento: Evento) => {
    setEventoSelecionado(evento);
    setTimeout(() => {
      imgRef.current?.focus();
    }, 0);
  };

  // Observa dinamicamente a altura do Tit
  useEffect(() => {
    const updateTitHeight = () => {
      if (titRef.current) {
        const height = titRef.current.getBoundingClientRect().height;
        setTitHeight(height);
      }
    };

    updateTitHeight();

    const observer = new ResizeObserver(() => {
      updateTitHeight();
    });

    if (titRef.current) observer.observe(titRef.current);
    window.addEventListener("resize", updateTitHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTitHeight);
    };
  }, []);

  // Atualiza altura do container azul
  useEffect(() => {
    const updateHeight = () => {
      const alturaDisponivel =
        window.innerHeight - navbarHeight - titHeight - 10;
      setContainerHeight(alturaDisponivel);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [navbarHeight, titHeight]);

  return (
    <div style={{ marginTop: 0, padding: "0px 5px", justifyItems: "center" }}>
      <Navbar onHeightChange={setNavbarHeight} onWidthChange={setNavbarWidth} />

      <div
        ref={titRef}
        className="Tit"
        tabIndex={0} // agora entra no fluxo do Tab
        style={{
          position: "fixed",
          top: `${navbarHeight + 9}px`,
          width: isSmallScreen ? "95%" : `${navbarWidth}px`,
          left: isSmallScreen ? "50%" : "auto",
          transform: isSmallScreen ? "translateX(-50%)" : "none",
          border: "1px solid black",
          paddingTop: "0px",
          paddingBottom: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",
          backgroundColor: "#fff",
          zIndex: 999,
        }}
      >
        <h3 tabIndex={0}>Eventos Históricos</h3>
        <h5 tabIndex={0}>(em construção ... 24.10.2025, 21:52)</h5>
        <h4
          tabIndex={0}
          aria-label="Abaixo lista de Eventos, sendo que cada Evento ao receber foco, apresenta ao lado direito o cartaz correspondente"
        >
          Lista de Eventos:
        </h4>
      </div>

      <div
        className="azul"
        //tabIndex={0} // agora entra no fluxo do Tab
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 9}px`,
          width: isSmallScreen ? "95%" : `${navbarWidth}px`,
          left: isSmallScreen ? "50%" : "auto",
          transform: isSmallScreen ? "translateX(-50%)" : "none",
          overflowY: "auto",

          minWidth: `${navbarWidth}px`,
          maxHeight: `${containerHeight - 9}px`,
          border: "1px solid blue",
          backgroundColor: "#e9f9ff",
          //padding: "4px",
          marginTop: 1,

          paddingTop: "0px",
          paddingBottom: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",

          //display: "flex",
          //flexDirection: "column",
          //justifyContent: "space-between",

          backgroundImage: `url(${FundoArte})`, // 👈 aqui
          backgroundRepeat: "repeat", // evita repetição
          backgroundPosition: "center", // centraliza

          zIndex: 998,
        }}
      >
        {/* Conteúdo rolável */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            padding: "0px 4px",
            marginTop: "0px",

            flexGrow: 1,
            overflowY: "auto",
            gap: "4px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, marginTop: "4px" }}>
            {eventos.map((evento, index) => (
              <li
                key={evento.id}
                ref={(el) => {
                  listItemsRef.current[index] = el;
                }}
                onClick={() => handleSelect(evento)}
                onFocus={() => setEventoSelecionado(evento)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelect(evento);
                  }

                  if (["Tab", "ArrowDown", "ArrowUp"].includes(e.key)) {
                    e.preventDefault();
                    const firstIndex = 0;
                    const lastIndex = eventos.length - 1;

                    let targetIndex: number;

                    if (e.shiftKey || e.key === "ArrowUp") {
                      // sobe (Shift/ArrowUp)
                      if (index === firstIndex) {
                        // do primeiro -> imagem (circular)
                        imgRef.current?.focus();
                        return;
                      }
                      targetIndex = index - 1;
                    } else {
                      // desce (Tab/ArrowDown)
                      if (index === lastIndex) {
                        // do último -> imagem (circular)
                        imgRef.current?.focus();
                        return;
                      }
                      targetIndex = index + 1;
                    }

                    listItemsRef.current[targetIndex]?.focus();
                  }
                }}
                tabIndex={0}
                role="button"
                style={{
                  cursor: "pointer",
                  padding: "1px 2px",
                  marginTop: "2px",
                  marginRight: "0px",
                  marginBottom: "4px",
                  marginLeft: "0px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  backgroundColor:
                    eventoSelecionado.id === evento.id ? "#e0e0e0" : "#f9f9f9",
                  transition: "background-color 0.3s",
                  fontSize: "14px",
                }}
              >
                {evento.nome}
              </li>
            ))}
          </ul>

          <div>
            <Zoom>
              <img
                ref={imgRef}
                src={eventoSelecionado.imagem}
                alt={eventoSelecionado.descricaoCurta}
                title={eventoSelecionado.descricaoCurta}
                tabIndex={-1}
                style={{
                  maxWidth: "300px",
                  maxHeight: "400px",
                  borderRadius: "12px",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    imgRef.current?.click(); // simula clique → ativa zoom
                  }

                  if (["Tab", "ArrowDown", "ArrowUp"].includes(e.key)) {
                    e.preventDefault();
                    const currentIndex = eventos.findIndex(
                      (ev) => ev.id === eventoSelecionado.id
                    );
                    const targetIndex =
                      e.shiftKey || e.key === "ArrowUp"
                        ? (currentIndex - 1 + eventos.length) % eventos.length
                        : (currentIndex + 1) % eventos.length;

                    listItemsRef.current[targetIndex]?.focus();
                  }
                }}
              />
            </Zoom>{" "}
          </div>
        </div>
        {/* Rodapé fixo */}
        {/*
        <div
          style={{
            borderTop: "1px solid #ccc",
            marginTop: "4px",
            paddingTop: "4px",
            textAlign: "left",
            fontSize: "15px",
            color: "#333",
          }}
        >
          {/* <Link to="/formularios/formulario"> 
          Envie seu Torneio. (Em Breve!)
          {/* </Link>
        </div>
        */}
      </div>
    </div>
  );
}

export default EventosHistoricos;
