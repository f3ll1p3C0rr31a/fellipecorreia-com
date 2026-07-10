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
      'Portfólio de Fellipe Bayeh Correia — desenvolvedor full-stack e DevOps, com homelab de produção rodando 70+ containers e background em marketing e growth.',
    'boot.skip': '[ ESC ] pular boot',

    'hero.role': 'Full-Stack Dev  ·  DevOps  ·  Self-Hosted Everything',
    'hero.tagline':
      'Rodo um datacenter no meu quarto: 70+ containers, servidor de e-mail próprio, CI/CD self-hosted, IA local. Escrevo o código, subo o deploy — e o uptime é problema meu.',
    'hero.cv.dev': 'CV Infra/Dev',
    'hero.cv.growth': 'CV Growth',
    'hero.available': 'aberto a vagas de infra / dev',

    'nav.cv': 'currículo',
    'cta.demo': 'DEMO',
    'cta.source': 'CÓDIGO',
    'cta.download': 'baixar PDF',

    'footer.built': 'construído com Astro, servido self-hosted no Jupiter',
    'footer.rights': 'Todos os direitos reservados.',

    'about.kicker': 'Não uso a nuvem dos outros. Construí a minha.',
    'about.p1':
      'Sou desenvolvedor full-stack e o cara de infra que a maioria das empresas terceiriza. Aprendi na marra, mantendo um homelab de produção com mais de 70 containers rodando 24/7 — não é lab de estudo: são serviços críticos que quebram às 3 da manhã e eu conserto.',
    'about.p2':
      'Antes de virar dev, vieram anos em marketing e growth — operação, dados, e-commerce. Isso não é ruído no meu currículo: é o que me faz entender por que o software existe, o que o negócio precisa e onde está o dinheiro. Pouco dev enxerga isso.',
    'about.p3':
      'Agora, no último semestre de ADS, transformo essa bagagem em código: full-stack em Next.js/TypeScript e uma stack de DevOps self-hosted de ponta a ponta — do Docker ao Cloudflare Tunnel, do CI/CD ao backup automatizado.',
    'about.status.label': 'status atual',
    'about.status.value': 'ADS · último semestre · caçando vaga de infra/dev',

    'projects.technical': 'projetos técnicos',
    'projects.sites': 'sites no ar',
    'projects.sites.hint': 'trabalho entregue pra clientes reais',
    'projects.viewcase': 'ver case',
    'projects.source.private': 'repo privado',
    'projects.demo.internal': 'ver arquitetura',
    'status.online': 'ONLINE',
    'status.wip': 'WIP',
    'status.archived': 'ARQUIVADO',
    'case.back': 'voltar',
    'case.overview': 'visão geral',
    'case.problem': 'o problema',
    'case.solution': 'a solução',
    'case.features': 'destaques',
    'case.result': 'resultado',
    'case.stack': 'stack',
    'case.links': 'links',

    'homelab.lead':
      'Não é lab de estudo. É um servidor Debian rodando serviços críticos 24/7 — o mesmo tipo de infra que empresas pagam caro pra ter, montada e mantida por mim, sozinho.',
    'homelab.diagram': 'arquitetura de rede',
    'homelab.services': 'serviços em produção',
    'homelab.note': 'exposição só via Cloudflare Tunnel — zero portas abertas no roteador.',

    'exp.lead': 'Anos em marketing e growth antes de migrar pro código. Não é o que quero fazer agora — é a vantagem injusta que levo pro dev.',
    'exp.current': 'atual',

    'contact.lead': 'Procurando alguém que escreve o código e mantém a infra que roda? Bora conversar.',
    'contact.email': 'e-mail',
    'contact.whatsapp': 'whatsapp',
    'contact.whatsapp.cta': 'chamar no WhatsApp',
    'form.name': 'nome',
    'form.email': 'e-mail',
    'form.message': 'mensagem',
    'form.send': 'enviar',
    'form.sending': 'enviando...',
    'form.ok': 'mensagem enviada. respondo em breve.',
    'form.err': 'falhou o envio. tenta de novo ou usa o e-mail acima.',
    'form.invalid': 'preenche nome, e-mail válido e mensagem.',
    'form.or': 'ou pelos canais diretos',
    'contact.cv.title': 'currículo',
    'contact.cv.dev': 'CV Infra/Dev',
    'contact.cv.growth': 'CV Growth',
    'contact.copied': 'copiado!',

    'cv.heading': 'currículo',
    'cv.back': 'voltar ao site',
    'cv.download': 'baixar PDF',
    'cv.print.hint': 'dica: no diálogo de impressão, escolha "Salvar como PDF"',
    'cv.track.dev': 'Infra / Dev',
    'cv.track.growth': 'Growth / Martech',
    'cv.sec.summary': 'resumo',
    'cv.sec.areas': 'áreas de atuação',
    'cv.sec.projects': 'projetos técnicos',
    'cv.sec.stack': 'stack técnico',
    'cv.sec.experience': 'experiência',
    'cv.sec.education': 'formação',
    'cv.sec.languages': 'idiomas',
    'cv.sec.differentials': 'diferenciais',

    'uses.title': 'uses',
    'uses.lead': 'O que uso pra construir e rodar tudo isso. Hardware real, specs puxadas na hora — não é wishlist.',
    'uses.machines': 'máquinas',
    'uses.toolbox': 'ferramentas do dia a dia',
    'uses.selfhosted': 'self-hosted favoritos',
    'nav.uses': 'uses',
  },
  en: {
    'meta.title': 'Fellipe Correia — Growth & Martech Engineer | Full-Stack & DevOps',
    'meta.description':
      'Portfolio of Fellipe Bayeh Correia — full-stack developer and DevOps, running a production homelab with 70+ containers, with a background in marketing and growth.',
    'boot.skip': '[ ESC ] skip boot',

    'hero.role': 'Full-Stack Dev  ·  DevOps  ·  Self-Hosted Everything',
    'hero.tagline':
      "I run a datacenter in my bedroom: 70+ containers, my own mail server, self-hosted CI/CD, local AI. I write the code, ship the deploy — and uptime is my problem.",
    'hero.cv.dev': 'Infra/Dev CV',
    'hero.cv.growth': 'Growth CV',
    'hero.available': 'open to infra / dev roles',

    'nav.cv': 'résumé',
    'cta.demo': 'DEMO',
    'cta.source': 'SOURCE',
    'cta.download': 'download PDF',

    'footer.built': 'built with Astro, self-hosted on Jupiter',
    'footer.rights': 'All rights reserved.',

    'about.kicker': "I don't use someone else's cloud. I built my own.",
    'about.p1':
      "I'm a full-stack developer and the infra guy most companies outsource. I learned it the hard way, running a production homelab with 70+ containers up 24/7 — not a study lab: real critical services that break at 3am, and I'm the one who fixes them.",
    'about.p2':
      "Before becoming a dev came years in marketing and growth — operations, data, e-commerce. That's not noise on my résumé: it's what makes me understand why software exists, what the business needs, and where the money is. Few devs see that.",
    'about.p3':
      "Now, in the final semester of my CS degree, I turn that background into code: full-stack in Next.js/TypeScript and an end-to-end self-hosted DevOps stack — from Docker to Cloudflare Tunnel, from CI/CD to automated backups.",
    'about.status.label': 'current status',
    'about.status.value': 'CS degree · final semester · hunting an infra/dev role',

    'projects.technical': 'technical projects',
    'projects.sites': 'live sites',
    'projects.sites.hint': 'work shipped for real clients',
    'projects.viewcase': 'view case',
    'projects.source.private': 'private repo',
    'projects.demo.internal': 'view architecture',
    'status.online': 'ONLINE',
    'status.wip': 'WIP',
    'status.archived': 'ARCHIVED',
    'case.back': 'back',
    'case.overview': 'overview',
    'case.problem': 'the problem',
    'case.solution': 'the solution',
    'case.features': 'highlights',
    'case.result': 'result',
    'case.stack': 'stack',
    'case.links': 'links',

    'homelab.lead':
      "Not a study lab. A Debian server running critical services 24/7 — the kind of infra companies pay a lot for, built and maintained by me, alone.",
    'homelab.diagram': 'network architecture',
    'homelab.services': 'services in production',
    'homelab.note': 'exposed only through Cloudflare Tunnel — zero open ports on the router.',

    'exp.lead': "Years in marketing and growth before moving into code. Not what I want to do now — it's the unfair advantage I bring to dev.",
    'exp.current': 'current',

    'contact.lead': "Looking for someone who writes the code and keeps the infra it runs on? Let's talk.",
    'contact.email': 'email',
    'contact.whatsapp': 'whatsapp',
    'contact.whatsapp.cta': 'message on WhatsApp',
    'form.name': 'name',
    'form.email': 'email',
    'form.message': 'message',
    'form.send': 'send',
    'form.sending': 'sending...',
    'form.ok': 'message sent. I\'ll reply soon.',
    'form.err': 'send failed. try again or use the email above.',
    'form.invalid': 'fill in name, a valid email and a message.',
    'form.or': 'or through direct channels',
    'contact.cv.title': 'résumé',
    'contact.cv.dev': 'Infra/Dev CV',
    'contact.cv.growth': 'Growth CV',
    'contact.copied': 'copied!',

    'cv.heading': 'résumé',
    'cv.back': 'back to site',
    'cv.download': 'download PDF',
    'cv.print.hint': 'tip: in the print dialog, choose "Save as PDF"',
    'cv.track.dev': 'Infra / Dev',
    'cv.track.growth': 'Growth / Martech',
    'cv.sec.summary': 'summary',
    'cv.sec.areas': 'focus areas',
    'cv.sec.projects': 'technical projects',
    'cv.sec.stack': 'tech stack',
    'cv.sec.experience': 'experience',
    'cv.sec.education': 'education',
    'cv.sec.languages': 'languages',
    'cv.sec.differentials': 'highlights',

    'uses.title': 'uses',
    'uses.lead': "What I use to build and run all of this. Real hardware, specs pulled live — not a wishlist.",
    'uses.machines': 'machines',
    'uses.toolbox': 'daily toolbox',
    'uses.selfhosted': 'self-hosted favorites',
    'nav.uses': 'uses',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
