// About.tsx
// 2025.11.03 16:49
// Página "Sobre Nós" - Conteúdo centralizado em uma única coluna

import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Esfinge from "../../assets/esfinge.png";
import FundoArte from "../../assets/chesgame.jpg";

function About() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [titHeight, setTitHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const titRef = useRef<HTMLDivElement>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Atualiza estado ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Observa altura do título
  useEffect(() => {
    const updateTitHeight = () => {
      if (titRef.current)
        setTitHeight(titRef.current.getBoundingClientRect().height);
    };
    updateTitHeight();

    const observer = new ResizeObserver(updateTitHeight);
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
      const availableHeight =
        window.innerHeight - navbarHeight - titHeight - 10;
      setContainerHeight(availableHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [navbarHeight, titHeight]);

  // Google Ads (mantido)
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
      <Navbar onHeightChange={setNavbarHeight} onWidthChange={setNavbarWidth} />

      {/* Título fixo */}
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
          padding: "1px",
          backgroundColor: "#fff",
          zIndex: 999,
        }}
      >
        <h3>Sobre Nós</h3>
        <h4>(contato: 'projetoesfinge97@gmail.com')</h4>
        <h5>(Construindo o Futuro ... 03/11/2025, 16:49)</h5>
      </div>

      {/* Conteúdo azul centralizado */}
      <div
        className="azul"
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 9}px`,
          width: isSmallScreen ? "95%" : `${navbarWidth}px`,
          left: "50%",
          transform: "translateX(-50%)",
          overflowY: "auto",
          maxHeight: `${containerHeight - 5}px`,
          border: "1px solid blue",
          backgroundColor: "#e9f9ff",
          padding: "10px",
          backgroundImage: `url(${FundoArte})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          zIndex: 998,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Paulo Cesar Levy */}
        <div tabIndex={0} style={{ padding: "12px 0px" }}>
          <span style={{ fontSize: "20px" }}>
            <b>AI Paulo Cesar Levy</b>
          </span>
          <br />
          <span style={{ fontSize: "16px" }}>
            <b>Árbitro Internacional</b>
          </span>
          <br />
          <a
            href="https://ratings.fide.com/profile/2133890"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            <span style={{ fontSize: "16px" }}>
              <b>Fide ID: 2133890 — Link externo</b>
            </span>
          </a>
        </div>

        {/* Ester A. Lima de Souza */}
        <div tabIndex={0} style={{ paddingBottom: 12 }}>
          <span style={{ fontSize: "20px" }}>
            <b>Ester A. Lima de Souza</b>
          </span>
          <br />
          <span style={{ fontSize: "16px" }}>
            <b>Mestre em Ciência da Informação</b>
          </span>
          <br />
          <a
            href="http://lattes.cnpq.br/6675953180309183"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            <span style={{ fontSize: "16px" }}>
              <b>Lattes ID: 6675953180309183</b>
            </span>
          </a>
        </div>

        {/* Imagem da Esfinge */}
        <div style={{ marginTop: "10px" }}>
          <img
            src={Esfinge}
            className="logo-simbolo-pcd"
            alt="Imagem de uma Esfinge, símbolo do site"
            title="Imagem de uma Esfinge, símbolo do site"
            tabIndex={0}
            style={{
              maxWidth: "200px",
              outline: "none",
              borderRadius: "8px",
              border: "1px solid #999",
            }}
          />
          <p style={{ fontSize: "0.9rem", color: "#333", marginTop: "5px" }}>
            Símbolo do Projeto Esfinge
          </p>
        </div>

        {/* Anúncio Google */}
        <div style={{ marginTop: "20px" }}>
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

export default About;
