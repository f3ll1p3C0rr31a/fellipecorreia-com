import type { Lang } from '../i18n/ui';

type Loc = Record<Lang, string>;

export interface Job {
  company: string;
  brands?: string;
  role: Loc;
  period: Loc;
  location: string;
  current?: boolean;
  highlights: Record<Lang, string[]>;
}

export const jobs: Job[] = [
  {
    company: 'Daiso',
    role: { pt: 'Desenvolvedor Junior', en: 'Junior Developer' },
    period: { pt: 'jan/2026 – atual', en: 'Jan/2026 – present' },
    location: 'Brasília',
    current: true,
    highlights: {
      pt: [
        'Aplico automação de processos (n8n), integrações via API e desenvolvimento de ferramentas internas para otimizar precificação, cadastro de produtos e gestão de estoque via ERP (Bling).',
      ],
      en: [
        'I apply process automation (n8n), API integrations and internal tooling to optimize pricing, product registration and stock management via the Bling ERP.',
      ],
    },
  },
  {
    company: 'Konnbini',
    role: { pt: 'Desenvolvedor Junior', en: 'Junior Developer' },
    period: { pt: 'jan/2024 – dez/2025', en: 'Jan/2024 – Dec/2025' },
    location: 'Brasília',
    highlights: {
      pt: [
        'Liderava a estratégia de marketing digital e operações das marcas Konnbini, com foco em escalabilidade, margem e eficiência.',
        'Desenvolvi um sistema de precificação diferenciada por canal de e-commerce, integrado via API ao ERP Bling, automatizando o cálculo de margens por marketplace.',
        'Aplico automação de processos (n8n), integrações via API e desenvolvimento de ferramentas internas para otimizar precificação, cadastro de produtos e gestão de estoque via ERP (Bling).',
      ],
      en: [
        'Led the digital marketing strategy and operations for the Konnbini brands, focused on scalability, margin and efficiency.',
        'Built a per-channel differentiated pricing system for e-commerce, integrated via API with the Bling ERP, automating margin calculation per marketplace.',
        'I apply process automation (n8n), API integrations and internal tooling to optimize pricing, product registration and stock management via the Bling ERP.',
      ],
    },
  },
];
