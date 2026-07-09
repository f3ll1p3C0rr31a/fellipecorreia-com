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

/** Caminho equivalente da página no outro idioma (pro toggle PT/EN). */
export function altLangPath(url: URL): { lang: Lang; path: string } {
  const lang = getLangFromUrl(url);
  if (lang === 'en') {
    return { lang: 'pt', path: url.pathname.replace(/^\/en/, '') || '/' };
  }
  return { lang: 'en', path: `/en${url.pathname}`.replace(/\/$/, '') || '/en' };
}
