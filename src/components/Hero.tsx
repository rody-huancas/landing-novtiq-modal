import { useState } from 'react';
import { Terminal, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const installCommands: Record<'npm' | 'pnpm' | 'yarn', string> = {
  npm: 'npm install novtiq-modal',
  pnpm: 'pnpm add novtiq-modal',
  yarn: 'yarn add novtiq-modal',
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'yarn'>('npm');
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20" />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                <ArrowRight className="mr-2 h-5 w-5" />
                {t('hero.cta')}
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                <Play className="mr-2 h-5 w-5" />
                {t('hero.demo')}
              </button>
            </div>

            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  {Object.keys(installCommands).map((pkg) => (
                    <button
                      key={pkg}
                      onClick={() => setActiveTab(pkg as 'npm' | 'pnpm' | 'yarn')} // Corregido
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === pkg
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
                <div className="p-4 flex items-center space-x-3">
                  <Terminal className="text-gray-400" size={20} />
                  <code className="text-sm font-mono text-gray-900 dark:text-gray-100">
                    {installCommands[activeTab]}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
