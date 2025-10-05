import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import PlanilhaSimultanea1997 from "../../assets/SimultaneaDarcy1997_MarceloSBacha.jpg";
import Interclubes2R1999_MarceloSBacha from "../../assets/Interclubes2R1999_MarceloSBacha.jpg";
import Interclubes3R1999_MarceloSBacha from "../../assets/Interclubes3R1999_MarceloSBacha.jpg";
import Interclubes4R1999_MarceloSBacha from "../../assets/Interclubes4R1999_MarceloSBacha.jpg";

function Reliquias() {
  //const navigation = useNavigate();

  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const titRef = useRef<HTMLDivElement>(null);

  // Observa dinamicamente a altura do Tit
  useEffect(() => {
    const updateTitHeight = () => {
      if (titRef.current) {
        const height = titRef.current.getBoundingClientRect().height;
        setTitHeight(height);
      }
    };

    updateTitHeight(); // inicial

    const observer = new ResizeObserver(() => {
      updateTitHeight();
    });

    if (titRef.current) {
      observer.observe(titRef.current);
    }

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

  console.log("Navbar:", navbarHeight, "Tit:", titHeight);

  const imagens = [
    {
      id: 1,
      src: PlanilhaSimultanea1997,
      alt: "Simultânea do GM Darcy Lima (Uerj/1997) GM Darcy Lima X Marcelo Spíndola Bacha (Uerj/1997)",
      legenda:
        "Simultânea do GM Darcy Lima (Uerj/1997)\nGM Darcy Lima X Marcelo Spíndola Bacha",
      title:
        "Simultânea do GM Darcy Lima, (Uerj/1997), GM Darcy Lima X Marcelo Spíndola Bacha.",
    },
    {
      id: 2,
      src: Interclubes2R1999_MarceloSBacha,
      alt: "Interclubes-RJ, 1999\nEquipe ASUERJ, 2ª Rodada\nMarcelo Spíndola Bacha",
      legenda:
        "Interclubes-RJ, 1999\nEquipe ASUERJ, 2ª Rodada\nMarcelo Spíndola Bacha",
      title:
        "Interclubes-RJ, 1999, Equipe ASUERJ, 2ª Rodada, Marcelo Spíndola Bacha.",
    },
    {
      id: 3,
      src: Interclubes3R1999_MarceloSBacha,
      alt: "Interclubes-RJ, 1999\nEquipe ASUERJ, 3ª Rodada\nMarcelo Spíndola Bacha",
      legenda:
        "Interclubes-RJ, 1999\nEquipe ASUERJ, 3ª Rodada\nMarcelo Spíndola Bacha",
      title:
        "Interclubes-RJ, 1999, Equipe ASUERJ, 3ª Rodada, Marcelo Spíndola Bacha.",
    },
    {
      id: 4,
      src: Interclubes4R1999_MarceloSBacha,
      alt: "Interclubes-RJ, 1999\nEquipe ASUERJ, 4ª Rodada\nMarcelo Spíndola Bacha",
      legenda:
        "Interclubes-RJ, 1999\nEquipe ASUERJ, 4ª Rodada\nMarcelo Spíndola Bacha",
      title:
        "Interclubes-RJ, 1999, Equipe ASUERJ, 4ª Rodada, Marcelo Spíndola Bacha.",
    },
  ];
  return (
    <div style={{ marginTop: 0, padding: "0px 5px", justifyItems: "center" }}>
      {/* Navbar fixa no topo */}
      <Navbar onHeightChange={setNavbarHeight} onWidthChange={setNavbarWidth} />

      {/* Tit logo abaixo da Navbar */}
      <div
        ref={titRef}
        className="Tit"
        tabIndex={0} // agora entra no fluxo do Tab
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
        <h3>Documentos Históricos do XadrezUERJ</h3>
        <h5>(em construção ... 21/09/2025, 14:37)</h5>
      </div>

      {/* Azul logo abaixo do Tit */}
      <div
        className="azul"
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 9}px`,
          minWidth: `${navbarWidth}px`,
          overflowY: "auto",
          maxHeight: `${containerHeight - 9}px`,
          border: "1px solid blue",
          backgroundColor: "#e9f9ff",
          marginTop: 1,
          paddingTop: "2px",
          paddingBottom: "5px",
          paddingLeft: "1px",
          paddingRight: "1px",
          zIndex: 998,

          display: "flex", // coloca os itens em linha
          flexWrap: "wrap", // permite quebra de linha
          justifyContent: "center", // centraliza
          gap: "8px", // espaçamento entre os itens
        }}
      >
        {imagens.map((imagem) => (
          <div
            key={imagem.id}
            style={{
              textAlign: "center",
              display: "block", // garante imagem em cima, legenda embaixo
              minWidth: "150px", // ou navbarWidth se quiser
              maxWidth: `${navbarWidth}px`,
            }}
          >
            <Zoom>
              <img
                src={imagem.src}
                alt={imagem.alt}
                title={imagem.title}
                loading="lazy"
                style={{
                  width: "150px",
                  height: "auto",
                  cursor: "zoom-in",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  marginBottom: "4px",
                }}
              />
            </Zoom>
            <span
              style={{
                display: "block", // legenda sempre abaixo
                marginTop: "4px",
                fontSize: "0.9rem",
                maxWidth: "150px",
                whiteSpace: "pre-line", // mantém \n
              }}
            >
              {imagem.legenda}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reliquias;
