import React from 'react';
import { Skill, Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SkillsSectionProps {
  skills: Skill[];
  languages: Language[];
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-white">{skill.name}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
      </div>
    </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, languages }) => {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-teal-500 pb-2">{t('skillsTitle')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b-2 border-teal-500 pb-2">{t('languagesTitle')}</h3>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">{lang.name}:</span>
            <span className="text-gray-600 dark:text-gray-300 ml-2">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;