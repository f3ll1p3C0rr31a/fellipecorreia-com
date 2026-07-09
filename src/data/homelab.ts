import type { Lang } from '../i18n/ui';

/** Números de destaque da seção Homelab. */
export function homelabStats(lang: Lang) {
  return [
    { n: '70+', label: lang === 'pt' ? 'containers Docker' : 'Docker containers' },
    { n: '24/7', label: lang === 'pt' ? 'em produção' : 'in production' },
    { n: '0', label: lang === 'pt' ? 'portas abertas' : 'open ports' },
    { n: '1', label: lang === 'pt' ? 'servidor de e-mail próprio' : 'own mail server' },
  ];
}

/** Serviços agrupados por categoria (mostra a amplitude — sem links p/ painéis). */
export const homelabServices: { group: string; items: string[] }[] = [
  { group: 'Observability', items: ['Grafana', 'Prometheus', 'Zabbix', 'ntopng', 'Beszel'] },
  { group: 'Automation/AI', items: ['n8n', 'Ollama', 'Evolution API'] },
  { group: 'Storage', items: ['Nextcloud', 'Immich', 'Samba/NFS'] },
  { group: 'Comms', items: ['Mailcow', 'Mattermost'] },
  { group: 'IoT', items: ['Home Assistant', 'Zigbee2MQTT', 'Mosquitto'] },
  { group: 'Media', items: ['Jellyfin', 'Plex', '*arr stack'] },
  { group: 'Infra', items: ['Portainer', 'Nginx PM', 'Pi-hole', 'Bitwarden'] },
  { group: 'Backup', items: ['Restic', 'LVM'] },
];
