import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Esfinge from "../../assets/esfinge.png";

function About() {
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

    updateTitHeight();

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

  // Ativa o bloco de anúncio do AdSense
  {
    /*
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Erro ao carregar anúncio:", e);
    }
  }, []);
*/
  }

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
          zIndex: 0,
        }}
      >
        <h3>Sobre Nós</h3>
        <h4>(contato: 'projetoesfinge97@gmail.com' )</h4>
        <h5>(em construção ... 02/10/2025, 17:11)</h5>

        {/* Início do Bloco de anúncio do Google AdSense */}
        <div style={{ marginTop: "10px" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7174891341008290"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        {/* Fim do Bloco de anúncio do Google AdSense */}
      </div>

      <div
        className="azul"
        style={{
          position: "fixed",
          top: `${navbarHeight + titHeight + 9}px`,
          width: `${navbarWidth}px`,
          overflowY: "auto",
          maxHeight: `${containerHeight - 5}px`,
          border: "1px solid blue",
          backgroundColor: "#e0f0ff",
          marginTop: 1,
          paddingTop: "0px",
          paddingBottom: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",
          zIndex: 1,
        }}
      >
        <div tabIndex={0}>Coordenador</div>
        <div tabIndex={0}>Participante 1</div>
        <div tabIndex={0}>Participante 2</div>
        <div tabIndex={0}>Participante 3</div>
        <div tabIndex={0}>Participante 4 </div>

        <img
          src={Esfinge}
          className="logo-olho"
          alt="Outra Descrição Imagem de uma Esfinge, símbolo do 'site'"
          title="Imagem de uma Esfinge, símbolo do 'site'"
          tabIndex={0}
          style={{ marginTop: "10px", maxWidth: "200px", outline: "none" }}
        />
      </div>
    </div>
  );
}

export default About;
