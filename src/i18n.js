import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'SidHead': 'Tabs',
            'SidAbout': 'About me',
            'SidSkills': 'Skills',
            'SidMisc': 'Miscellaneous',
            'SidExp': 'Experience',
            'SidTrai': 'Training',
            'SidProj': 'Projects',
            'SidWhite': 'White Mode',
            'SidDark': 'Dark Mode',
        }
    },
    fr: {
        translation: {
            'SidHead': 'Onglets',
            'SidAbout': 'A propos de moi',
            'SidSkills': 'Compétences',
            'SidMisc': 'Divers',
            'SidExp': 'Expérience',
            'SidTrai': 'Formation',
            'SidProj': 'Projets',
            'SidWhite': 'Mode Clair',
            'SidDark': 'Mode Sombre',
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n