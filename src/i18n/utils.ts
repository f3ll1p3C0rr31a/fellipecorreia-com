import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefixa um caminho com o locale (PT na raiz, EN sob /en/). */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'pt') return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
}

/** Caminho equivalente da página no outro idioma (pro toggle PT/EN). */
export function altLangPath(url: URL): { lang: Lang; path: string } {
  const lang = getLangFromUrl(url);
  if (lang === 'en') {
    return { lang: 'pt', path: url.pathname.replace(/^\/en/, '') || '/' };
  }
  return { lang: 'en', path: `/en${url.pathname}`.replace(/\/$/, '') || '/en' };
}
