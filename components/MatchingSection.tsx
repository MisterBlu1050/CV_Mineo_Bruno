import React, { useState, useRef, useEffect } from 'react';
import { MatchResult } from '../types';
import { analyzeJobCompatibility } from '../services/geminiService';
import { getCvData } from '../data/cvData';
import { CheckCircleIcon, XCircleIcon, SparklesIcon } from './icons/Icons';
import { useLanguage } from '../contexts/LanguageContext';

const MatchingSection: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [jobDescription]);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      setError(t('matching.error_empty'));
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const cvData = getCvData(language);
      const analysisResult = await analyzeJobCompatibility(cvData, jobDescription, language);
      setResult(analysisResult);
    } catch (e: any) {
      setError(e.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-teal-500 pb-2">{t('matching.title')}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('matching.description')}
      </p>
      <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg">
        <textarea
          ref={textareaRef}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder={t('matching.placeholder')}
          className="w-full p-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200 resize-none overflow-hidden min-h-[150px]"
        />
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="mt-4 w-full flex items-center justify-center bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-lg disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('matching.loading')}
            </>
          ) : (
            <>
              <SparklesIcon />
              <span className="ml-2">{t('matching.button')}</span>
            </>
          )}
        </button>
      </div>

      {error && <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 text-red-700 dark:text-red-300 rounded-lg">{error}</div>}

      {result && (
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-bold">{t('matching.score_title')}</h4>
            <div className="relative inline-flex items-center justify-center w-32 h-32 mt-2">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-gray-200 dark:text-gray-700" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="text-teal-500" strokeWidth="3" strokeDasharray={`${result.score}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                </svg>
                <span className="absolute text-3xl font-bold text-teal-600 dark:text-teal-400">{result.score}%</span>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 italic">{result.summary}</p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">{t('matching.strengths_title')}</h5>
            <ul className="space-y-2 list-inside">
              {result.strengths.map((item, index) => <li key={index} className="flex items-start"><CheckCircleIcon /> <span className="ml-2">{item}</span></li>)}
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">{t('matching.weaknesses_title')}</h5>
            <ul className="space-y-2 list-inside">
              {result.weaknesses.map((item, index) => <li key={index} className="flex items-start"><XCircleIcon /> <span className="ml-2">{item}</span></li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingSection;