import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Imports des ressources (au début tu peux tout mettre dans "common")
import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import frProjects from './locales/fr/projects.json';
import enProjects from './locales/en/projects.json';

const savedLng = (typeof window !== 'undefined' && localStorage.getItem('i18nextLng')) || 'fr';

i18n
    .use(LanguageDetector)     // détecte (localStorage, query ?lng=, etc.)
    .use(initReactI18next)
    .init({
        resources: {
            fr: { common: frCommon, projects: frProjects },
            en: { common: enCommon, projects: enProjects },
        },
        fallbackLng: 'fr',       // FR par défaut
        lng: savedLng,
        ns: ['common', 'projects'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],            // ← écrit dans localStorage
            lookupQuerystring: 'lng',            // ← lit ?lng=en
            lookupLocalStorage: 'i18nextLng',    // ← clé utilisée
        },
    });

// Met à jour <html lang="...">
i18n.on('languageChanged', (lng) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
    }
    // 🔒 force l’écriture explicite (belt & suspenders)
    try { localStorage.setItem('i18nextLng', lng); } catch { }
});

export default i18n;
