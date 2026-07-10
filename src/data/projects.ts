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
  shot?: string; // screenshot do demo (webp em /shots)
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
    detail: {
      overview: {
        pt: 'Um servidor Debian rodando 87 containers Docker em produção — de graça, na minha casa, num CPU de notebook (Intel i7-6500U, 4 threads, 12 GB de RAM). Não é homelab de brincadeira: são serviços reais que eu e outras pessoas usamos todo dia.',
        en: 'A Debian server running 87 Docker containers in production — for free, at home, on a laptop-class CPU (Intel i7-6500U, 4 threads, 12 GB RAM). Not a toy homelab: real services I and others use every day.',
      },
      problem: {
        pt: 'Depender da nuvem dos outros custa caro, tira o controle dos dados e não ensina nada sobre operar infraestrutura de verdade. Eu queria o oposto: dono da stack inteira, do metal ao domínio.',
        en: "Relying on someone else's cloud is expensive, takes away control of your data, and teaches nothing about actually operating infrastructure. I wanted the opposite: owner of the whole stack, from metal to domain.",
      },
      solution: {
        pt: 'Docker Compose orquestrando tudo, Nginx Proxy Manager de reverse proxy e Cloudflare Tunnel expondo os serviços sem abrir uma única porta no roteador. CI/CD com GitHub Actions self-hosted runners, backups agendados com Restic e observabilidade com Grafana/Prometheus.',
        en: 'Docker Compose orchestrating everything, Nginx Proxy Manager as reverse proxy and Cloudflare Tunnel exposing services without opening a single port on the router. CI/CD with GitHub Actions self-hosted runners, scheduled Restic backups and Grafana/Prometheus observability.',
      },
      features: {
        pt: ['Servidor de e-mail completo próprio (Mailcow: Postfix, Dovecot, Rspamd, DKIM/SPF)', 'Observabilidade: Grafana, Prometheus, Zabbix, Beszel', 'Automação (n8n) e IA local (Ollama)', 'Storage e mídia: Nextcloud, Immich, Jellyfin', 'IoT: Home Assistant, Zigbee2MQTT', 'Backups automatizados com Restic · ~6,7 TB de storage'],
        en: ['Full own mail server (Mailcow: Postfix, Dovecot, Rspamd, DKIM/SPF)', 'Observability: Grafana, Prometheus, Zabbix, Beszel', 'Automation (n8n) and local AI (Ollama)', 'Storage and media: Nextcloud, Immich, Jellyfin', 'IoT: Home Assistant, Zigbee2MQTT', 'Automated Restic backups · ~6.7 TB of storage'],
      },
      result: {
        pt: 'É a infra que hospeda este site e todos os projetos do portfólio. Uptime medido em dias, deploy automático a cada push, zero portas abertas. É o meu currículo de DevOps rodando de verdade.',
        en: "It's the infra hosting this very site and every project in the portfolio. Uptime measured in days, automatic deploy on every push, zero open ports. It's my DevOps résumé actually running.",
      },
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
    shot: '/shots/finances.webp',
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
    shot: '/shots/tld.webp',
    github: 'https://github.com/f3ll1p3C0rr31a/mng',
    sourcePublic: true,
    order: 2,
    accent: 'acid',
    tagline: {
      pt: 'Gestão de biblioteca colaborativa. Empréstimo baseado em créditos, com monetização via Pix/assinaturas planejada.',
      en: 'Collaborative library management. Credit-based lending, with Pix/subscription monetization planned.',
    },
    detail: {
      overview: {
        pt: 'Sistema de gestão de uma biblioteca colaborativa, onde o acervo é compartilhado pela comunidade e o empréstimo funciona por um sistema de créditos. Construído em TypeScript e containerizado com Docker.',
        en: 'Management system for a collaborative library, where the collection is shared by the community and lending works through a credit system. Built in TypeScript and containerized with Docker.',
      },
      problem: {
        pt: 'Compartilhar acervo numa comunidade sem sistema vira bagunça: ninguém sabe quem está com o quê, não há responsabilização nem incentivo pra devolver. Faltava uma economia interna que fizesse o empréstimo girar de forma justa.',
        en: 'Sharing a collection in a community without a system becomes chaos: nobody knows who has what, there is no accountability or incentive to return. It needed an internal economy to make lending flow fairly.',
      },
      solution: {
        pt: 'Um sistema de créditos onde emprestar e devolver movimenta saldo, criando incentivo natural. Backend em TypeScript, empacotado em Docker e publicado no homelab. Integração de pagamentos (Pix/assinaturas) planejada pra monetização.',
        en: 'A credit system where lending and returning move balance, creating natural incentive. TypeScript backend, packaged in Docker and shipped to the homelab. Payment integration (Pix/subscriptions) planned for monetization.',
      },
      features: {
        pt: ['Empréstimo baseado em créditos', 'Gestão de acervo e usuários', 'Backend TypeScript containerizado', 'Deploy no homelab próprio', 'Monetização via Pix/assinaturas (planejado)'],
        en: ['Credit-based lending', 'Collection and user management', 'Containerized TypeScript backend', 'Deployed to the own homelab', 'Pix/subscription monetization (planned)'],
      },
      result: {
        pt: 'No ar em tld.fellipecorreia.com, rodando na minha infra atrás de Cloudflare Tunnel.',
        en: 'Live at tld.fellipecorreia.com, running on my infra behind Cloudflare Tunnel.',
      },
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
    detail: {
      overview: {
        pt: 'Aplicação para registro de ocorrências e diário de classe, disponível como app web e como app Android nativo. Um único código empacotado pros dois mundos via Capacitor, com API própria e pipeline de deploy dedicado.',
        en: 'App for logging class records and occurrences, available as a web app and a native Android app. A single codebase packaged for both worlds via Capacitor, with its own API and a dedicated deploy pipeline.',
      },
      problem: {
        pt: 'Registro em papel se perde, não é pesquisável e mora numa gaveta. A informação precisava virar dado: acessível no navegador e no celular, com histórico consultável.',
        en: 'Paper records get lost, are not searchable and live in a drawer. The information needed to become data: accessible in the browser and on the phone, with a searchable history.',
      },
      solution: {
        pt: 'App web em Node.js/JavaScript com API própria, empacotado como app Android nativo via Capacitor pra rodar offline no celular. CI/CD dedicado com runner self-hosted builda e publica a cada mudança.',
        en: 'Web app in Node.js/JavaScript with its own API, packaged as a native Android app via Capacitor to run offline on the phone. Dedicated CI/CD with a self-hosted runner builds and ships on every change.',
      },
      features: {
        pt: ['App web + Android nativo (Capacitor) do mesmo código', 'API própria', 'Histórico consultável', 'Funciona offline no celular (PWA/nativo)', 'CI/CD dedicado com runner self-hosted'],
        en: ['Web app + native Android (Capacitor) from one codebase', 'Own API', 'Searchable history', 'Works offline on the phone (PWA/native)', 'Dedicated CI/CD with self-hosted runner'],
      },
      result: {
        pt: 'Em desenvolvimento ativo, já empacotado e rodando no Android com build automatizado.',
        en: 'In active development, already packaged and running on Android with an automated build.',
      },
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
    shot: '/shots/tech.webp',
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
    shot: '/shots/marvin.webp',
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
