import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import FundoArte from "../../assets/chesgame.jpg";

import { eventos, type Evento } from "../../data/eventosHistoricos";

function EventosHistoricos() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const titRef = useRef<HTMLDivElement | null>(null);

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
        tabIndex={0}
        style={{
          position: "fixed",
          top: `${navbarHeight + 9}px`,
          width: `${navbarWidth}px`,
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
        <h5 tabIndex={0}>(em construção ... 25.09.2025, 20:40)</h5>
        <h4
          tabIndex={0}
          aria-label="Abaixo lista de Eventos, sendo que cada Evento ao receber foco, apresenta ao lado direito o cartaz correspondente"
        >
          Lista de Eventos:
        </h4>
      </div>

      <div
        className="azul"
        tabIndex={0}
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 9}px`,
          minWidth: `${navbarWidth}px`,
          overflowY: "auto",
          maxHeight: `${containerHeight - 9}px`,
          border: "1px solid blue",
          backgroundColor: "#e9f9ff",
          marginTop: 1,
          paddingTop: "0px",
          paddingBottom: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",

          backgroundImage: `url(${FundoArte})`, // 👈 aqui
          backgroundRepeat: "repeat", // evita repetição
          backgroundPosition: "center", // centraliza

          zIndex: 998,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            padding: "0px 4px",
            marginTop: "0px",
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
                  marginTop: "0px",
                  marginBottom: "2px",
                  border: "1px solid gray",
                  borderRadius: "8px",
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
                title={eventoSelecionado.title}
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
      </div>
    </div>
  );
}

export default EventosHistoricos;
