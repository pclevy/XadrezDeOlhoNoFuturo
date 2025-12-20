// Atualidades.tsx ***
// 2025/12/16, 02:38 ***
import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import FundoArte from "../../assets/chesgame.jpg";

import MeckingLevy from "../../assets/Mecking_Levy.jpg";
import LeandroQueiros from "../../assets/LeandroQueiros.jpg";
import AntonioFrancisco from "../../assets/AntonioFrancisco.jpg";
import Euzebio from "../../assets/Euzebio.jpg";

import I_TorneioXadrezOlhoFuturo from "../../assets/XadrezOlhoFuturo/FolderPetropolis251129.jpg";
//import I_XadrezOlhoFuturo from "images/FolderPetropolis251129.jpg";

import FotoEscada from "../../assets/XadrezOlhoFuturo/FotoEscada_2025_11_29.jpeg";
import Campeao_VitorMartins_2025_11_29 from "../../assets/XadrezOlhoFuturo/Campeao_VitorMartins_2025_11_29.jpeg";
import CampeaFem_SophiaDomingos_2025_11_29 from "../../assets/XadrezOlhoFuturo/CampeaFem_SophiaDomingos_2025_11_29.jpeg";
import Equipe_2025_11_29 from "../../assets/XadrezOlhoFuturo/Equipe_2025_11_29.jpeg";

import LuizOtavio_2025_11_29 from "../../assets/XadrezOlhoFuturo/LuizOtavio_2025_11_29.jpeg";
import ArielyDias_2025_11_29 from "../../assets/XadrezOlhoFuturo/ArielyDias_2025_11_29.jpeg";
import BenjaminVieira_2025_11_29 from "../../assets/XadrezOlhoFuturo/BenjaminVieira_2025_11_29.jpeg";
import HelenaPeruzo_2025_11_29 from "../../assets/XadrezOlhoFuturo/HelenaPeruzo_2025_11_29.jpeg";
import LauraPeruzo_2025_11_29 from "../../assets/XadrezOlhoFuturo/LauraPeruzo_2025_11_29.jpeg";
import InacioIglesias_2025_11_29 from "../../assets/XadrezOlhoFuturo/InacioIglesias_2025_11_29.jpeg";
import JoaoCoelho_2025_11_29 from "../../assets/XadrezOlhoFuturo/JoaoCoelho_2025_11_29.jpeg";
import JoaoSantana_2025_11_29 from "../../assets/XadrezOlhoFuturo/JoaoSantana_2025_11_29.jpeg";
import LuisFreitas_2025_11_29 from "../../assets/XadrezOlhoFuturo/LuisFreitas_2025_11_29.jpeg";
import MatheusBarreto_2025_11_29 from "../../assets/XadrezOlhoFuturo/MatheusBarreto_2025_11_29.jpeg";
import MiguelAsaph_2025_11_29 from "../../assets/XadrezOlhoFuturo/MiguelAsaph_2025_11_29.jpeg";
import MiguelStupen_2025_11_29 from "../../assets/XadrezOlhoFuturo/MiguelStupen_2025_11_29.jpeg";
import SofiaScolarick_2025_11_29 from "../../assets/XadrezOlhoFuturo/SofiaScolarick_2025_11_29.jpeg";
import TiagoSantos_2025_11_29 from "../../assets/XadrezOlhoFuturo/TiagoSantos_2025_11_29.jpeg";

import SorteioCanecaIFHT from "../../assets/XadrezOlhoFuturo/SorteioCanecaIFHT_2025_11_29.mp4";

import CopaBrasil2025_2 from "../../assets/FBXDV/CopaBrasilSudeste2025_2.jpg";
import CopaBrasil2025_Enzo from "../../assets/FBXDV/Enzo_250817.jpg";
import CopaBrasil2025Videos_1 from "../../assets/FBXDV/FBXDV_1.mp4";
import MuriloXLeandro from "../../assets/FBXDV/MuriloXLeandro.mp4";

