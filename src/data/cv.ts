import type { Lang } from '../i18n/ui';

type Loc = Record<Lang, string>;
type LocList = Record<Lang, string[]>;

/** Metadados do currículo: título, resumo e áreas de atuação (Infra/Dev). */
export const cvMeta: { title: Loc; summary: Loc; areas: LocList } = {
  title: {
    pt: 'Infraestrutura & DevOps · Full-Stack · Estudante de ADS (últ. semestre)',
    en: 'Infrastructure & DevOps · Full-Stack · CS student (final semester)',
  },
  summary: {
    pt: 'Estudante do último semestre de Análise e Desenvolvimento de Sistemas com experiência prática e autodidata em infraestrutura Linux, containers e desenvolvimento full-stack. Administra um homelab de produção com mais de 70 containers Docker — e-mail próprio (Mailcow), observabilidade (Grafana/Prometheus), automação (n8n) e IA local (Ollama). Constrói e mantém CI/CD próprio com GitHub Actions self-hosted runners, reverse proxy via Nginx e Cloudflare Tunnel, e aplicações web em Next.js/TypeScript com PostgreSQL. Traz ainda uma base sólida em marketing, growth e e-commerce, que dá visão de negócio ao código. Busca posição júnior em Infraestrutura, DevOps ou Desenvolvimento.',
    en: 'Final-semester Systems Analysis & Development student with hands-on, self-taught experience in Linux infrastructure, containers and full-stack development. Runs a production homelab with 70+ Docker containers — own mail server (Mailcow), observability (Grafana/Prometheus), automation (n8n) and local AI (Ollama). Builds and maintains his own CI/CD with GitHub Actions self-hosted runners, reverse proxy via Nginx and Cloudflare Tunnel, and web apps in Next.js/TypeScript with PostgreSQL. Also brings a solid background in marketing, growth and e-commerce that gives business sense to the code. Seeking a junior role in Infrastructure, DevOps or Development.',
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
};

/** Stack técnico do currículo. */
export function cvStack(): { label: string; items: string }[] {
  return [
    { label: 'Linguagens', items: 'TypeScript, JavaScript/Node.js, Python, SQL, Bash, Rust (básico), PHP' },
    { label: 'Front-end', items: 'React, Next.js (App Router/SSR), Astro, Tailwind CSS, shadcn/ui' },
    { label: 'Back-end', items: 'Node.js/Express, Next.js API Routes, NextAuth, Flask, Prisma ORM' },
    { label: 'Bancos', items: 'PostgreSQL (pgvector), MySQL/MariaDB, SQLite, Redis/Valkey, CouchDB' },
    { label: 'DevOps', items: 'Docker, Compose, Portainer, GitHub Actions (self-hosted), Nginx, Cloudflare Tunnel, Tailscale' },
    { label: 'Sistemas', items: 'Linux (Debian, Arch, EndeavourOS), systemd, NFS/Samba, LVM, Restic' },
    { label: 'Observ.', items: 'Grafana, Prometheus, Zabbix, ntopng, Beszel' },
    { label: 'Automação/IA', items: 'n8n, Make, Ollama (LLMs locais), integrações REST' },
  ];
}

export const education: { course: Loc; school: string; note?: Loc }[] = [
  {
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis & Development' },
    school: 'Estácio',
    note: { pt: 'conclusão prevista 2026', en: 'expected completion 2026' },
  },
];

export const cvLanguages: { name: Loc; level: Loc }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'fluente', en: 'fluent' } },
  { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'intermediário/avançado', en: 'intermediate/advanced' } },
];

export const differentials: LocList = {
  pt: [
    'Infra própria em produção real, autodidata há anos — serviços críticos 24/7, não ambiente de laboratório.',
    'Experiência com o ciclo completo: desenvolvimento, containerização, CI/CD e operação em produção.',
    'Resolução hands-on de problemas reais de rede, storage, backup e segurança.',
    'Base em marketing, growth e e-commerce — entende o negócio por trás do software.',
    'Inglês fluente — diferencial para squads e vagas remotas internacionais.',
  ],
  en: [
    'Own infra in real production, self-taught for years — critical 24/7 services, not a lab environment.',
    'Experience with the full cycle: development, containerization, CI/CD and production operation.',
    'Hands-on troubleshooting of real network, storage, backup and security problems.',
    'Background in marketing, growth and e-commerce — understands the business behind the software.',
    'Fluent English — an edge for squads and international remote roles.',
  ],
};
