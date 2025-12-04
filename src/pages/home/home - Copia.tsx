// home.tsx
// Alterado em: 13/11/2025, 21:25

//import xadrezOlho from "../../assets/xadrezOlho.png";
import xadrezOlho from "../../assets/xadrezOlho.svg";
import cavaloPretoEsqLogo from "../../assets/cavalo-preto-EsqLogo.png";
import acessibilidadeUniversalLogo from "../../assets/acessibilidade-universal-Logo.jpg";
import deficienciaVisualLogo from "../../assets/deficiencia-visual-Logo.png";
import cordaoGirasoisLogo from "../../assets/cordao-girasois-Logo.png";
import SimboloDeficienciaMobilidadeLogo from "../../assets/Simbolo-Deficiencia-Mobilidade.png";
import cavaloPretoDirLogo from "../../assets/cavalo-preto-DirLogo.png";
import peaoAvancado from "../../assets/peaoAvancado.png";
import Esfinge from "../../assets/esfinge.png";
import ImagemZoomHP from "../eventosHistoricos/ImageZoomHP";

import FundoArte from "../../assets/chesgame.jpg";

//import novembroAzul from "../../assets/novembroAzul.png";
import dezembroLaranja from "../../assets/EuApoioDezembroLaranja.jpg";

import "./home.css";

