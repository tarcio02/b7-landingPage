import { forwardRef, useState } from "react";
import { StylesFormulario } from "./styles";
import { supabase } from "../../../services/supabaseCLient.jsx";
import Spinner from "../../ui/Spinner";
import ModalApi from "../ModalApi";
import alertIcon from "../../../assets/icons/alerta.png";
import IconeSeta from "../../../assets/icons/iconesetadireita.png";
const Formulario = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    colaboradores: "",
    whatsapp: "",
    area: "",
    autor: "",
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
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 7)
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 11)
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  const showModal = (message, isError = false) => {
    setModalInfo({ show: true, message, isError });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    const newValue = name === "whatsapp" ? formatarWhatsapp(value) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatarNumeroBanco = (numero) => {
      const apenasNumeros = numero.replace(/\D/g, "");
      if (apenasNumeros.length < 10) return null;
      const ddd = apenasNumeros.slice(0, 2);
      let restante = apenasNumeros.slice(2);
      restante = restante.slice(1); // Remove o primeiro dígito após o DDD
      return `55${ddd}${restante}`;
    };

    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        whatsapp: formatarNumeroBanco(formData.whatsapp),
      };

      const { error } = await supabase
        .from("leads_formulario")
        .insert([payload]);

      if (error) {
        showModal("Erro ao enviar os dados. Tente novamente.", true);
        console.error(error);
      } else {
        try {
          await fetch(
            "https://n8n-b7-n8n.xxer28.easypanel.host/webhook/lead_new",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }
          );
        } catch (err) {
          console.error("Erro ao enviar para o webhook:", err);
        }

        if (typeof fbq === "function") fbq("track", "Lead");
        if (typeof window.spdt === "function") {
          window.spdt("custom_event_1", {
            nome: formData.nome,
            email: formData.email,
            empresa: formData.empresa,
          });
        }

        showModal("Obrigado, em breve entraremos em contato com você.", false);

        setFormData({
          nome: "",
          email: "",
          empresa: "",
          colaboradores: "",
          whatsapp: "",
          area: "",
          autor: "",
        });
        setErrors({});
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <StylesFormulario>
      <form ref={ref} onSubmit={handleSubmit}>
        <div>
          <p className="label" htmlFor="nome">
            Qual o seu nome?
          </p>
          <input
            className={`input-form ${errors.nome ? "error" : ""}`}
            type="text"
            placeholder="Digite seu nome completo"
            name="nome"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {errors.nome && (
            <p className="error">
              <img src={alertIcon} alt="verifique os dados preenchidos" />
              {errors.nome}
            </p>
          )}
        </div>

        <div>
          <p className="label" htmlFor="empresa">
            Qual o nome da empresa?
          </p>
          <input
            className={`input-form ${errors.empresa ? "error" : ""}`}
            type="text"
            placeholder="Digite o nome da sua empresa"
            name="empresa"
            id="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
          {errors.empresa && (
            <p className="error">
              <img src={alertIcon} alt="verifique os dados preenchidos" />
              {errors.empresa}
            </p>
          )}
        </div>

        <div>
          <p className="label" htmlFor="email">
            Qual o seu email?
          </p>
          <input
            className={`input-form ${errors.email ? "error" : ""}`}
            type="email"
            placeholder="seu@email.com"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error">
              <img src={alertIcon} alt="verifique os dados preenchidos" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <p className="label" htmlFor="colaboradores">
            Sua empresa possui quantos colaboradores?
          </p>
          <input
            className={`input-form ${errors.colaboradores ? "error" : ""}`}
            type="number"
            placeholder="Quantos colaboradores?"
            name="colaboradores"
            id="colaboradores"
            value={formData.colaboradores}
            onChange={handleChange}
          />
          {errors.colaboradores && (
            <p className="error">
              <img src={alertIcon} alt="verifique os dados preenchidos" />
              {errors.colaboradores}
            </p>
          )}
        </div>

        <div>
          <p className="label" htmlFor="whatsapp">
            Qual o seu whatsapp?
          </p>
          <input
            className={`input-form ${errors.whatsapp ? "error" : ""}`}
            type="text"
            placeholder="(77) 99999-9999"
            name="whatsapp"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
          {errors.whatsapp && (
            <p className="error">
              <img src={alertIcon} alt="verifique os dados preenchidos" />
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <p className="label" htmlFor="area">
            Qual a área de atuação de sua empresa?
          </p>
          <input
            className="input-form"
            type="text"
            placeholder="Digite aqui seu segmento"
            name="area"
            id="area"
            value={formData.area}
            onChange={handleChange}
          />
        </div>

        <div className="autor">
          <h3>Selecione abaixo o seu perfil:</h3>
          <select
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            className={`input-form ${errors.autor ? "error" : ""}`}
          >
            <option value="">Selecione...</option>
            <option value="administrador">Administrador</option>
            <option value="dono">Dono</option>
            <option value="gerente">Gerente</option>
            <option value="colaborador">Colaborador</option>
          </select>
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
          <button type="submit">
            <img src={IconeSeta} alt="icone" />
            Enviar para Análise
          </button>
        )}
      </form>
      <ModalApi
        show={modalInfo.show}
        message={modalInfo.message}
        isError={modalInfo.isError}
        onClose={() => {
          setModalInfo({ show: false, message: "", isError: false });
          setIsLoading(false);
        }}
      />
    </StylesFormulario>
  );
});

export default Formulario;
