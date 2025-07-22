import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Titulo = styled.h2`
  text-align: center;
  margin: 16px 0;
  padding-bottom: 16px;
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: bold;
  color: ${theme.colors.texto};
  /* text-decoration: underline; */

  i {
    margin-left: 8px;
    color: ${theme.colors.primary};
  }

  span {
    color: ${theme.colors.primary};
  }
`;

// Estilos principais
export const FAQContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-top: 1px solid ${theme.colors.primary};
`;

export const Question = styled.div`
  background: ${theme.colors.buttonColor};
  padding: 15px 20px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionText = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const Answer = styled.div`
  background: black;
  padding: 0 20px;
  margin-bottom: 10px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  line-height: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease,
    padding 0.4s ease;
`;

export const AnswerWrapper = styled.div`
  &.aberto {
    ${Answer} {
      max-height: 500px; /* alto o suficiente para sua resposta */
      opacity: 1;
      padding: 15px 20px;
    }
  }
`;

export const Icon = styled.span`
  font-size: 18px;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
