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

  // Observa dinamicamente a altura do título
  useEffect(() => {
    const updateTitHeight = () => {
      if (titRef.current) {
        const height = titRef.current.getBoundingClientRect().height;
        setTitHeight(height);
      }
    };

    updateTitHeight();

    const observer = new ResizeObserver(updateTitHeight);
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
      const availableHeight =
        window.innerHeight - navbarHeight - titHeight - 10;
      setContainerHeight(availableHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [navbarHeight, titHeight]);

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
          backgroundColor: "#fff",
          zIndex: 0,
          padding: "1px",
        }}
      >
        <h3>Sobre Nós</h3>
        <h4>(contato: 'projetoesfinge97@gmail.com')</h4>
        <h5>(Construindo o Futuro ... 20/10/2025, 19:11)</h5>

        {/* Bloco do anúncio */}
        <div style={{ marginTop: "1px", textAlign: "center" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7174891341008290"
            //data-ad-slot="1234567890" // Substitua com seu slot real!
            data-ad-slot="9948140848" // Substitua com seu slot real!
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>

      <div
        className="azul"
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 10}px`,
          width: `${navbarWidth}px`,
          maxHeight: `${containerHeight - 5}px`,
          overflowY: "auto",
          backgroundColor: "#e0f0ff",
          border: "1px solid blue",
          paddingTop: "3px",

          backgroundImage: `url(${FundoArte})`, // 👈 aqui
          backgroundRepeat: "repeat", // evita repetição
          backgroundPosition: "center", // centraliza

          zIndex: 1,
        }}
      >
        <div tabIndex={0} style={{ padding: "12px 0px 12px 0px" }}>
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
              <b>Fide ID: 2133890</b>
            </span>
          </a>
        </div>

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

        <div tabIndex={0}> ... </div>
        <div tabIndex={0}> ... </div>

        <img
          src={Esfinge}
          className="logo-simbolo-pcd"
          alt="Imagem de uma Esfinge, símbolo do site"
          title="Imagem de uma Esfinge, símbolo do site"
          tabIndex={0}
          style={{ marginTop: "10px", maxWidth: "200px", outline: "none" }}
        />
      </div>
    </div>
  );
}

export default About;
