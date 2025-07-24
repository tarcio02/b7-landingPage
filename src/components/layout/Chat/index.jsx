import { useEffect, useRef, useState } from "react";
import { StylesChat, RoboFlutuante, ButtonChat } from "./styles";
import robo from "../../../assets/icons/robogif.gif";

const Chat = ({ onClose }) => {
  const [mensagens, setMensagens] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fechando, setFechando] = useState(false);

  const mensagensRef = useRef(null); // <-- nova ref

  const mensagensSugeridas = [
    "Quero saber mais sobre o método B7-3X.",
    "Como o método 3X pode alavancar os meus resultados?",
    "Quero agendar uma reunião.",
  ];

  const fecharComAnimacao = () => {
    setFechando(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const enviarMensagem = async () => {
    if (!input.trim()) return;

    const novaMensagem = { texto: input, autor: "usuario" };
    setMensagens((prev) => [...prev, novaMensagem]);
    setInput("");
    setLoading(true);

    try {
      const resposta = await fetch(
        "https://n8n-b7-n8n.xxer28.easypanel.host/webhook/b7site",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mensagem: input }),
        }
      );

      const dados = await resposta.json();
      const mensagensIA = dados[0]?.output?.messages || [];

      if (mensagensIA.length === 0) {
        setMensagens((prev) => [
          ...prev,
          { texto: "Resposta não recebida", autor: "ia" },
        ]);
      } else {
        setMensagens((prev) => [
          ...prev,
          ...mensagensIA.map((texto) => ({ texto, autor: "ia" })),
        ]);
      }
    } catch (erro) {
      setMensagens((prev) => [
        ...prev,
        { texto: "Erro ao conectar com a IA", autor: "ia" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") enviarMensagem();
  };

  useEffect(() => {
    if (mensagensRef.current) {
      mensagensRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens, loading]);

  return (
    <>
      <RoboFlutuante className={fechando ? "fechando" : ""}>
        <img src={robo} alt="robo" />
      </RoboFlutuante>
      <StylesChat className={fechando ? "fechando" : ""}>
        <div className="topo">
          <button onClick={fecharComAnimacao} className="fechar">
            ▼
          </button>
        </div>
        <div className="mensagens">
          <div className="mensagem ia">Olá, como posso te ajudar?</div>
          <div className="sugestoes">
            {mensagensSugeridas.map((msg, i) => (
              <ButtonChat key={i} onClick={() => setInput(msg)}>
                {msg}
              </ButtonChat>
            ))}
          </div>
          {mensagens.map((msg, i) => (
            <div key={i} className={`mensagem usuario ${msg.autor}`}>
              {msg.texto}
            </div>
          ))}
          {loading && <div className="mensagem ia">Digitando...</div>}
          <div ref={mensagensRef} /> {/* <-- marcador final */}
        </div>
        <div className="entrada">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua pergunta..."
          />
          <button onClick={enviarMensagem}>Enviar</button>
        </div>
      </StylesChat>
    </>
  );
};

export default Chat;
