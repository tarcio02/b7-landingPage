import { StylesFormulario } from "./styles";
import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    colaboradores: "",
    whatsapp: "",
    autor: {
      dono: false,
      administrador: false,
      gerente: false,
      colaborador: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        autor: {
          ...prevFormData.autor,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Dados a serem enviados:", formData);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwM01umId2iaC6pR3dCa11z5T1zi0TaoRCQpCrgHqfjRf_SaIyrqHY2dfzeNtqZd7Xe/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      alert("Dados enviados com sucesso");
      setFormData({
        nome: "",
        email: "",
        colaboradores: "",
        whatsapp: "",
        autor: {
          dono: false,
          administrador: false,
          gerente: false,
          colaborador: false,
        },
      });
    } else {
      alert("Ocorreu um erro ao rnviar os dados");
    }
  };

  return (
    <StylesFormulario>
      <h2>
        <span>PREENCHA O FORMULÁRIO </span>E FALE CONOSCO
      </h2>
      <p>
        <span>Responda</span> a estas <span>perguntas</span>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          placeholder="Qual o seu nome?"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          className="input-form"
          type="email"
          placeholder="Qual o seu melhor email?"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="input-form"
          type="number"
          placeholder="Você possuí quantos colaboradores?"
          name="colaboradores"
          value={formData.colaboradores}
          onChange={handleChange}
        />
        <input
          className="input-form"
          type="text"
          placeholder="Qual o se numéro de Whatsapp?"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        <div className="check">
          <h3>Quem sou eu?</h3>
          <div className="inputs">
            <div className="check-box">
              <input
                type="checkbox"
                id="administrador"
                name="administrador"
                checked={formData.autor.administrador}
                onChange={handleChange}
              />
              <label htmlFor="administrador">Administrador</label>
            </div>
            <div className="check-box">
              <input
                type="checkbox"
                id="dono"
                name="dono"
                checked={formData.autor.dono}
                onChange={handleChange}
              />
              <label htmlFor="dono">Dono</label>
            </div>
            <div className="check-box">
              <input
                type="checkbox"
                id="gerente"
                name="gerente"
                checked={formData.autor.gerente}
                onChange={handleChange}
              />
              <label htmlFor="gerente">Gerente</label>
            </div>
            <div className="check-box">
              <input
                type="checkbox"
                id="colaborador"
                name="colaborador"
                checked={formData.autor.colaborador}
                onChange={handleChange}
              />
              <label htmlFor="colaborador">Colaborador</label>
            </div>
          </div>
        </div>
        <button type="submit">Enviar para Analise</button>
      </form>
    </StylesFormulario>
  );
};

export default Formulario;
