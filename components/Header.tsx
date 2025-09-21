import React from 'react';
import { Person, LanguageCode } from '../types';
import { MailIcon, PhoneIcon, LinkedInIcon, LocationIcon, FranceFlagIcon, UKFlagIcon, NetherlandsFlagIcon } from './icons/Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  person: Person;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    const languages: { code: LanguageCode; labelKey: string; icon: React.ReactNode }[] = [
        { code: 'fr', labelKey: 'language.french', icon: <FranceFlagIcon className="w-full h-full" /> },
        { code: 'en', labelKey: 'language.english', icon: <UKFlagIcon className="w-full h-full" /> },
        { code: 'nl', labelKey: 'language.dutch', icon: <NetherlandsFlagIcon className="w-full h-full" /> },
    ];

    return (
        <div className="flex justify-center space-x-3 my-4">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    aria-label={t(lang.labelKey)}
                    title={t(lang.labelKey)}
                    className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-teal-500/50
                        ${
                        language === lang.code
                            ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 ring-teal-500 scale-110'
                            : 'scale-90 opacity-70 hover:opacity-100 hover:scale-100'
                    }`}
                >
                    {lang.icon}
                </button>
            ))}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ person }) => {
  return (
    <header className="text-center">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{person.name}</h1>
      <h2 className="text-lg text-teal-600 dark:text-teal-400 font-medium">{person.title}</h2>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3 text-left">
        <ContactInfo icon={<LocationIcon />} text={person.address} />
        <ContactInfo icon={<PhoneIcon />} text={person.phone} href={`tel:${person.phone}`} />
        <ContactInfo icon={<MailIcon />} text={person.email} href={`mailto:${person.email}`} />
        <ContactInfo icon={<LinkedInIcon />} text="linkedin.com/in/mineo-bruno" href={`https://${person.linkedin}`} />
      </div>
    </header>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
      <span className="text-teal-500 dark:text-teal-400">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
        {content}
      </a>
    );
  }
  
  return content;
};


export default Header;