import type { Lang } from '../i18n/ui';

type Loc = Record<Lang, string>;

export interface Job {
  company: string;
  brands?: string;
  role: Loc;
  period: string;
  current?: boolean;
  highlights: Record<Lang, string[]>;
}

export const jobs: Job[] = [
  {
    company: 'Holding 365',
    brands: 'Daiso · Konnbini',
    role: { pt: 'Diretor de Marketing', en: 'Marketing Director' },
    period: '2022 — ' ,
    current: true,
    highlights: {
      pt: [
        'Gestão omnichannel entre canais próprios e marketplaces (Shopee, TikTok Shop, Amazon, Mercado Livre).',
        'Automação com Make, IA generativa e ERP (Bling) pra precificação e estoque — menos retrabalho, mais margem.',
      ],
      en: [
        'Omnichannel management across owned channels and marketplaces (Shopee, TikTok Shop, Amazon, Mercado Livre).',
        'Automation with Make, generative AI and ERP (Bling) for pricing and stock — less rework, more margin.',
      ],
    },
  },
  {
    company: 'TekClean',
    role: { pt: 'Diretor de Marketing & Comercial', en: 'Marketing & Sales Director' },
    period: '2019 — 2022',
    highlights: {
      pt: [
        '+R$ 100 mil no faturamento mensal, estabilizando em R$ 450 mil/mês.',
        'Reestruturação de processos com ClickUp, Slack e CRM; KPIs orientados a dados e automação com IA.',
      ],
      en: [
        '+R$100k in monthly revenue, stabilizing at R$450k/month.',
        'Process overhaul with ClickUp, Slack and CRM; data-driven KPIs and AI automation.',
      ],
    },
  },
  {
    company: 'BRL Grupo',
    brands: 'Six · Ricco Burguer · Dois Ellis',
    role: { pt: 'Diretor de Marketing & Comercial', en: 'Marketing & Sales Director' },
    period: '2015 — 2019',
    highlights: {
      pt: [
        'ROAS de 42 no primeiro mês de campanhas otimizadas.',
        'Liderança de equipe de 18 profissionais; reorganização da empresa em formato de grupo.',
      ],
      en: [
        'ROAS of 42 in the first month of optimized campaigns.',
        'Led a team of 18; restructured the company into a group format.',
      ],
    },
  },
];
