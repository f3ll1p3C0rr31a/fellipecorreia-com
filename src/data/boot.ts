import type { Lang } from '../i18n/ui';

/** Copy do boot — rascunho, editar à vontade. A última linha digita char a char. */
export const bootLines: Record<Lang, string[]> = {
  pt: [
    'FBC-BIOS v3.7 — bayeh systems inc.',
    '',
    '[ OK ] mount /dev/growth ............... 15y',
    '[ OK ] docker compose up -d ..... 70+ containers',
    '[ OK ] mailcow grafana prometheus n8n ollama',
    '[AVISO] transição de carreira detectada',
    '[ OK ] link marketing.so -> fullstack.ts',
    '',
    'iniciando fellipecorreia.com ...',
  ],
  en: [
    'FBC-BIOS v3.7 — bayeh systems inc.',
    '',
    '[ OK ] mount /dev/growth ............... 15y',
    '[ OK ] docker compose up -d ..... 70+ containers',
    '[ OK ] mailcow grafana prometheus n8n ollama',
    '[WARN] career transition detected',
    '[ OK ] link marketing.so -> fullstack.ts',
    '',
    'booting fellipecorreia.com ...',
  ],
};
