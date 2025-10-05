import { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nomeDoEvento: "",
    dataDoEvento: "",
    descricao: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMensagem("Enviando...");

    try {
      const response = await fetch("http://localhost:3001/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMensagem("✅ Email enviado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          nomeDoEvento: "",
          dataDoEvento: "",
          descricao: "",
        });
      } else {
        setMensagem("❌ Erro ao enviar e-mail.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("❌ Erro de conexão com o servidor.");
    }
  };

  {
    /*}
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
  
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "torneio.json";
    link.click();
    URL.revokeObjectURL(url);
  };
  */
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Envie seu Torneio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Nome do Evento:
          <input
            type="text"
            name="nomeDoEvento"
            value={formData.nomeDoEvento}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Data do Evento:
          <input
            type="date"
            name="dataDoEvento"
            value={formData.dataDoEvento}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Descrição:
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
        <br />

        <button type="submit">Enviar por Email</button>
        {/*}
        <button
          type="button"
          onClick={handleDownload}
          style={{ marginLeft: "10px" }}
        >
          Fazer download JSON
        </button>
        */}
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Formulario;