// Modal de vídeo (igual ao anterior)
function VideoModal({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "12px",
      }}
    >
      <video
        src={src}
        title={title}
        controls
        autoPlay
        style={{
          maxWidth: "90%",
          maxHeight: "80%",
          borderRadius: "8px",
          background: "#000",
        }}
      />
    </div>
  );
}

function Atualidades() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const titRef = useRef<HTMLDivElement>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Detecta mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // estilos reutilizáveis
  const FIGURE_STYLE: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "auto", // - Alterado: 250px para 'auto' - Levy 2025/12/09
    margin: "0 2px 2px 0", // margem horizontal fixa (20px) - Alterado Levy 2025/12/09
    cursor: "default",
  };

  const FIGCAPTION_STYLE: React.CSSProperties = {
    marginTop: "1px",
    fontSize: "0.9em",
    fontWeight: "bold",
    // 2 = preserva quebras via \n; 3 = permite quebra automática de palavras se necessário
    whiteSpace: "pre-line",
    overflowWrap: "break-word",
    // wordBreak setado com 'any' para evitar problema de tipagem TS, se preferir pode usar 'break-all'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wordBreak: "break-word",
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
        <h3 tabIndex={0}>Atualidades</h3>
        <h5 tabIndex={0}>(em construção ... 16/12/2025, 02:38)</h5>
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
          maxHeight: `${containerHeight - 5}px`,
          border: "1px solid blue",
          backgroundColor: "#e9f9ff",
          //padding: "10px",
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
        <h3 tabIndex={0}>I Torneio Xadrez de Olho no Futuro</h3>
        <h5 tabIndex={0}>
          29 de novembro de 2025 - DAU/Esdi/UERJ - Petrópolis / RJ
        </h5>

        <h4>Fotos e Vídeos:</h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start", // alinhamento vertical pelo topo
            alignContent: "flex-start", // múltiplas linhas sobem para o topo
            justifyContent: "center", // <<< centraliza horizontalmente
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
          }}
        >
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={I_TorneioXadrezOlhoFuturo}
                className="video-class"
                alt="I Torneio 'Xadrez de Olho no Futuro'"
                title="I Torneio 'Xadrez de Olho no Futuro'"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Projet Esfinge 2025\nUERJ/Petrópolis"}
            </figcaption>
          </figure>
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={FotoEscada}
                className="video-class"
                alt="Foto da Escada, 29-11-2025, DAU/Esdi/UERJ"
                title="Foto da Escada, 29-11-2025, DAU/Esdi/UERJ"
                //style={{ paddingLeft: "9px", paddingRight: "9px" }}
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>{"Foto da Escada"}</figcaption>
          </figure>
          {"  "}
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={Campeao_VitorMartins_2025_11_29}
                className="video-class"
                alt="Campeão, 29-11-2025, DAU/Esdi/UERJ"
                title="Campeão, 29-11-2025, DAU/Esdi/UERJ"
                //style={{ paddingLeft: "9px", paddingRight: "9px" }}
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Campeão: Vitor Martins"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={CampeaFem_SophiaDomingos_2025_11_29}
                className="video-class"
                alt="Campeã Feminina, 29-11-2025, DAU/Esdi/UERJ"
                title="Campeã Feminina, 29-11-2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Campeã Feminina:\nSophia Domingos"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={Equipe_2025_11_29}
                className="video-class"
                alt="Foto da Equipe Esfinge_29_11_2025, DAU/Esdi/UERJ"
                title="Foto da Equipe Esfinge_29_11_2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto da Equipe Esfinge"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={LuizOtavio_2025_11_29}
                className="video-class"
                alt="Foto de Luiz Otávio, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Luiz Otávio, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Luiz Otávio!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={HelenaPeruzo_2025_11_29}
                className="video-class"
                alt="Foto de Helena Peruzo, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Helena Peruzo, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Helena Peruzo!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={LauraPeruzo_2025_11_29}
                className="video-class"
                alt="Foto de Laura Peruzo, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Laura Peruzo, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Laura Peruzo!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={InacioIglesias_2025_11_29}
                className="video-class"
                alt="Foto de Inacio Iglesias, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Inacio Iglesias, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Inacio Iglesias!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={JoaoCoelho_2025_11_29}
                className="video-class"
                alt="Foto de João Coelho, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de João Coelho, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de João Coelho!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={JoaoSantana_2025_11_29}
                className="video-class"
                alt="Foto de João Santana, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de João Santana, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de João Santana!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={LuisFreitas_2025_11_29}
                className="video-class"
                alt="Foto de Luis Freitas, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Luis Freitas, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Luis Freitas!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={MatheusBarreto_2025_11_29}
                className="video-class"
                alt="Foto de Matheus Barreto, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Matheus Barreto, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Matheus Barreto!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={MiguelAsaph_2025_11_29}
                className="video-class"
                alt="Foto de Miguel Asaph, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Miguel Asaph, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Miguel Asaph!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={MiguelStupen_2025_11_29}
                className="video-class"
                alt="Foto de Miguel Stupen, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Miguel Stupen, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Miguel Stupen!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={SofiaScolarick_2025_11_29}
                className="video-class"
                alt="Foto de Sofia Scolarick, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Sofia Scolarick, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Sofia Scolarick!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={ArielyDias_2025_11_29}
                className="video-class"
                alt="Foto de Ariely Dias, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Ariely Dias, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Ariely Dias!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={BenjaminVieira_2025_11_29}
                className="video-class"
                alt="Foto de Benjamin Vieira, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Benjamin Vieira, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Benjamin Vieira!"}
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={TiagoSantos_2025_11_29}
                className="video-class"
                alt="Foto de Tiago Santos, 29/11/2025, DAU/Esdi/UERJ"
                title="Foto de Tiago Santos, 29/11/2025, DAU/Esdi/UERJ"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Foto de Tiago Santos!"}
            </figcaption>
          </figure>

          <figure
            style={{ ...FIGURE_STYLE, cursor: "pointer", maxWidth: "320px" }}
            onClick={() => setVideoSrc(SorteioCanecaIFHT)}
          >
            <video
              tabIndex={0}
              src={SorteioCanecaIFHT}
              className="video-class"
              title="Vídeo do Sorteio da Caneca IFHT, entre a Equipe de Organização"
              aria-label="Vídeo do Sorteio da Caneca IFHT, entre a Equipe de Organização"
              controls
              //width="135px"
              //width="auto"
              height="auto"
              style={{
                border: "0px solid blue",
              }}
            />
            <figcaption style={FIGCAPTION_STYLE}>
              {"Sorteio da Caneca IFHT"}
            </figcaption>
          </figure>
        </div>

        <hr
          style={{
            borderTop: "2px solid black",
            padding: 0,
            marginTop: 9,
            marginBottom: 2,
          }}
        />

        <h3 tabIndex={0}>FBXDV - Copa Brasil 2025</h3>
        <h5 tabIndex={0}>
          15 a 17 de agosto de 2025 - Hotel Victory Business - Juiz de Fora / MG
        </h5>

        <h4>Fotos e Vídeos:</h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start", // alinhamento vertical pelo topo
            alignContent: "flex-start", // múltiplas linhas sobem para o topo
            justifyContent: "center", // <<< centraliza horizontalmente
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
          }}
        >
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={CopaBrasil2025_2}
                className="video-class"
                alt="FBXDV-Copa Brasil, Sudeste, 2025"
                title="FBXDV-Copa Brasil, Sudeste, 2025"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Copa Brasil 2025\nEtapa Sudeste"}
            </figcaption>
          </figure>
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                tabIndex={0}
                src={CopaBrasil2025_Enzo}
                className="video-class"
                alt="FBXDV-Copa Brasil, Sudeste, 2025:&#10;Enzo Maia Senra Farias"
                title="FBXDV-Copa Brasil, Sudeste, 2025:&#10;Enzo Maia Senra Farias"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              {"Enzo Maia Senra Farias"}
            </figcaption>
          </figure>
          <figure
            style={{ ...FIGURE_STYLE, cursor: "pointer", maxWidth: "320px" }}
            onClick={() => setVideoSrc(CopaBrasil2025Videos_1)}
          >
            <video
              tabIndex={0}
              src={CopaBrasil2025Videos_1}
              className="video-class"
              title="FBXDV-Copa Brasil, Sudeste, 2025:&#10;Rafael Maurício 1x0 Jeferson Teles"
              aria-label="FBXDV-Copa Brasil, Sudeste, 2025:&#10;Rafael Maurício 1x0 Jeferson Teles"
              controls
              //width="135px"
              //width="auto"
              height="auto"
              style={{ border: "0px solid blue" }}
            />
            {/* Exemplo usando \n — funcionará com whiteSpace: 'pre-line' */}
            <figcaption style={FIGCAPTION_STYLE}>
              {"Rafael Maurício\n1x0\nJeferson Teles"}
            </figcaption>
          </figure>
          <figure
            style={{ ...FIGURE_STYLE, cursor: "pointer", maxWidth: "320px" }}
            onClick={() => setVideoSrc(MuriloXLeandro)}
          >
            <video
              tabIndex={0}
              src={MuriloXLeandro}
              className="video-class"
              title="Murilo Ribeiro Costa 1x0 Leandro de Queiros Vieira"
              aria-label="Murilo Ribeiro Costa, 1x0, Leandro de Queiros Vieira"
              controls
              //width="135px"
              //width="auto"
              height="auto"
              style={{
                border: "0px solid blue",
              }}
            />
            <figcaption style={FIGCAPTION_STYLE}>
              {"Murilo Ribeiro Costa\n1x0\nLeandro Queiros"}
            </figcaption>
          </figure>
        </div>

        <hr
          style={{
            borderTop: "2px solid black",
            padding: 0,
            marginTop: 9,
            marginBottom: 2,
          }}
        />

        <h3>4º Festival de Xadrez do Sider Shopping</h3>
        <h4>
          18 a 20 de julho de 2025 - Volta Redonda/RJ
          <br />
          (com a participação do <b>GM Henrique Mecking</b>)
        </h4>
        <h5>Fotos:</h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start", // alinhamento vertical pelo topo
            alignContent: "flex-start", // múltiplas linhas sobem para o topo
            justifyContent: "center", // <<< centraliza horizontalmente
          }}
        >
          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                src={MeckingLevy}
                alt="GM Mequinho e IA Paulo Levy"
                title="GM Mequinho e IA Paulo Levy"
                className="video-class"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              GM Mecking e IA Paulo Levy
            </figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                src={LeandroQueiros}
                alt="Leandro Queiros"
                title="Leandro Queiros"
                className="video-class"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>Leandro Queiros</figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                src={AntonioFrancisco}
                alt="Antonio Francisco"
                title="Antonio Francisco"
                className="video-class"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>Antonio Francisco</figcaption>
          </figure>

          <figure style={FIGURE_STYLE}>
            <Zoom>
              <img
                src={Euzebio}
                alt="Euzebio, o Herói"
                title="Euzebio, o Herói"
                className="video-class"
              />
            </Zoom>
            <figcaption style={FIGCAPTION_STYLE}>
              Euzebio N. Alves – O Herói!
            </figcaption>
          </figure>
        </div>
      </div>

      {videoSrc && (
        <VideoModal
          src={videoSrc}
          title="Partida de Xadrez"
          onClose={() => setVideoSrc(null)}
        />
      )}
    </div>
  );
}

export default Atualidades;
