import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FAQContainer = styled.div`
  padding: 64px ${theme.espaces.mobileUm};
  background: ${theme.colors.bgUm};

  @media (min-width: 601px) {
    padding: 64px ${theme.espaces.mobileDois};
  }

  @media (min-width: 769px) {
    padding: 80px ${theme.espaces.desktop};
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  margin-bottom: 8px;
  padding: 0;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #d1d5dc;
  margin-bottom: 40px;
`;

export const Question = styled.div`
  padding: 15px 20px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 120px;
  margin: 12px auto;

  @media (min-width: 769px) {
    width: 720px;
  }
`;

export const QuestionText = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const Answer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  border: 1px solid #dee2e6;
  width: 100%;
  border-radius: 8px;
  line-height: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 0;
  opacity: 0;
  margin: 0 auto;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease,
    padding 0.4s ease;

  @media (min-width: 769px) {
    width: 720px;
  }
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
