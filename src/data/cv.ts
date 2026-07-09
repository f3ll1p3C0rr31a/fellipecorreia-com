import type { Lang } from '../i18n/ui';

export type Track = 'dev' | 'growth';
type Loc = Record<Lang, string>;
type LocList = Record<Lang, string[]>;

/** Metadados por track: título, resumo e áreas de atuação. */
export const cvMeta: Record<Track, { title: Loc; summary: Loc; areas: LocList }> = {
  dev: {
    title: {
      pt: 'Infraestrutura & DevOps · Full-Stack · Estudante de ADS (últ. semestre)',
      en: 'Infrastructure & DevOps · Full-Stack · CS student (final semester)',
    },
    summary: {
      pt: 'Estudante do último semestre de Análise e Desenvolvimento de Sistemas com experiência prática e autodidata em infraestrutura Linux, containers e desenvolvimento full-stack. Administra um homelab de produção com mais de 70 containers Docker — e-mail próprio (Mailcow), observabilidade (Grafana/Prometheus), automação (n8n) e IA local (Ollama). Constrói e mantém CI/CD próprio com GitHub Actions self-hosted runners, reverse proxy via Nginx e Cloudflare Tunnel, e aplicações web em Next.js/TypeScript com PostgreSQL. Busca posição júnior em Infraestrutura, DevOps ou Desenvolvimento.',
      en: 'Final-semester Systems Analysis & Development student with hands-on, self-taught experience in Linux infrastructure, containers and full-stack development. Runs a production homelab with 70+ Docker containers — own mail server (Mailcow), observability (Grafana/Prometheus), automation (n8n) and local AI (Ollama). Builds and maintains his own CI/CD with GitHub Actions self-hosted runners, reverse proxy via Nginx and Cloudflare Tunnel, and web apps in Next.js/TypeScript with PostgreSQL. Seeking a junior role in Infrastructure, DevOps or Development.',
    },
    areas: {
      pt: [
        'Infraestrutura Linux e administração de servidores',
        'Docker, Docker Compose e orquestração de containers',
        'CI/CD (GitHub Actions) e automação de deploy',
        'Reverse proxy e exposição segura (Nginx, Cloudflare Tunnel)',
        'Full-Stack (Next.js, TypeScript, React, Python)',
        'Bancos relacionais e não-relacionais',
        'Monitoramento e observabilidade',
      ],
      en: [
        'Linux infrastructure and server administration',
        'Docker, Docker Compose and container orchestration',
        'CI/CD (GitHub Actions) and deploy automation',
        'Reverse proxy and secure exposure (Nginx, Cloudflare Tunnel)',
        'Full-Stack (Next.js, TypeScript, React, Python)',
        'Relational and non-relational databases',
        'Monitoring and observability',
      ],
    },
  },
  growth: {
    title: {
      pt: 'Growth & Martech Engineer · Full-Stack & DevOps · Estudante de ADS',
      en: 'Growth & Martech Engineer · Full-Stack & DevOps · CS student',
    },
    summary: {
      pt: 'Profissional em transição estratégica para Tecnologia, no último semestre de ADS. Une 15 anos de liderança em Marketing, Growth e Operações — atualmente Diretor de Marketing em holding de varejo — com experiência prática e autodidata em desenvolvimento full-stack e infraestrutura self-hosted (homelab de 70+ containers, CI/CD próprio, projetos em Next.js/TypeScript/PostgreSQL). Perfil raro que combina visão de negócio, dados e growth com capacidade real de execução técnica.',
      en: 'Professional in a strategic transition into Tech, in the final semester of a CS degree. Combines 15 years of leadership in Marketing, Growth and Operations — currently Marketing Director at a retail holding — with hands-on, self-taught full-stack development and self-hosted infrastructure (70+ container homelab, own CI/CD, projects in Next.js/TypeScript/PostgreSQL). A rare profile blending business, data and growth vision with real technical execution.',
    },
    areas: {
      pt: [
        'Martech, Growth Engineering e Automação de Marketing',
        'Full-Stack (Next.js, TypeScript, React, Python)',
        'Integração de APIs e IA aplicada (n8n, Make, LLMs)',
        'DevOps e Infraestrutura Linux (Docker, CI/CD, Nginx, Cloudflare)',
        'Marketing Digital, E-commerce e Marketplaces',
        'Liderança de equipes e operações comerciais',
      ],
      en: [
        'Martech, Growth Engineering and Marketing Automation',
        'Full-Stack (Next.js, TypeScript, React, Python)',
        'API integration and applied AI (n8n, Make, LLMs)',
        'DevOps and Linux Infrastructure (Docker, CI/CD, Nginx, Cloudflare)',
        'Digital Marketing, E-commerce and Marketplaces',
        'Team leadership and commercial operations',
      ],
    },
  },
};

