/**
 * Perguntas frequentes da landing (PRD 04 §4 Section 7).
 *
 * Mantido como arquivo TypeScript para que o time de marketing edite as
 * perguntas sem tocar no HTML do componente (NFR-008, parcial).
 *
 * Renderizado com <details>/<summary> nativo (accordion sem JavaScript).
 */

export interface FaqItem {
  /** Pergunta exibida no <summary>. */
  pergunta: string;
  /** Resposta exibida quando o item esta aberto. */
  resposta: string;
}

export const faq: FaqItem[] = [
  {
    pergunta: 'Preciso instalar algo?',
    resposta:
      'Não. O PitStop funciona 100% no navegador. Você acessa de qualquer computador, tablet ou celular sem instalar programas.',
  },
  {
    pergunta: 'Funciona em celular?',
    resposta:
      'Sim. O sistema é responsivo e foi feito para uso no dia a dia da oficina, inclusive direto do celular no balcão ou no box.',
  },
  {
    pergunta: 'Posso cancelar quando quiser?',
    resposta:
      'Sim. Não há fidelidade. Você cancela quando quiser, direto pelo sistema, sem multa ou burocracia.',
  },
  {
    pergunta: 'Como funciona o trial?',
    resposta:
      'São 14 dias com todos os recursos liberados e sem precisar de cartão de crédito. Ao final, você decide se quer continuar no plano pago.',
  },
  {
    pergunta: 'Os dados ficam seguros?',
    resposta:
      'Sim. Seus dados ficam armazenados em ambiente seguro com backups automáticos. Cada oficina tem seu espaço isolado das demais.',
  },
  {
    pergunta: 'Migra meus dados de uma planilha?',
    resposta:
      'Sim. Nossa equipe ajuda a importar seus clientes e veículos a partir de planilhas para você não começar do zero.',
  },
  {
    pergunta: 'Quantos usuários posso ter?',
    resposta:
      'No plano Padrão os usuários são ilimitados. Cadastre toda a sua equipe sem pagar por assento adicional.',
  },
  {
    pergunta: 'Tem integração com WhatsApp?',
    resposta:
      'Sim. Você envia orçamentos em PDF e o link do portal do cliente direto pelo WhatsApp, sem sair do fluxo de trabalho.',
  },
  {
    pergunta: 'Funciona offline?',
    resposta:
      'O PitStop é um sistema online e precisa de conexão com a internet para funcionar e manter tudo sincronizado em tempo real.',
  },
  {
    pergunta: 'Como é o suporte?',
    resposta:
      'Suporte em português, feito por quem entende de oficina. Você fala com gente de verdade, sem robôs travando o atendimento.',
  },
];
