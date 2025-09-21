import React from 'react';
import { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';


interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = Object.values(Section);
  const { t } = useLanguage();

  return (
    <nav className="mt-8">
      <ul className="space-y-2">
        {navItems.map((section) => (
          <li key={section}>
            <button
              onClick={() => setActiveSection(section)}
              className={`w-full text-left px-4 py-3 rounded-lg text-md font-medium transition-all duration-200 ease-in-out
                ${
                  activeSection === section
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {t(section)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;