import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProfileSectionProps {
  summary: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ summary }) => {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-teal-500 pb-2">{t('profileTitle')}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
        {summary}
      </p>
    </div>
  );
};

export default ProfileSection;