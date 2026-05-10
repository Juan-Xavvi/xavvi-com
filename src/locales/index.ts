import { createI18n } from 'vue-i18n';
import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import zh from './zh';
import ko from './ko';
import ja from './ja';
import pt from './pt';
import ru from './ru';
import ar from './ar';

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'العربية' },
] as const;

function getDefaultLocale(): string {
  const saved = localStorage.getItem('xavvi-lang');
  if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) return saved;
  const browserLang = navigator.language.split('-')[0];
  if (SUPPORTED_LOCALES.some((l) => l.code === browserLang)) return browserLang;
  return 'en';
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: { en, es, fr, de, zh, ko, ja, pt, ru, ar },
});

export default i18n;
