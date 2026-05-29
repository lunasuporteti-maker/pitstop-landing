/**
 * Dados dos planos do PitStop (PRD 04 §4 Section 6, PRD 03 pricing).
 *
 * Mantido como arquivo TypeScript para que o time de marketing edite precos
 * e features sem tocar no HTML dos componentes (NFR-008, parcial).
 *
 * IMPORTANTE: este arquivo e a fonte de verdade dos planos exibidos na landing.
 * Ao mudar preco/limites, alinhar com o que o app realmente cobra (PRD 04 R2).
 */

/** Tipo de acao do CTA de cada plano. */
export type PlanoCtaTipo = 'cadastro' | 'contato';

export interface Plano {
  /** Identificador estavel do plano. */
  id: string;
  /** Nome exibido no card. */
  nome: string;
  /** Preco formatado (ex: 'R$ 99,90'). Vazio para planos sem preco fixo. */
  preco: string;
  /** Periodo do preco (ex: '/mes'). Vazio quando nao se aplica. */
  periodo: string;
  /** Frase curta de posicionamento do plano. */
  resumo: string;
  /** Lista de features inclusas. */
  features: string[];
  /** Texto do botao de CTA. */
  ctaLabel: string;
  /**
   * Tipo do CTA:
   * - 'cadastro': aponta para /cadastro com UTM (utm_campaign=pricing).
   * - 'contato': abre modal/secao de contato comercial (Empresarial).
   */
  ctaTipo: PlanoCtaTipo;
  /** Quando true, o card recebe destaque visual (badge "Comece aqui"). */
  destaque: boolean;
}

export const planos: Plano[] = [
  {
    id: 'trial',
    nome: 'Trial',
    preco: 'Grátis',
    periodo: '14 dias',
    resumo: 'Comece aqui. Todos os recursos liberados, sem cartão de crédito.',
    features: [
      'Acesso a todos os recursos por 14 dias',
      'Sem cartão de crédito',
      'Cancele quando quiser',
      'Suporte em português durante o teste',
    ],
    ctaLabel: 'Começar grátis',
    ctaTipo: 'cadastro',
    destaque: true,
  },
  {
    id: 'padrao',
    nome: 'Padrão',
    preco: 'R$ 99,90',
    periodo: '/mês',
    resumo: 'Para oficinas que querem tudo organizado em um só lugar.',
    features: [
      'Usuários ilimitados',
      'Ordens de serviço ilimitadas',
      'Orçamentos com PDF',
      'Kanban de OS em tempo real',
      'Portal do cliente',
      'Agendamentos e lembretes',
      'Financeiro integrado',
      'Relatórios visuais',
    ],
    ctaLabel: 'Começar grátis',
    ctaTipo: 'cadastro',
    destaque: false,
  },
  {
    id: 'empresarial',
    nome: 'Empresarial / Redes',
    preco: 'Sob consulta',
    periodo: '',
    resumo: 'Para redes e franquias com múltiplas filiais.',
    features: [
      'Tudo do plano Padrão',
      'Gestão de múltiplas filiais',
      'Onboarding dedicado',
      'Suporte prioritário',
      'Condições para volume',
    ],
    ctaLabel: 'Fale conosco',
    ctaTipo: 'contato',
    destaque: false,
  },
];
