/** Config central do site — fonte única de contato, social e navegação. */

export const site = {
  name: 'Fellipe Bayeh Correia',
  shortName: 'Fellipe Correia',
  handle: 'fellipe@jupiter',
  location: { pt: 'Brasília, DF', en: 'Brasília, BR' },
  email: 'fellipebayeh@gmail.com',
  phone: '(61) 99339-7877', // profissional
  whatsapp: {
    href: 'https://wa.me/5561993397877',
  },
  social: {
    github: 'https://github.com/f3ll1p3C0rr31a',
    linkedin: 'https://www.linkedin.com/in/f3llipecorreia',
  },
  // webhook n8n do formulário de contato (produção)
  contactWebhook: 'https://n8n.fellipecorreia.com/webhook/contato-site',
} as const;

/** CVs em dois tracks — a rota /cv renderiza a partir de src/data/cv.ts. */
export const cvTracks = ['growth', 'dev'] as const;
export type CvTrack = (typeof cvTracks)[number];

/** Âncoras da navegação single-page (ordem = ordem visual). */
export const navSections = [
  { id: 'sobre', pt: 'sobre', en: 'about', cmd: 'cat sobre.md', accent: 'acid' },
  { id: 'skills', pt: 'skills', en: 'skills', cmd: 'neofetch --skills', accent: 'volt' },
  { id: 'projetos', pt: 'projetos', en: 'projects', cmd: 'ls -la ~/projetos', accent: 'acid' },
  { id: 'homelab', pt: 'homelab', en: 'homelab', cmd: 'docker ps | wc -l', accent: 'volt' },
  { id: 'experiencia', pt: 'experiência', en: 'experience', cmd: 'git log --career', accent: 'acid' },
  { id: 'contato', pt: 'contato', en: 'contact', cmd: './contato.sh', accent: 'volt' },
] as const;
