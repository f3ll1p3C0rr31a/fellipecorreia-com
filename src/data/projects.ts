import type { Lang } from '../i18n/ui';

type Loc = Record<Lang, string>;

export interface CaseDetail {
  overview: Loc;
  problem: Loc;
  solution: Loc;
  features: Record<Lang, string[]>;
  result: Loc;
}

export interface Project {
  slug: string;
  title: string;
  asciiTag: string;
  lane: 'technical' | 'sites';
  status: 'online' | 'wip' | 'archived';
  stack: string[];
  demo?: string; // URL externa
  demoAnchor?: string; // âncora interna (ex: homelab)
  github?: string;
  sourcePublic: boolean;
  order: number;
  accent: 'acid' | 'volt';
  tagline: Loc;
  detail?: CaseDetail;
}

export const projects: Project[] = [
  {
    slug: 'jupiter',
    title: 'Homelab "Jupiter"',
    asciiTag: 'JUP-00',
    lane: 'technical',
    status: 'online',
    stack: ['Docker', 'Compose', 'Nginx', 'Cloudflare Tunnel', 'Mailcow', 'Grafana', 'n8n', 'Ollama', 'Restic'],
    demoAnchor: '#homelab',
    github: 'https://github.com/f3ll1p3C0rr31a/Jupiter-V2',
    sourcePublic: false,
    order: 0,
    accent: 'volt',
    tagline: {
      pt: 'Datacenter caseiro: 70+ containers em produção 24/7. E-mail próprio, observabilidade, CI/CD e IA local.',
      en: 'A datacenter at home: 70+ containers in production 24/7. Own mail server, observability, CI/CD and local AI.',
    },
  },
  {
    slug: 'finances',
    title: 'Finances',
    asciiTag: 'FIN-01',
    lane: 'technical',
    status: 'online',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Recharts', 'Docker'],
    demo: 'https://finances.fellipecorreia.com',
    github: 'https://github.com/f3ll1p3C0rr31a/finances',
    sourcePublic: true,
    order: 1,
    accent: 'acid',
    tagline: {
      pt: 'Sistema de orçamento residencial full-stack. Meu projeto mais completo — auth, modelagem relacional e dashboards.',
      en: 'Full-stack household budgeting system. My most complete project — auth, relational modeling and dashboards.',
    },
    detail: {
      overview: {
        pt: 'Aplicação full-stack de controle orçamentário residencial, containerizada e com deploy via CI/CD próprio (GitHub Actions self-hosted runner). É o projeto onde exercito o ciclo completo: da modelagem de dados ao pipeline de produção.',
        en: 'Full-stack household budgeting app, containerized and deployed through my own CI/CD (self-hosted GitHub Actions runner). The project where I exercise the full cycle: from data modeling to a production pipeline.',
      },
      problem: {
        pt: 'Planilhas não escalam pra controle financeiro sério: sem autenticação real, sem múltiplos usuários, sem visualização decente. Eu queria uma ferramenta minha, com dados sob meu controle.',
        en: 'Spreadsheets do not scale for serious financial control: no real auth, no multi-user, no decent visualization. I wanted my own tool, with data under my control.',
      },
      solution: {
        pt: 'Next.js (App Router) com API Routes, autenticação via NextAuth, PostgreSQL modelado com Prisma ORM e dashboards em Recharts. Tudo empacotado em Docker e publicado no meu homelab por um pipeline de CI/CD self-hosted.',
        en: 'Next.js (App Router) with API Routes, NextAuth authentication, PostgreSQL modeled with Prisma ORM and Recharts dashboards. All packaged in Docker and shipped to my homelab through a self-hosted CI/CD pipeline.',
      },
      features: {
        pt: ['Autenticação e sessão com NextAuth', 'Modelagem relacional com Prisma + PostgreSQL', 'Dashboards e métricas com Recharts', 'Containerizado com Docker', 'Deploy automático via GitHub Actions (runner self-hosted)'],
        en: ['Auth and sessions with NextAuth', 'Relational modeling with Prisma + PostgreSQL', 'Dashboards and metrics with Recharts', 'Containerized with Docker', 'Automatic deploy via GitHub Actions (self-hosted runner)'],
      },
      result: {
        pt: 'Rodando em produção no meu homelab, atrás de Cloudflare Tunnel. Cada push na main builda a imagem e sobe o container sozinho.',
        en: 'Running in production on my homelab, behind Cloudflare Tunnel. Every push to main builds the image and ships the container on its own.',
      },
    },
  },
  {
    slug: 'mng',
    title: 'The Library of Dream',
    asciiTag: 'TLD-02',
    lane: 'technical',
    status: 'online',
    stack: ['TypeScript', 'Node.js', 'Docker', 'PostgreSQL'],
    demo: 'https://tld.fellipecorreia.com',
    github: 'https://github.com/f3ll1p3C0rr31a/mng',
    sourcePublic: true,
    order: 2,
    accent: 'acid',
    tagline: {
      pt: 'Gestão de biblioteca colaborativa. Empréstimo baseado em créditos, com monetização via Pix/assinaturas planejada.',
      en: 'Collaborative library management. Credit-based lending, with Pix/subscription monetization planned.',
    },
  },
  {
    slug: 'classlog',
    title: 'ClassLog',
    asciiTag: 'CLS-03',
    lane: 'technical',
    status: 'wip',
    stack: ['Node.js', 'JavaScript', 'Capacitor', 'CI/CD'],
    github: 'https://github.com/f3ll1p3C0rr31a/ClassLog',
    sourcePublic: true,
    order: 3,
    accent: 'volt',
    tagline: {
      pt: 'Aplicação web + app Android com API própria e empacotamento nativo via Capacitor. Pipeline de CI/CD dedicado.',
      en: 'Web app + Android app with its own API and native packaging via Capacitor. Dedicated CI/CD pipeline.',
    },
  },
  {
    slug: 'techservice',
    title: 'Tech Service Brasília',
    asciiTag: 'WEB-01',
    lane: 'sites',
    status: 'online',
    stack: ['Astro', 'Tailwind'],
    demo: 'https://tech.fellipecorreia.com',
    sourcePublic: false,
    order: 4,
    accent: 'acid',
    tagline: {
      pt: 'Site institucional — serviços de TI, manutenção e suporte técnico.',
      en: 'Business site — IT services, maintenance and tech support.',
    },
  },
  {
    slug: 'marvin',
    title: 'Marvin Motos',
    asciiTag: 'WEB-02',
    lane: 'sites',
    status: 'online',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://marvin.fellipecorreia.com',
    sourcePublic: false,
    order: 5,
    accent: 'acid',
    tagline: {
      pt: 'Catálogo de motos seminovas em Brasília.',
      en: 'Used-motorcycle catalog in Brasília.',
    },
  },
  {
    slug: 'fatima',
    title: 'Escola Fátima',
    asciiTag: 'WEB-03',
    lane: 'sites',
    status: 'online',
    stack: ['WordPress', 'PHP'],
    demo: 'https://fatima.fellipecorreia.com',
    sourcePublic: false,
    order: 6,
    accent: 'acid',
    tagline: {
      pt: 'Site institucional — Escola Franciscana Nossa Senhora de Fátima.',
      en: 'Institutional site — Escola Franciscana Nossa Senhora de Fátima.',
    },
  },
];

export const technicalProjects = projects.filter((p) => p.lane === 'technical').sort((a, b) => a.order - b.order);
export const siteProjects = projects.filter((p) => p.lane === 'sites').sort((a, b) => a.order - b.order);
export const detailedProjects = projects.filter((p) => p.detail);