/** Stack por track (o growth acrescenta a linha de Growth/Martech). */
export function cvStack(track: Track): { label: string; items: string }[] {
  const base = [
    { label: 'Linguagens', items: 'TypeScript, JavaScript/Node.js, Python, SQL, Bash, Rust (básico), PHP' },
    { label: 'Front-end', items: 'React, Next.js (App Router/SSR), Astro, Tailwind CSS, shadcn/ui' },
    { label: 'Back-end', items: 'Node.js/Express, Next.js API Routes, NextAuth, Flask, Prisma ORM' },
    { label: 'Bancos', items: 'PostgreSQL (pgvector), MySQL/MariaDB, SQLite, Redis/Valkey, CouchDB' },
    { label: 'DevOps', items: 'Docker, Compose, Portainer, GitHub Actions (self-hosted), Nginx, Cloudflare Tunnel, Tailscale' },
    { label: 'Sistemas', items: 'Linux (Debian, Arch, EndeavourOS), systemd, NFS/Samba, LVM, Restic' },
    { label: 'Observ.', items: 'Grafana, Prometheus, Zabbix, ntopng, Beszel' },
    { label: 'Automação/IA', items: 'n8n, Make, Ollama (LLMs locais), integrações REST' },
  ];
  if (track === 'growth') {
    base.push({
      label: 'Growth/Martech',
      items: 'Marketplaces (Shopee, TikTok Shop, Amazon, Mercado Livre), ERP Bling, CRM (GoHighLevel, Monday, ClickUp), SEO/SEM, Analytics',
    });
  }
  return base;
}

export const education: { course: Loc; school: string; note?: Loc }[] = [
  {
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis & Development' },
    school: 'IESB',
    note: { pt: 'conclusão prevista 2026', en: 'expected completion 2026' },
  },
  { course: { pt: 'MBA em Marketing Digital, Growth e IA', en: 'MBA in Digital Marketing, Growth & AI' }, school: 'Ibmec' },
  { course: { pt: 'Pós-Graduação em Gerenciamento de Projetos', en: 'Postgrad in Project Management' }, school: 'FGV' },
  { course: { pt: 'Pós-Graduação em Produção Audiovisual Avançado', en: 'Postgrad in Advanced Audiovisual Production' }, school: 'ESPM' },
  { course: { pt: 'Bacharelado em Comunicação Social (Publicidade)', en: 'BA in Communications (Advertising)' }, school: 'ESPM' },
];

export const cvLanguages: { name: Loc; level: Loc }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'fluente', en: 'fluent' } },
  { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'intermediário/avançado', en: 'intermediate/advanced' } },
];

export const differentials: Record<Track, LocList> = {
  dev: {
    pt: [
      'Infra própria em produção real, autodidata há anos — serviços críticos 24/7, não ambiente de laboratório.',
      'Experiência com o ciclo completo: desenvolvimento, containerização, CI/CD e operação em produção.',
      'Resolução hands-on de problemas reais de rede, storage, backup e segurança.',
      'Inglês fluente — diferencial para squads e vagas remotas internacionais.',
    ],
    en: [
      'Own infra in real production, self-taught for years — critical 24/7 services, not a lab environment.',
      'Experience with the full cycle: development, containerization, CI/CD and production operation.',
      'Hands-on troubleshooting of real network, storage, backup and security problems.',
      'Fluent English — an edge for squads and international remote roles.',
    ],
  },
  growth: {
    pt: [
      'Combinação rara de liderança executiva sênior com execução técnica hands-on (full-stack + DevOps).',
      'Infraestrutura self-hosted própria em produção real, administrada de forma autodidata.',
      'Automação e integração de APIs aplicada tanto a growth quanto a desenvolvimento de software.',
      'Inglês fluente — diferencial para posições remotas internacionais.',
    ],
    en: [
      'Rare mix of senior executive leadership with hands-on technical execution (full-stack + DevOps).',
      'Own self-hosted infrastructure in real production, self-taught.',
      'Automation and API integration applied to both growth and software development.',
      'Fluent English — an edge for international remote roles.',
    ],
  },
};
