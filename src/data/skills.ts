import type { Lang } from '../i18n/ui';

/** Linhas de "sistema" no topo do neofetch (chave: valor temático). */
export function sysinfo(lang: Lang) {
  return [
    { k: 'OS', v: 'Full-Stack Dev + DevOps' },
    { k: 'Host', v: 'Homelab "Jupiter"' },
    { k: 'Kernel', v: 'Linux (Debian / Arch)' },
    { k: 'Uptime', v: lang === 'pt' ? '70+ containers · 24/7 em produção' : '70+ containers · 24/7 in production' },
    { k: 'WM', v: 'Docker Compose' },
    { k: 'Shell', v: 'zsh · bash' },
  ];
}

/** Categorias de skill — chave curta (alinha no neofetch) + itens. */
export const skills: { key: string; items: string[] }[] = [
  { key: 'Langs', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash', 'Rust*', 'PHP'] },
  { key: 'Front', items: ['React', 'Next.js', 'Astro', 'Tailwind', 'shadcn/ui'] },
  { key: 'Back', items: ['Node/Express', 'Next API', 'NextAuth', 'Flask', 'Prisma'] },
  { key: 'Data', items: ['PostgreSQL', 'MariaDB', 'SQLite', 'Redis', 'CouchDB'] },
  { key: 'Docker', items: ['Docker', 'Compose', 'Portainer', 'GH Actions (self-hosted)'] },
  { key: 'Net', items: ['Nginx', 'NPM', 'Cloudflare Tunnel', 'Tailscale', "Let's Encrypt"] },
  { key: 'OS', items: ['Debian', 'Arch', 'EndeavourOS', 'systemd'] },
  { key: 'Backup', items: ['NFS', 'Samba', 'LVM', 'Restic'] },
  { key: 'Observ', items: ['Grafana', 'Prometheus', 'Zabbix', 'ntopng', 'Beszel'] },
  { key: 'Auto/AI', items: ['n8n', 'Make', 'Ollama', 'REST APIs'] },
];

/** Blocos de cor do rodapé do neofetch. */
export const paletteBlocks = ['#11012e', '#2a0c62', '#ff018f', '#ffcc00', '#01f0ff', '#e8e4f0'];
