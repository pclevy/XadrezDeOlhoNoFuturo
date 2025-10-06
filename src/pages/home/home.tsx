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
import ImagemZoomHP from "../eventosHistoricos/ImageZoomHP.tsx";

import "./home.css";

import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function Home() {
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
        <h3>Nossos Símbolos, nossa História</h3>
        <h5>(em construção ... XadrezDeOlhoNoFuturo: 06/10/2025, 19:54)</h5>

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
          width: `${navbarWidth}px`,
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
          zIndex: 998,
        }}
      >
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
            <div className="tooltip">
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

        <h5>
          {/* (em construção ... 29/08/2025, 19:48) */}
          {/*
              <span style={{ cursor: "pointer" }}>
                {" "}
                <a onClick={() => navigation("/about")}>Sobre</a>
              </span>
              */}
        </h5>

        <p className="read-the-docs"></p>
      </div>
    </div>
  );
}

export default Home;
