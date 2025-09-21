import React from 'react';
import { Education, Certification } from '../types';
import { AwardIcon, GraduationCapIcon } from './icons/Icons';
import { useLanguage } from '../contexts/LanguageContext';


interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, certifications }) => {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-teal-500 pb-2">{t('educationTitle')}</h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
              <GraduationCapIcon />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b-2 border-teal-500 pb-2">{t('certificationsTitle')}</h3>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 text-teal-500">
                <AwardIcon />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;