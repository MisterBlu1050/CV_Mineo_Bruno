export type LanguageCode = 'fr' | 'en' | 'nl';

export interface Person {
  name: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export interface Skill {
  name: string;
  level: number; // 1 to 5 for rating
}

export interface Language {
  name: string;
  level: string;
}

export interface CVData {
  person: Person;
  summary: string;
  education: Education[];
  certifications: Certification[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
}

export enum Section {
  Profil = 'Profil',
  Formation = 'Formation',
  Experience = 'Expérience',
  Competences = 'Compétences',
  Matching = 'Matching',
}

export interface MatchResult {
  strengths: string[];
  weaknesses: string[];
  summary: string;
  score: number;
}