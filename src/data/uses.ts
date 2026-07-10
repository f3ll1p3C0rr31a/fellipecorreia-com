import type { Lang } from '../i18n/ui';

export interface Machine {
  host: string;
  role: Record<Lang, string>;
  specs: { k: string; v: string }[];
}

/** Máquinas reais — specs puxadas direto do hardware. */
export const machines: Machine[] = [
  {
    host: 'hera',
    role: { pt: 'daily driver — onde escrevo o código', en: 'daily driver — where I write the code' },
    specs: [
      { k: 'OS', v: 'Arch Linux (linux-zen)' },
      { k: 'CPU', v: 'Intel i7-8700 · 12 threads' },
      { k: 'RAM', v: '32 GB' },
      { k: 'GPU', v: 'NVIDIA GTX 1060 6GB' },
      { k: 'DE', v: 'KDE Plasma' },
      { k: 'Shell', v: 'zsh' },
    ],
  },
  {
    host: 'jupiter',
    role: { pt: 'servidor de produção — onde tudo roda', en: 'production server — where everything runs' },
    specs: [
      { k: 'OS', v: 'Debian 12 (bookworm)' },
      { k: 'CPU', v: 'Intel i7-6500U · 4 threads' },
      { k: 'RAM', v: '12 GB' },
      { k: 'Storage', v: '~6.7 TB (SSD + 3 HDD)' },
      { k: 'Containers', v: '87 · Docker Compose' },
      { k: 'Exposure', v: 'Cloudflare Tunnel · 0 portas' },
    ],
  },
];

/** Ferramentas do dia a dia (chave: valor). */
export function toolbox(lang: Lang) {
  return [
    { k: 'Editor', v: 'VS Code' },
    { k: 'Terminal', v: 'zsh + tmux' },
    { k: lang === 'pt' ? 'Controle de versão' : 'Version control', v: 'git + GitHub Actions (self-hosted)' },
    { k: lang === 'pt' ? 'Containers' : 'Containers', v: 'Docker · Docker Compose · Portainer' },
    { k: lang === 'pt' ? 'Proxy & rede' : 'Proxy & net', v: 'Nginx Proxy Manager · Cloudflare Tunnel · Tailscale' },
    { k: lang === 'pt' ? 'Automação & IA' : 'Automation & AI', v: 'n8n · Ollama (LLMs locais)' },
    { k: lang === 'pt' ? 'Observabilidade' : 'Observability', v: 'Grafana · Prometheus · Beszel' },
    { k: 'Backup', v: 'Restic (agendado)' },
  ];
}

/** Serviços self-hosted favoritos. */
export const selfHosted = [
  'Mailcow (e-mail)', 'Nextcloud', 'Immich', 'Grafana', 'n8n', 'Ollama',
  'Home Assistant', 'Jellyfin', 'Bitwarden', 'Pi-hole', 'Portainer', 'Paperless',
];
