import React from 'react';
import { Experience } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-teal-500 pb-2">{t('experienceTitle')}</h3>
      <div className="relative border-l-2 border-teal-200 dark:border-teal-800 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-800 dark:bg-teal-900">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h4>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">{exp.company}</p>
            <time className="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{exp.period}</time>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;