import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const titRef = useRef<HTMLDivElement>(null);

  const [zoomLaranja, setZoomLaranja] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  // Detecta mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Carrega e ativa o anúncio do Google AdSense
  useEffect(() => {
    const scriptId = "adsbygoogle-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.setAttribute("data-ad-client", "ca-pub-7174891341008290");
      script.crossOrigin = "anonymous";

      script.onload = () => {
        try {
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
        } catch (e) {
          console.error("Erro ao carregar anúncio (onload):", e);
        }
      };

      document.head.appendChild(script);
    } else {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Erro ao carregar anúncio:", e);
      }
    }
  }, []);

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
        <h3>Nossos Símbolos, nossa História</h3>
        <h5>
          (Construindo o Futuro ... Xadrez de Olho no Futuro: 04/12/2025, 12:34)
        </h5>

        {/* -- Inicia codigo Contador -- */}
        {/*
        <div style={{ display: "none" }}>
          <a href="https://megacontador.com.br/">
            <img
              src="https://megacontador.com.br/img-zwsGGCeKiRHCA3LS-57.gif"
              alt="Contador de visitas"
            />
          </a>
        </div>
        */}
        {/* -- Fim do codigo Contador -- */}
        {/* */}
      </div>

      {/* Azul logo abaixo do Tit */}
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
        {/* -------- esfinge x laço ---------------------------------- */}
        <div
          style={{
            position: "absolute",
            margin: "0px",
            top: "0px",
            left: "0px",
            padding: 0,

            alignItems: "left",
            //gap: "6px",

            //border: "1px solid red",
            //lineHeight: 0, // elimina espaçamento interno invisível
            display: "inline-block", // garante que a div tenha o tamanho exato da imagem
          }}
        >
          {/*<span className="tooltip-anchor" style={{ zIndex: 1 }}> */}

          <span className="tooltip-anchor" style={{ zIndex: 1 }}>
            <span>
              <img
                src={dezembroLaranja}
                className="logo-campanhaMensal"
                tabIndex={0}
                alt="Ícone dezembroLaranja"
                title="Dezembro Laranja - Campanha contra o Câncer de Pele!"
                onClick={() => setZoomLaranja(!zoomLaranja)}
                style={{
                  width: "auto",
                  cursor: "pointer",
                  backgroundColor: "transparent",

                  /* 🔥 animação suave */
                  transition: "transform 0.35s ease",

                  /* 🔥 zoom sem afetar tooltip, mantendo posição */
                  transform: zoomLaranja ? "scale(4.0)" : "scale(1)",

                  transformOrigin: "top left", // Mantém left=1, top=1 ao ampliar

                  position: "relative", // Mantém tooltip no mesmo fluxo
                  left: "8px",
                  top: "8px",
                }}

                /*
                style={{
                  width: "auto",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "transform 0.3s ease",
                  transform: zoomLaranja ? "scale(2.0)" : "scale(1)",
                  zIndex: 9999,
                  position: zoomLaranja ? "relative" : "static",
                }}

 */
              />

              <div className="tooltip at_side" style={{ height: "auto" }}>
                <div className="tooltip-content">
                  "Dezembro Laranja" - Campanha contra o Câncer de Pele!
                </div>
              </div>
            </span>
          </span>

          <span tabIndex={0}> {/* // agora entra no fluxo do Tab> */}</span>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            //gap: "6px",
          }}
        ></div>
        {/* ---------------------------------------------- */}

        <div>
          <img
            src={peaoAvancado}
            className="logo-olho"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Peão Avançado"
            title="Peão Avançado"
          />
          <img
            src={xadrezOlho}
            className="logo-olho"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Xadrez de Olho no Futuro"
            title="Xadrez de Olho no Futuro"
          />
        </div>
        <div>
          <img
            src={cavaloPretoEsqLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Cavalo Preto Esquerdo"
            title="Cavalo Preto Esquerdo"
          />
          <img
            src={acessibilidadeUniversalLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Símbolo Universal de Acessibilidade"
            title="Símbolo Universal de Acessibilidade"
          />
          <img
            src={deficienciaVisualLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Deficiencia Visual"
            title="Deficiencia Visual"
          />
          <img
            src={SimboloDeficienciaMobilidadeLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="SimboloDeficienciaMobilidade"
            title="SimboloDeficienciaMobilidade"
          />
          <img
            src={cordaoGirasoisLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Colar de Girasóis"
            title="Colar de Girasóis"
          />
          <img
            src={cavaloPretoDirLogo}
            className="logo-simbolo-pcd"
            tabIndex={0} // agora entra no fluxo do Tab
            alt="Cavalo Preto Direito"
            title="Cavalo Preto Direito"
          />
        </div>
        <h3
          tabIndex={0} // agora entra no fluxo do Tab
        >
          Xadrez de Olho no Futuro
        </h3>

        <h4
          tabIndex={0} // agora entra no fluxo do Tab
        >
          Futuro da Juventude, da Acessibilidade, e do Planeta
        </h4>

        <h5
          tabIndex={0} // agora entra no fluxo do Tab
        >
          E vem aí a nova versão do antigo <i>site </i>
          <span className="tooltip-anchor">
            <span>"Xadrez UERJ"</span>
            <div className="tooltip right">
              <div className="tooltip-content">
                XadrezUERJ esteve hospedado na UERJ, em 1997-2004 e 2010-2013!
              </div>
            </div>
          </span>
          , aguarde .....
        </h5>
        <h4>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span className="tooltip-anchor">
              <span>
                <img
                  src={Esfinge}
                  className="logo-esfinge"
                  tabIndex={0} // agora entra no fluxo do Tab
                  alt="Esfinge"
                  title="Esfinge, site 'Educação, Xadrez, Inclusão'"
                  style={{ height: "100px", width: "auto" }} // ou defina de acordo com seu layout
                />
                <div className="tooltip">
                  <div className="tooltip-content">
                    "esfinge.org" hospedou "XadrezUERJ",{"\n"}em 2004-2009 e
                    2013-2021!
                  </div>
                </div>
              </span>
            </span>

            <span tabIndex={0}>
              {" "}
              {/* // agora entra no fluxo do Tab> */}
              <ImagemZoomHP />
            </span>
          </div>
        </h4>

        {/* Bloco do anúncio */}
        <div style={{ marginTop: "1px", textAlign: "center" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7174891341008290"
            data-ad-slot="9948140848" // Substitua com seu slot real!
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}

export default Home;
