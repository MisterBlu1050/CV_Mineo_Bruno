import { CVData, LanguageCode } from '../types';

const cvData: Record<LanguageCode, CVData> = {
  fr: {
    person: {
      name: 'Bruno Mineo',
      title: 'Bachelor en Psychologie clinique & Consultant IA',
      address: 'Kroonlaan 193, 1050 Elsene, België',
      phone: '+32 473 330 525',
      email: 'mineobruno@hotmail.com',
      linkedin: 'www.linkedin.com/in/mineo-bruno',
    },
    summary:
      "Professionnel bilingue, titulaire d’un Bachelor en Psychologie clinique, doté d’une solide expérience en accompagnement psychosocial, gestion de crise et projets éducatifs, ainsi qu’en innovation numérique. Consultant IA indépendant, je conçois et anime des formations sur l’intégration de l’intelligence artificielle, destinées principalement aux PME et aux petits indépendants, quels que soient leur secteur ou leur domaine d’activité. J’aide entreprises et indépendants à automatiser leurs processus, à digitaliser leurs méthodes de travail et à optimiser l’efficacité organisationnelle avec des solutions sur mesure. Mon approche allie sens clinique, rigueur méthodologique, esprit d’innovation et pédagogie, au service de l’humain et du progrès technologique.",
    education: [
      {
        degree: "Bachelor en Psychologie clinique",
        institution: 'Institut Libre Marie Haps',
        period: '1993 - 1996',
      },
    ],
    certifications: [
      { title: 'Utiliser l\'IA pour améliorer les pratiques des ressources humaines' },
      { title: 'Master en IA pour les RH & le Recrutement' },
      { title: 'Apprendre LinkedIn Recruiter' },
    ],
    experience: [
      {
        role: 'Consultant et formateur en IA',
        company: 'XL AI Consulting - Indépendant complémentaire',
        period: 'nov 2022 - présent',
        tasks: [
          "Développement d'outils numériques avec intégration d'IA.",
          "Formations en IA",
          "Automatisation des processus informatiques pour indépendants et PME.",
        ],
      },
      {
        role: 'Médiateur Emploi',
        company: 'VDAB',
        period: 'fév 2023 - fév 2024',
        tasks: [
          "Accompagnement de chercheurs d'emploi vers une insertion professionnelle durable.",
          'Coaching individuel, analyse de compétences et définition de projets professionnels.',
          "Organisation et animation d'ateliers collectifs (CV, lettres de motivation, préparation aux entretiens).",
        ],
      },
      {
        role: 'Conseiller en Psychologie',
        company: 'psyconseil.com',
        period: 'juin 2008 - présent',
        tasks: [
          'Accompagnement psychosocial individuel pour diverses problématiques.',
          "Spécialisation en intervention de crise et soutien d'urgence.",
          'Mise en place et gestion de téléconsultations et de plateformes d’accompagnement numérique.',
        ],
      },
      {
        role: 'Assistant RH',
        company: 'TRAVIE',
        period: 'nov 2011 - fév 2015',
        tasks: [
          "Gestion administrative d'un portefeuille de plus de 60 travailleurs.",
          "Recrutement et sélection de profils pour le secteur de l'économie sociale.",
          'Gestion des contrats subsidiés (ACS, APE) et suivi des dossiers.',
        ],
      },
      {
        role: 'Chef de Projet',
        company: 'Badje ASBL',
        period: 'mai 2010 - nov 2010',
        tasks: [
          "Coordination d'un projet d'inclusion pour enfants autistes en milieu d'accueil.",
          'Accompagnement et formation des équipes pédagogiques sur les approches adaptées.',
          'Développement de programmes d’activités structurées et inclusives.',
        ],
      },
      {
        role: 'Accompagnateur de Nuit',
        company: 'IRSA',
        period: 'fév 2003 - fév 2008',
        tasks: [
          'Accompagnement nocturne d’enfants présentant une déficience visuelle et/ou de l’autisme.',
          'Intervention de crise et gestion de situations complexes durant la nuit.',
          'Collaboration étroite avec les équipes pluridisciplinaires pour assurer la continuité des soins.',
        ],
      },
      {
        role: 'Coordinateur Pédagogique',
        company: 'Ecole du Quotidien',
        period: 'sept 1996 - jan 2003',
        tasks: [
          'Coordination des équipes pédagogiques spécialisées.',
          'Accompagnement individualisé d’enfants présentant des troubles psychiques.',
          'Enseignement du français, des mathématiques et animation d’ateliers de musicothérapie.',
        ],
      },
    ],
    skills: [
      { name: 'Évaluation', level: 5 },
      { name: 'Intelligence Artificielle (IA)', level: 5 },
      { name: 'Administration RH', level: 4 },
      { name: 'Développement d\'Outils Numériques', level: 5 },
      { name: 'Coaching Psychosocial', level: 5 },
      { name: 'Intervention de Crise', level: 4 },
    ],
    languages: [
      { name: 'Italien', level: 'Natif' },
      { name: 'Français', level: 'Natif' },
      { name: 'Anglais', level: 'Professionnel complet' },
      { name: 'Néerlandais', level: 'Professionnel' },
      { name: 'Turc', level: 'Élémentaire' },
    ],
  },
  en: {
    person: {
      name: 'Bruno Mineo',
      title: 'Bachelor in Clinical Psychology & AI Consultant',
      address: 'Kroonlaan 193, 1050 Elsene, België',
      phone: '+32 473 330 525',
      email: 'mineobruno@hotmail.com',
      linkedin: 'www.linkedin.com/in/mineo-bruno',
    },
    summary:
      "Bilingual professional with a Bachelor's in Clinical Psychology, possessing solid experience in psychosocial support, crisis management, educational projects, and digital innovation. As an independent AI consultant, I design and lead training on integrating artificial intelligence into HR practices and psychosocial support. I assist companies and freelancers in automating their processes, digitizing their work methods, and optimizing organizational efficiency with tailored solutions. My approach combines clinical insight, methodological rigor, an innovative spirit, and pedagogy, dedicated to serving both human needs and technological progress.",
    education: [
      {
        degree: "Bachelor in Clinical Psychology",
        institution: 'Institut Libre Marie Haps',
        period: '1993 - 1996',
      },
    ],
    certifications: [
      { title: 'Using AI to Improve Human Resources Practices' },
      { title: 'Master of AI in HR & Recruitment' },
      { title: 'Learning LinkedIn Recruiter' },
    ],
    experience: [
       {
        role: 'AI Consultant and Trainer',
        company: 'XL AI Consulting - Freelance (Side Business)',
        period: 'Nov 2022 - Present',
        tasks: [
          'Development of digital tools with AI integration.',
          'Conducting AI training sessions.',
          'Automation of IT processes for freelancers and SMEs.',
        ],
      },
      {
        role: 'Job Mediator',
        company: 'VDAB',
        period: 'Feb 2023 - Feb 2024',
        tasks: [
          'Guiding job seekers towards sustainable professional integration.',
          'Providing individual coaching, skills analysis, and defining career projects.',
          'Organizing and leading group workshops (CVs, cover letters, interview preparation).',
        ],
      },
      {
        role: 'Psychology Advisor',
        company: 'psyconseil.com',
        period: 'Jun 2008 - Present',
        tasks: [
          'Providing individual psychosocial support for various issues.',
          'Specializing in crisis intervention and emergency support.',
          'Implementing and managing teleconsultations and digital support platforms.',
        ],
      },
      {
        role: 'HR Assistant',
        company: 'TRAVIE',
        period: 'Nov 2011 - Feb 2015',
        tasks: [
          'Administrative management of a portfolio of over 60 employees.',
          'Recruiting and selecting profiles for the social economy sector.',
          'Managing subsidized contracts (ACS, APE) and monitoring files.',
        ],
      },
      {
        role: 'Project Leader',
        company: 'Badje ASBL',
        period: 'May 2010 - Nov 2010',
        tasks: [
          'Coordinating an inclusion project for autistic children in a daycare setting.',
          'Supporting and training pedagogical teams on adapted approaches.',
          'Developing structured and inclusive activity programs.',
        ],
      },
      {
        role: 'Night Supervisor',
        company: 'IRSA',
        period: 'Feb 2003 - Feb 2008',
        tasks: [
          'Providing overnight care for children with visual impairments and/or autism.',
          'Crisis intervention and management of complex situations during the night.',
          'Collaborating closely with multidisciplinary teams to ensure continuity of care.',
        ],
      },
      {
        role: 'Pedagogical Coordinator',
        company: 'Ecole du Quotidien',
        period: 'Sep 1996 - Jan 2003',
        tasks: [
          'Coordinating specialized pedagogical teams.',
          'Providing individualized support for children with psychological disorders.',
          'Teaching French, mathematics, and leading music therapy workshops.',
        ],
      },
    ],
    skills: [
      { name: 'Assessment', level: 5 },
      { name: 'Artificial Intelligence (AI)', level: 5 },
      { name: 'HR Administration', level: 4 },
      { name: 'Digital Tools Development', level: 5 },
      { name: 'Psychosocial Coaching', level: 5 },
      { name: 'Crisis Intervention', level: 4 },
    ],
    languages: [
      { name: 'Italian', level: 'Native' },
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'Full Professional' },
      { name: 'Dutch', level: 'Professional' },
      { name: 'Turkish', level: 'Elementary' },
    ],
  },
  nl: {
    person: {
      name: 'Bruno Mineo',
      title: 'Bachelor in de Klinische Psychologie & AI Consultant',
      address: 'Kroonlaan 193, 1050 Elsene, België',
      phone: '+32 473 330 525',
      email: 'mineobruno@hotmail.com',
      linkedin: 'www.linkedin.com/in/mineo-bruno',
    },
    summary:
      "Tweetalige professional met een Bachelor in de Klinische Psychologie, met een solide ervaring in psychosociale begeleiding, crisisbeheer, educatieve projecten en digitale innovatie. Als onafhankelijk AI-consultant ontwerp en leid ik trainingen over de integratie van kunstmatige intelligentie in HR-praktijken en psychosociale ondersteuning. Ik help bedrijven en freelancers bij het automatiseren van hun processen, het digitaliseren van hun werkmethoden en het optimaliseren van de organisationele efficiëntie met oplossingen op maat. Mijn aanpak combineert klinisch inzicht, methodologische nauwkeurigheid, een innovatieve geest en pedagogiek, ten dienste van zowel de mens als de technologische vooruitgang.",
    education: [
       {
        degree: "Bachelor in de Klinische Psychologie",
        institution: 'Institut Libre Marie Haps',
        period: '1993 - 1996',
      },
    ],
    certifications: [
      { title: 'AI gebruiken om de personeelspraktijken te verbeteren' },
      { title: 'Master in AI voor HR & Werving' },
      { title: 'LinkedIn Recruiter leren' },
    ],
    experience: [
      {
        role: 'AI Consultant en Trainer',
        company: 'XL AI Consulting - Zelfstandige in bijberoep',
        period: 'nov 2022 - heden',
        tasks: [
          'Ontwikkeling van digitale tools met AI-integratie.',
          'Verzorgen van AI-opleidingen.',
          "Automatisering van IT-processen voor zelfstandigen en kmo's.",
        ],
      },
      {
        role: 'Bemiddelaar',
        company: 'VDAB',
        period: 'feb 2023 - feb 2024',
        tasks: [
          'Begeleiding van werkzoekenden naar duurzame arbeidsintegratie.',
          'Individuele coaching, competentieanalyse en het uitstippelen van loopbaantrajecten.',
          'Organisatie en animatie van collectieve workshops (cv, sollicitatiebrieven, voorbereiding op sollicitatiegesprekken).',
        ],
      },
      {
        role: 'Psychologisch Consulent',
        company: 'psyconseil.com',
        period: 'jun 2008 - heden',
        tasks: [
          'Individuele psychosociale begeleiding voor diverse problematieken.',
          'Specialisatie in crisisinterventie en noodhulp.',
          'Implementatie en beheer van teleconsultaties en digitale begeleidingsplatforms.',
        ],
      },
      {
        role: 'HR-assistent',
        company: 'TRAVIE',
        period: 'nov 2011 - feb 2015',
        tasks: [
          'Administratief beheer van een portefeuille van meer dan 60 werknemers.',
          'Werving en selectie van profielen voor de sociale economie.',
          'Beheer van gesubsidieerde contracten (GESCO, APE) en opvolging van dossiers.',
        ],
      },
      {
        role: 'Projectleider',
        company: 'Badje VZW',
        period: 'mei 2010 - nov 2010',
        tasks: [
          'Coördinatie van een inclusieproject voor kinderen met autisme in de kinderopvang.',
          'Begeleiding en training van pedagogische teams over aangepaste benaderingen.',
          "Ontwikkeling van gestructureerde en inclusieve activiteitenprogramma's.",
        ],
      },
      {
        role: 'Nachtbegeleider',
        company: 'IRSA',
        period: 'feb 2003 - feb 2008',
        tasks: [
          'Nachtbegeleiding van kinderen met een visuele beperking en/of autisme.',
          'Crisisinterventie en beheer van complexe situaties gedurende de nacht.',
          'Nauwgezette samenwerking met multidisciplinaire teams om de continuïteit van de zorg te waarborgen.',
        ],
      },
      {
        role: 'Pedagogisch Coördinator',
        company: 'Ecole du Quotidien',
        period: 'sep 1996 - jan 2003',
        tasks: [
          'Coördinatie van gespecialiseerde pedagogische teams.',
          'Geïndividualiseerde begeleiding van kinderen met psychische stoornissen.',
          'Onderwijzen van Frans, wiskunde en het leiden van muziektherapieworkshops.',
        ],
      },
    ],
     skills: [
      { name: 'Assessment', level: 5 },
      { name: 'Artificiële Intelligentie (AI)', level: 5 },
      { name: 'HR-administratie', level: 4 },
      { name: 'Ontwikkeling van digitale tools', level: 5 },
      { name: 'Psychosociale Coaching', level: 5 },
      { name: 'Crisisinterventie', level: 4 },
    ],
    languages: [
      { name: 'Italiaans', level: 'Moedertaal' },
      { name: 'Frans', level: 'Moedertaal' },
      { name: 'Engels', level: 'Volledig professioneel' },
      { name: 'Nederlands', level: 'Professioneel' },
      { name: 'Turks', level: 'Elementair' },
    ],
  },
};

export const getCvData = (lang: LanguageCode): CVData => {
  return cvData[lang];
};