import { useState } from "react";
import {
  FAQContainer,
  Question,
  QuestionText,
  Answer,
  AnswerWrapper,
  Icon,
  Titulo,
} from "./style";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Alterna a pergunta aberta
  };

  const faqItems = [
    {
      question: "O que é o método B7-3X?",
      answer: [
        "O B7-3X é o nosso método exclusivo de crescimento digital com foco em vendas. Ele é dividido em três pilares: Diagnóstico Estratégico, Execução Criativa e Acompanhamento Inteligente. Criado para empresas que querem parar de improvisar e começar a escalar com método.",
      ],
    },
    {
      question: "Para quem o método B7-3X foi feito?",
      answer: [
        "Empresas do comércio local, clínicas, lojas físicas, marcas que já vendem mas querem profissionalizar sua presença no digital e escalar seus resultados. Também atendemos e-commerces e empresas com múltiplas unidades.",
      ],
    },
    {
      question: "O que está incluso no serviço?",
      answer: [
        "1. Diagnóstico estratégico do seu negócio",
        "2. Planejamento de campanhas com foco em vendas",
        "3. Criação de vídeos e artes profissionais",
        "4. Gestão de tráfego pago (Instagram, Facebook, TikTok e Google)",
        "5. Integração com CRM e atendimento com IA",
        "6. Relatórios, acompanhamento quinzenal e suporte via WhatsApp",
      ],
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: [
        "Os clientes que implementam todas as estratégias do planejamento junto com o acompanhamento da B7 costumam ver resultados em vendas já nos primeiros 90 dias.",
      ],
    },
    {
      question: "Vocês garantem vendas?",
      answer: [
        "Nossa garantia é estratégia com consequência. Ou seja: sim, criamos metas com foco em vendas — e essa é a nossa expectativa com cada cliente. Mas para que o resultado aconteça, é essencial que o parceiro siga o método B7-3X com comprometimento e consistência. Quando a estratégia é bem aplicada e o cliente executa junto, a venda se torna uma consequência natural.",
      ],
    },
    {
      question: "Vocês atendem qualquer segmento?",
      answer: [
        "Sim. Temos experiência com clientes de diversos setores: moda, alimentos, estética, odontologia, suplementos, saúde, entre outros. Nosso foco está em criar estratégias de venda adaptadas à realidade de cada negócio.",
      ],
    },
    {
      question: "Posso contratar só tráfego ou só design?",
      answer: [
        "Não trabalhamos com serviços avulsos. Nossa entrega é um sistema completo que une estratégia, criativo e mídia para gerar resultado. Acreditamos que só assim conseguimos entregar o que prometemos.",
      ],
    },
    {
      question: "Como funciona o suporte?",
      answer: [
        "Você terá acesso ao nosso time via WhatsApp durante o horário comercial, com respostas em até 4h. Também realizamos reuniões periódicas para revisar resultados, ajustar rotas e pensar junto com você.",
      ],
    },
    {
      question: "Como posso começar?",
      answer: [
        "Simples: clique no botão “Quero o B7-3X”, preencha o formulário e aguarde nosso contato. Em poucos dias, você estará recebendo seu diagnóstico estratégico e começando uma nova fase no digital.",
      ],
    },
  ];

  return (
    <FAQContainer>
      <Titulo>
        <span>PERGUNTAS</span> FREQUENTES
        <i className="fa-solid fa-person-circle-question"></i>
      </Titulo>
      {faqItems.map((item, index) => (
        <div key={index}>
          <Question onClick={() => toggleQuestion(index)}>
            <QuestionText>{item.question}</QuestionText>
            <Icon $isOpen={openIndex === index}>▼</Icon>
          </Question>
          <AnswerWrapper className={openIndex === index ? "aberto" : ""}>
            <Answer>
              {item.answer.map((paragrafo, idx) => (
                <p key={idx}>{paragrafo}</p>
              ))}
            </Answer>
          </AnswerWrapper>
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
