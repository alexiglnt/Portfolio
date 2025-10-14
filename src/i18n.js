import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Imports des ressources (au début tu peux tout mettre dans "common")
import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import frProjects from './locales/fr/projects.json';
import enProjects from './locales/en/projects.json';

i18n
    .use(LanguageDetector)     // détecte (localStorage, query ?lng=, etc.)
    .use(initReactI18next)
    .init({
        resources: {
      fr: { common: frCommon, projects: frProjects },
      en: { common: enCommon, projects: enProjects },
    },
        fallbackLng: 'fr',       // FR par défaut
        lng: 'fr',               // langue initiale si rien détecté
        ns: ['common', 'projects'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        detection: {
            // ordre de détection (tu peux ajouter 'path' si tu fais /en)
            order: ['localStorage', 'querystring', 'navigator', 'htmlTag'],
            // sauvegarde la langue choisie
            caches: ['localStorage'],
        },
    });

// Met à jour <html lang="...">
i18n.on('languageChanged', (lng) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
    }
});

export default i18n;
