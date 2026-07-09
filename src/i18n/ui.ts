export const languages = {
  pt: 'PT',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'meta.title': 'Fellipe Correia — Growth & Martech Engineer | Full-Stack & DevOps',
    'meta.description':
      'Portfólio de Fellipe Bayeh Correia: 15 anos de growth/marketing + engenharia full-stack, DevOps e homelab de produção com 70+ containers.',
    'boot.skip': '[ ESC ] pular boot',
    'hero.role': 'Growth & Martech Engineer | Full-Stack & DevOps',
  },
  en: {
    'meta.title': 'Fellipe Correia — Growth & Martech Engineer | Full-Stack & DevOps',
    'meta.description':
      'Portfolio of Fellipe Bayeh Correia: 15 years of growth/marketing + full-stack engineering, DevOps and a production homelab running 70+ containers.',
    'boot.skip': '[ ESC ] skip boot',
    'hero.role': 'Growth & Martech Engineer | Full-Stack & DevOps',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
