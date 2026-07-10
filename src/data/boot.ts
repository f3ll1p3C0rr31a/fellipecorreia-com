import type { Lang } from '../i18n/ui';

/** Copy do boot — estilo POST/NFO. A última linha digita char a char. */
export const bootLines: Record<Lang, string[]> = {
  pt: [
    'FBC-BIOS v4.0 — bayeh systems inc.',
    '',
    '[ OK ] boot linux-zen · i7 · 32G ram',
    '[ OK ] docker compose up -d ..... 87 containers',
    '[ OK ] mailcow · grafana · n8n · ollama · restic',
    '[ OK ] cloudflare tunnel up · 0 portas abertas',
    '[ OK ] ci/cd self-hosted runners ......... online',
    '',
    'iniciando fellipecorreia.com ...',
  ],
  en: [
    'FBC-BIOS v4.0 — bayeh systems inc.',
    '',
    '[ OK ] boot linux-zen · i7 · 32G ram',
    '[ OK ] docker compose up -d ..... 87 containers',
    '[ OK ] mailcow · grafana · n8n · ollama · restic',
    '[ OK ] cloudflare tunnel up · 0 open ports',
    '[ OK ] ci/cd self-hosted runners ......... online',
    '',
    'booting fellipecorreia.com ...',
  ],
};
