// home.tsx
// Alterado em: 24/12/2025, 18:52

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

//import fogosBoasFestas from "../../assets/EuApoiofogosBoasFestas.jpg";
import fogosBoasFestas from "../../assets/fogo-de-artificio-imagem-animada-0065.gif";

//import fogosBoasFestas from "../../assets/EuApoiofogosBoasFestas.png";

import "./home.css";

import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const titRef = useRef<HTMLDivElement>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Modal do fogosBoasFestas — APENAS ESTA PARTE É NOVA
  const [showModalDez, setShowModalDez] = useState(false);
  const [fadeDez, setFadeDez] = useState(false);

  const AUTO_CLOSE_MS = 5000; // ⏱️ 5 segundos

  const modalfogosBoasFestas = showModalDez && (
    <div
      onClick={() => {
        setFadeDez(false);
        setTimeout(() => setShowModalDez(false), 200);
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.55)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 0,
        margin: 0,
        zIndex: 999999,
        cursor: "zoom-out",
        opacity: fadeDez ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      <img
        src={fogosBoasFestas}
        alt="Zoom Fogos de Boas Festas"
        style={{
          position: "absolute",
          top: "1px",
          left: "1px",
          width: "auto",
          height: "auto",
          maxWidth: "95vw",
          maxHeight: "95vh",
          transform: fadeDez ? "scale(1)" : "scale(0.85)",
          transition: "transform 0.2s ease-in-out",
          borderRadius: "6px",
        }}
      />
    </div>
  );
  // FIM DO MODAL

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // AdSense script loader
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
          // Y @ts-ignore
          window.adsbygoogle = window.adsbygoogle || [];
          // Y @ts-ignore
          window.adsbygoogle.push({});
        } catch (e) {
          console.error("Erro ao carregar anúncio (onload):", e);
        }
      };

      document.head.appendChild(script);
    } else {
      try {
        // Y @ts-ignore
        window.adsbygoogle = window.adsbygoogle || [];
        // Y @ts-ignore
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Erro ao carregar anúncio:", e);
      }
    }
  }, []);

  //
  //-----------------------------

  // === MENSAGEM TEMPORÁRIA NO AZUL (ANUAL) ===
  const [showMsgPeriodo, setShowMsgPeriodo] = useState(false);
  const [fadeMsg, setFadeMsg] = useState(false);

  useEffect(() => {
    const agora = new Date();
    const anoAtual = agora.getFullYear();

    // Datas seguras (sem string / sem timezone bug)
    const dataInicio = new Date(anoAtual, 11, 24, 0, 0, 0); // 20/dez
    const dataFim = new Date(anoAtual + 0, 0, 24, 23, 59, 59); // 24/dez,  +1=2025

    if (agora >= dataInicio && agora <= dataFim) {
      setShowMsgPeriodo(true);

      // fade-in
      setTimeout(() => setFadeMsg(true), 50);

      // ⏱️ auto-fechar
      const timer = setTimeout(() => {
        fecharMsgPeriodo();
      }, AUTO_CLOSE_MS);

      return () => clearTimeout(timer);
    }
  }, []); //-----------------------------
  //

  const fecharAutomatico = () => {
    setFadeMsg(false);
    setTimeout(() => {
      setShowMsgPeriodo(false);
    }, 300);
  };

  setTimeout(() => {
    fecharAutomatico();
  }, AUTO_CLOSE_MS);

  const fecharMsgPeriodo = () => {
    setFadeMsg(false);
    setTimeout(() => {
      setShowMsgPeriodo(false);
    }, 300);
  };
  //
  //-----------------------------
  // === CONTROLE DE DATA PARA MENSAGEM ===

  //---------------------------------
  //

  return (
    <div style={{ marginTop: 0, padding: "0px 5px", justifyItems: "center" }}>
      <Navbar onHeightChange={setNavbarHeight} onWidthChange={setNavbarWidth} />

      {modalfogosBoasFestas}

      <div
        ref={titRef}
        className="Tit"
        tabIndex={0}
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
          (Construindo o Futuro ... Xadrez de Olho no Futuro: 24/12/2025, 18:52)
        </h5>
      </div>

      <div
        className="azul"
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
          marginTop: 1,
          paddingTop: "0px",
          paddingBottom: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",
          backgroundImage: `url(${FundoArte})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
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
            display: "inline-block",
          }}
        >
          <span className="tooltip-anchor" style={{ zIndex: 1 }}>
            <span>
              {/* AQUI A ÚNICA ALTERAÇÃO: adição do onClick */}
              <img
                src={fogosBoasFestas}
                className="logo-campanhaMensal"
                tabIndex={0}
                alt="Ícone fogosBoasFestas"
                title="Fogos de Boas Festas' - Comemorando Natal e Ano Novo!"
                style={{
                  width: "auto",
                  backgroundColor: "transparent",
                  cursor: "zoom-in",
                }}
                onClick={() => {
                  setShowModalDez(true);
                  setTimeout(() => setFadeDez(true), 10);
                }}
              />

              <div className="tooltip at_side" style={{ height: "auto" }}>
                <div className="tooltip-content">
                  "Fogos de Boas Festas" - Comemorando Natal e Ano Novo!
                </div>
              </div>
            </span>
          </span>
        </div>

        {showMsgPeriodo && (
          <div
            role="alert"
            aria-live="polite"
            aria-atomic="true"
            style={{
              // 🔥 comportamento correto
              position: isSmallScreen ? "fixed" : "absolute",

              // 📱 Mobile
              bottom: isSmallScreen ? "14px" : "8px",
              left: isSmallScreen ? "50%" : "auto",

              // 🖥️ Desktop
              right: isSmallScreen ? "auto" : "8px",
              top: "auto",

              transform: isSmallScreen
                ? `translateX(-50%) ${fadeMsg ? "" : " translateY(14px)"}`
                : fadeMsg
                  ? "translateY(0)"
                  : "translateY(10px)",

              width: isSmallScreen ? "92%" : "260px",

              zIndex: 9999,
              backgroundColor: "#fff3cd",
              color: "#664d03",
              border: "1px solid #ffecb5",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "0.95rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",

              // ✨ animação
              opacity: fadeMsg ? 1 : 0,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
            tabIndex={-1}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <strong id="msg-festas-titulo">🎉 Emanuel Lasker!</strong>

              <button
                onClick={fecharMsgPeriodo}
                aria-label="Fechar mensagem de Aniversário"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "18px",
                  cursor: "pointer",
                  marginLeft: "8px",
                  color: "#664d03",
                }}
              >
                ✖
              </button>
            </div>
            <div
              style={{ marginTop: "8px" }}
              aria-describedby="msg-festas-titulo"
            >
              Hoje seria Aniversário:
              <br />
              <b>24 de dezembro</b>.
            </div>
          </div>
        )}

        <div>
          <img
            src={peaoAvancado}
            className="logo-olho"
            tabIndex={0}
            alt="Peão Avançado"
            title="Peão Avançado"
          />
          <img
            src={xadrezOlho}
            className="logo-olho"
            tabIndex={0}
            alt="Xadrez de Olho no Futuro"
            title="Xadrez de Olho no Futuro"
          />
        </div>

        <div>
          <img
            src={cavaloPretoEsqLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="Cavalo Preto Esquerdo"
            title="Cavalo Preto Esquerdo"
          />
          <img
            src={acessibilidadeUniversalLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="Símbolo Universal de Acessibilidade"
            title="Símbolo Universal de Acessibilidade"
          />
          <img
            src={deficienciaVisualLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="Deficiencia Visual"
            title="Deficiencia Visual"
          />
          <img
            src={SimboloDeficienciaMobilidadeLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="SimboloDeficienciaMobilidade"
            title="SimboloDeficienciaMobilidade"
          />
          <img
            src={cordaoGirasoisLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="Colar de Girasóis"
            title="Colar de Girasóis"
          />
          <img
            src={cavaloPretoDirLogo}
            className="logo-simbolo-pcd"
            tabIndex={0}
            alt="Cavalo Preto Direito"
            title="Cavalo Preto Direito"
          />
        </div>

        <h3 tabIndex={0}>Xadrez de Olho no Futuro</h3>
        <h4 tabIndex={0}>
          Futuro da Juventude, da Acessibilidade, e do Planeta
        </h4>

        <h5 tabIndex={0}>
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
                  tabIndex={0}
                  alt="Esfinge"
                  title="Esfinge, site 'Educação, Xadrez, Inclusão'"
                  style={{ height: "100px", width: "auto" }}
                />
                <div className="tooltip">
                  <div className="tooltip-content">
                    "esfinge.org" hospedou "XadrezUERJ", em 2004-2009 e
                    2013-2021!
                  </div>
                </div>
              </span>
            </span>

            <span tabIndex={0}>
              <ImagemZoomHP />
            </span>
          </div>
        </h4>

        <div style={{ marginTop: "1px", textAlign: "center" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7174891341008290"
            data-ad-slot="9948140848"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}

export default Home;
