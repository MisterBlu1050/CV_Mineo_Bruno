import { Section } from '../types';

export const translations = {
  fr: {
    documentTitle: 'CV Interactif - Bruno Mineo',
    [Section.Profil]: 'Profil',
    [Section.Formation]: 'Formation',
    [Section.Experience]: 'Expérience',
    [Section.Competences]: 'Compétences',
    [Section.Matching]: 'Matching',
    profileTitle: 'Profil Professionnel',
    educationTitle: 'Formation',
    certificationsTitle: 'Certifications',
    experienceTitle: 'Expérience Professionnelle',
    skillsTitle: 'Compétences Principales',
    languagesTitle: 'Langues',
    language: {
      french: 'Français',
      english: 'Anglais',
      dutch: 'Néerlandais',
    },
    matching: {
        title: 'Analyse de Compatibilité',
        description: 'Collez la description d\'une offre d\'emploi ci-dessous pour obtenir une analyse de compatibilité instantanée basée sur l\'IA.',
        placeholder: 'Collez ici le descriptif de l\'offre d\'emploi...',
        button: 'Analyser la Compatibilité',
        loading: 'Analyse en cours...',
        error_empty: 'Veuillez coller une description de poste.',
        score_title: 'Score de Compatibilité',
        strengths_title: 'Points Forts du Profil',
        weaknesses_title: 'Points de Vigilance'
    }
  },
  en: {
    documentTitle: 'Interactive CV - Bruno Mineo',
    [Section.Profil]: 'Profile',
    [Section.Formation]: 'Education',
    [Section.Experience]: 'Experience',
    [Section.Competences]: 'Skills',
    [Section.Matching]: 'Matching',
    profileTitle: 'Professional Profile',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    experienceTitle: 'Professional Experience',
    skillsTitle: 'Main Skills',
    languagesTitle: 'Languages',
    language: {
      french: 'French',
      english: 'English',
      dutch: 'Dutch',
    },
    matching: {
        title: 'Compatibility Analysis',
        description: 'Paste a job description below to get an instant AI-based compatibility analysis.',
        placeholder: 'Paste the job description here...',
        button: 'Analyze Compatibility',
        loading: 'Analyzing...',
        error_empty: 'Please paste a job description.',
        score_title: 'Compatibility Score',
        strengths_title: 'Profile Strengths',
        weaknesses_title: 'Areas for Attention'
    }
  },
  nl: {
    documentTitle: 'Interactief CV - Bruno Mineo',
    [Section.Profil]: 'Profiel',
    [Section.Formation]: 'Opleiding',
    [Section.Experience]: 'Ervaring',
    [Section.Competences]: 'Vaardigheden',
    [Section.Matching]: 'Matching',
    profileTitle: 'Professioneel Profiel',
    educationTitle: 'Opleiding',
    certificationsTitle: 'Certificeringen',
    experienceTitle: 'Werkervaring',
    skillsTitle: 'Belangrijkste Vaardigheden',
    languagesTitle: 'Talen',
    language: {
      french: 'Frans',
      english: 'Engels',
      dutch: 'Nederlands',
    },
    matching: {
        title: 'Compatibiliteitsanalyse',
        description: 'Plak hieronder een functiebeschrijving voor een onmiddellijke, op AI gebaseerde compatibiliteitsanalyse.',
        placeholder: 'Plak hier de functiebeschrijving...',
        button: 'Analyseer Compatibiliteit',
        loading: 'Analyse wordt uitgevoerd...',
        error_empty: 'Plak een functiebeschrijving.',
        score_title: 'Compatibiliteitsscore',
        strengths_title: 'Sterke Punten van het Profiel',
        weaknesses_title: 'Aandachtspunten'
    }
  }
};