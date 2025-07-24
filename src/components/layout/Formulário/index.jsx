import { StylesFormulario } from "./styles";
import { forwardRef, useState } from "react";
import alertIcon from "../../../assets/icons/alerta.png";
import luz from "../../../assets/images/luz.png";
import Spinner from "../../designer/Spinner";
import ModalApi from "../ModalApi";

const Formulario = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    colaboradores: "",
    whatsapp: "",
    area: "",
    autor: {
      dono: false,
      administrador: false,
      gerente: false,
      colaborador: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const [modalInfo, setModalInfo] = useState({
    show: false,
    message: "",
    isError: false,
  });

  const [errors, setErrors] = useState({});

  const formatarWhatsapp = (value) => {
    const numeros = value.replace(/\D/g, "");

    if (numeros.length <= 2) {
      return `(${numeros}`;
    } else if (numeros.length <= 7) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    } else if (numeros.length <= 11) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    } else {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
    }
  };

  const showModal = (message, isError = false) => {
    setModalInfo({ show: true, message, isError });
  };

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
      const newValue = name === "whatsapp" ? formatarWhatsapp(value) : value;

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, email, empresa, colaboradores, whatsapp, autor } = formData;
    const newErrors = {};

    if (!nome) newErrors.nome = "Nome é obrigatório.";
    if (!email) newErrors.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s]+$/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!empresa) newErrors.empresa = "Nome da empresa é obrigatório.";

    if (!colaboradores)
      newErrors.colaboradores = "Informe a quantidade de colaborades.";
    if (!whatsapp) newErrors.whatsapp = "Whatsapp é obrigatório.";
    else if (!/^\d{9,}$/.test(whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "Número de whats inválido";
    }

    const autorSelecionados = Object.values(autor).filter((v) => v === true);
    if (autorSelecionados.length !== 1) {
      newErrors.autor = "Selecionade exatamente um perfil.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        whatsapp: formData.whatsapp.replace(/\D/g, ""),
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwBoPFKAtz06qvTnoCjyP_bsDXFIxnV-LTxgOg1MDOwx5crAnPidJ84T3czF4pQMzfHHQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            dados: JSON.stringify(payload),
          }),
        }
      );

      if (response.ok) {
        if (typeof fbq === "function") {
          fbq("track", "Lead");
        }

        if (typeof window.spdt === "function") {
          window.spdt("custom_event_1", {
            nome: formData.nome,
            email: formData.email,
            empresa: formData.empresa,
          });
          console.log("Spotify custom_event_1 enviado");
        }

        setIsLoading(false);
        showModal("Obrigado, em breve entraremos em contato com você.", false);

        setFormData({
          nome: "",
          email: "",
          empresa: "",
          colaboradores: "",
          whatsapp: "",
          area: "",
          autor: {
            dono: false,
            administrador: false,
            gerente: false,
            colaborador: false,
          },
        });
        setErrors({});
      } else {
        showModal("Erro ao enviar os dados. Tente novamente.", true);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <StylesFormulario>
      <h2>
        <span>PREENCHA O FORMULÁRIO </span>E FALE CONOSCO
      </h2>
      <form ref={ref} onSubmit={handleSubmit}>
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
            <img src={alertIcon} alt="verifique os dados preenchidos" />
            {errors.nome}
          </p>
        )}

        <input
          className={`input-form ${errors.empresa ? "error" : ""}`}
          type="text"
          placeholder="Nome da empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
        />
        {errors.empresa && (
          <p className="error">
            <img src={alertIcon} alt="verifique os dados preenchidos" />
            {errors.empresa}
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
            <img src={alertIcon} alt="verifique os dados preenchidos" />
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
            <img src={alertIcon} alt="verifique os dados preenchidos" />
            {errors.colaboradores}
          </p>
        )}
        <input
          className={`input-form ${errors.whatsapp ? "error" : ""}`}
          type="text"
          placeholder="Qual o seu número de Whatsapp?"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        {errors.whatsapp && (
          <p className="error">
            <img src={alertIcon} alt="verifique os dados preenchidos" />
            {errors.whatsapp}
          </p>
        )}
        <input
          className="input-form"
          type="text"
          placeholder="Área de atuação"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
        <div className="check">
          <h3>Selecione abaixo o seu perfil:</h3>
          <div className="inputs">
            {["administrador", "dono", "gerente", "colaborador"].map(
              (perfil) => (
                <div className="check-box" key={perfil}>
                  <input
                    type="checkbox"
                    id={perfil}
                    name={perfil}
                    checked={formData.autor[perfil]}
                    onChange={handleChange}
                  />
                  <label htmlFor={perfil}>
                    {perfil.charAt(0).toUpperCase() + perfil.slice(1)}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
        {errors.autor && (
          <p className="error">
            <img src={alertIcon} alt="verifique os dados preenchidos" />
            {errors.autor}
          </p>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <button type="submit">Enviar para Análise</button>
        )}
      </form>
      <img className="luz left" src={luz} alt="efeito de luz" />
      <ModalApi
        show={modalInfo.show}
        message={modalInfo.message}
        isError={modalInfo.isError}
        onClose={() =>
          setModalInfo({ show: false, message: "", isError: false })
        }
      />
    </StylesFormulario>
  );
});

export default Formulario;
