import { useState } from "react";
import Chat from "../../layout/Chat";
import { StylesWrapper, StylesButtonChat, ChatAnimado } from "./style";
import robo from "../../../assets/icons/robogif.gif";

const ChatFlutuante = () => {
  const [chatAberto, setChatAberto] = useState(false);

  return (
    <StylesWrapper>
      {chatAberto && (
        <ChatAnimado>
          <Chat onClose={() => setChatAberto(false)} />
        </ChatAnimado>
      )}
      {!chatAberto && (
        <StylesButtonChat onClick={() => setChatAberto(true)}>
          <img src={robo} alt="robo" />
          <h3>Tire suas dúvidas</h3>
        </StylesButtonChat>
      )}
    </StylesWrapper>
  );
};

export default ChatFlutuante;
