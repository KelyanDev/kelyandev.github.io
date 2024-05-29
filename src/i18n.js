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

            'AboutTit': 'First year student in Network and Telecommunications',
            'About-1': "My name is Tournebize Kélyan, I'm 18 years old and I'm currenctly a first year student in <b>Networks and Telecommunications</b>.",
            'About-2': `After graduating from a General Baccalaureate with Mathematics and Numerical & Computer Sciences specialties (NSI in France),
                I decided to join a BUT training in Networks and Telecommunications in order to be able to follow the <b>Cybersecurity</b> course offered upon the second year,
                but also for the possibility of following an <b>apprenticeship</b>, during the second and third years of study.`,
            'About-3': `Currently, I am <b>looking for</b> a <b>work-study contract</b> starting in September 2024,
                on a <b>pace</b> of <b>1 month / 1 month</b>, in order to work with a company for one or two years and strengthen my skills
                while understanding the challenges of the professional environment.`,
            
            'Train-3-Tit': "January 2024",
            'Train-3-Desc': "First semester in Networks and Telecommunications validated",
            'Train-2-Desc': "First year in Networks and Telecommunications",
            'Train-1-Tit': "June 2023",
            'Train-1-Desc': "General Baccalaureate graduation, with Mathematics and Numeric and Computer Science specialties, with good honors",
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

            'AboutTit': 'Etudiant en première année de BUT Réseaux et Télécommunications',
            'About-1': "Je m'appelle Tournebize Kélyan, j'ai 18 ans, et je suis actuellement étudiant en première année de BUT en <b>Réseaux et Télécommunications</b>.",
            'About-2': `Après avoir passé un baccalauréat Général avec pour spécialités Mathématiques et Numérique et Sciences Informatiques (NSI),
                j'ai décidé d'intégrer une formation de BUT en Réseaux et Télécommunications afin de pouvoir suivre le parcours <b>Cybersécurité</b> proposé dès la deuxième année,
                mais aussi pour la possibilité de faire de l'<b>alternance</b>, en deuxième et en troisième année.`,
            'About-3': `Actuellement, je suis à la <b>recherche</b> d'un <b>contrat d'alternance</b> à compter de Septembre 2024,
                sur un <b>rythme</b> de <b>1 mois / 1 mois</b>, afin de travailler avec une entreprise pendant une ou deux années et renforcer mes compétences
                tout en comprenant les enjeux du milieu professionnel.`,
            
            'Train-3-Tit': "Janvier 2024",
            'Train-3-Desc': "Validation premier semestre de BUT en Réseaux et Télécommunications",
            'Train-2-Desc': "Première année de BUT en Réseaux et Télécommunications",
            'Train-1-Tit': "Juin 2023",
            'Train-1-Desc': "Obtention d'un Baccalauréat Général spécialités Maths et NSI, mention assez bien",
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