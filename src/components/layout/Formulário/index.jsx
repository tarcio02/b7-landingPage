import { StylesFormulario } from "./styles";
import { useState } from "react";
import alert from "../../../assets/icons/alerta.png";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    if (type === "checkbox") {
      setFormData((prevFormData) => {
        const novoAutor = {
          dono: false,
          administrador: false,
          gerente: false,
          colaborador: false,
          [name]: checked,
        };
        return {
          ...prevFormData,
          autor: novoAutor,
        };
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        autor: undefined,
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

    const { nome, email, colaboradores, whatsapp, autor } = formData;
    const newErrors = {};

    if (!nome) newErrors.nome = "Nome é obrigatório.";
    if (!email) newErrors.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s]+$/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!colaboradores)
      newErrors.colaboradores = "Informe a quantidade de colaborades.";
    if (!whatsapp) newErrors.whatsapp = "Whatsapp é obrigatório.";
    else if (!/^\d{9,}$/.test(whatsapp)) {
      newErrors.whatsapp = "Número de whats inválido";
    }

    const autorSelecionados = Object.values(autor).filter((v) => v === true);
    if (autorSelecionados.length !== 1) {
      newErrors.autor = "Selecionade exatamente um perfil.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwM01umId2iaC6pR3dCa11z5T1zi0TaoRCQpCrgHqfjRf_SaIyrqHY2dfzeNtqZd7Xe/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
        setErrors({});
      } else {
        alert("Erro ao enviar os dados");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StylesFormulario>
      <h2>
        <span>PREENCHA O FORMULÁRIO </span>E FALE CONOSCO
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className={`input-form ${errors.nome ? "error" : ""}`}
          type="text"
          placeholder="Qual o seu nome?"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {errors.nome && (
          <p className="error">
            <img src={alert} alt="verifique os dados preenchidos" />
            {errors.nome}
          </p>
        )}
        <input
          className={`input-form ${errors.email ? "error" : ""}`}
          type="email"
          placeholder="Qual o seu melhor email?"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="error">
            <img src={alert} alt="verifique os dados preenchidos" />
            {errors.email}
          </p>
        )}
        <input
          className={`input-form ${errors.colaboradores ? "error" : ""}`}
          type="number"
          placeholder="Você possuí quantos colaboradores?"
          name="colaboradores"
          value={formData.colaboradores}
          onChange={handleChange}
        />
        {errors.colaboradores && (
          <p className="error">
            <img src={alert} alt="verifique os dados preenchidos" />
            {errors.colaboradores}
          </p>
        )}
        <input
          className={`input-form ${errors.whatsapp ? "error" : ""}`}
          type="text"
          placeholder="Qual o se numéro de Whatsapp?"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        {errors.whatsapp && (
          <p className="error">
            <img src={alert} alt="verifique os dados preenchidos" />
            {errors.whatsapp}
          </p>
        )}
        <div className="check">
          <h3>Selecione abaixo o seu perfil:</h3>
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
        {errors.autor && (
          <p className="error">
            <img src={alert} alt="verifique os dados preenchidos" />
            {errors.autor}
          </p>
        )}
        <button type="submit">Enviar para Analise</button>
      </form>
    </StylesFormulario>
  );
};

export default Formulario;
