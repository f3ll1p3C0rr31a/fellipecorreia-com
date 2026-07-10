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
      'Desenvolvedor full-stack com homelab de produção: mais de 70 containers, CI/CD próprio e infraestrutura self-hosted de ponta a ponta — do desenvolvimento à operação.',
    'hero.cv.dev': 'CV Infra/Dev',
    'hero.cv.growth': 'CV Growth',
    'hero.available': 'aberto a vagas de infra / dev',

    'nav.cv': 'currículo',
    'cta.demo': 'DEMO',
    'cta.source': 'CÓDIGO',
    'cta.download': 'baixar PDF',

    'footer.built': 'construído com Astro, servido self-hosted no Jupiter',
    'footer.rights': 'Todos os direitos reservados.',

    'about.kicker': 'Desenvolvimento full-stack com operação real de infraestrutura.',
    'about.p1':
      'Sou desenvolvedor full-stack com experiência prática em infraestrutura e DevOps. Mantenho um homelab de produção com mais de 70 containers em operação contínua — serviços reais, com uptime, monitoramento e resposta a incidentes, não um ambiente de estudo.',
    'about.p2':
      'Antes da transição para tecnologia, atuei anos em marketing, growth e e-commerce, lidando com operação, dados e métricas de negócio. Essa vivência me dá algo que boa parte dos desenvolvedores não tem: clareza sobre o propósito do software e o resultado que ele precisa gerar.',
    'about.p3':
      'No último semestre de Análise e Desenvolvimento de Sistemas, consolido as duas frentes: aplicações full-stack em Next.js e TypeScript e uma stack de DevOps self-hosted de ponta a ponta — de containers e CI/CD a reverse proxy e backups automatizados.',
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
    'homelab.forge': 'até meu git é self-hosted — Forgejo espelhando os repos, rodando agora:',

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
      'Full-stack developer with a production homelab: 70+ containers, my own CI/CD and end-to-end self-hosted infrastructure — from development to operations.',
    'hero.cv.dev': 'Infra/Dev CV',
    'hero.cv.growth': 'Growth CV',
    'hero.available': 'open to infra / dev roles',

    'nav.cv': 'résumé',
    'cta.demo': 'DEMO',
    'cta.source': 'SOURCE',
    'cta.download': 'download PDF',

    'footer.built': 'built with Astro, self-hosted on Jupiter',
    'footer.rights': 'All rights reserved.',

    'about.kicker': 'Full-stack development backed by real infrastructure operations.',
    'about.p1':
      "I'm a full-stack developer with hands-on infrastructure and DevOps experience. I run a production homelab with 70+ containers in continuous operation — real services with uptime, monitoring and incident response, not a study environment.",
    'about.p2':
      "Before moving into tech, I spent years in marketing, growth and e-commerce, working with operations, data and business metrics. That background gives me something many developers lack: clarity about why software exists and the outcome it needs to drive.",
    'about.p3':
      "In the final semester of my Systems Analysis & Development degree, I bring both together: full-stack applications in Next.js and TypeScript and an end-to-end self-hosted DevOps stack — from containers and CI/CD to reverse proxy and automated backups.",
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
    'homelab.forge': 'even my git is self-hosted — Forgejo mirroring the repos, running right now:',

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
