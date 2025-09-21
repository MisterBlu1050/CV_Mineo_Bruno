import React, { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProfileSection from './components/ProfileSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import MatchingSection from './components/MatchingSection';
import { getCvData } from './data/cvData';
import { Section } from './types';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<Section>(Section.Profil);
  const { language, t } = useLanguage();
  
  const cvData = getCvData(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t('documentTitle');
  }, [language, t]);


  const renderSection = () => {
    switch (activeSection) {
      case Section.Profil:
        return <ProfileSection summary={cvData.summary} />;
      case Section.Formation:
        return <EducationSection education={cvData.education} certifications={cvData.certifications} />;
      case Section.Experience:
        return <ExperienceSection experiences={cvData.experience} />;
      case Section.Competences:
        return <SkillsSection skills={cvData.skills} languages={cvData.languages} />;
      case Section.Matching:
        return <MatchingSection />;
      default:
        return <ProfileSection summary={cvData.summary} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 lg:sticky lg:top-8 self-start">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <Header person={cvData.person} />
              <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 min-h-[600px]">
              {renderSection()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;