import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../i18n/translations';
import { Zap, Keyboard, Lock, Layout, Layers, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    key: 'animations',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    icon: Keyboard,
    key: 'keyboard',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    icon: Lock,
    key: 'scroll',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Layout,
    key: 'position',
    gradient: 'from-teal-600 to-emerald-600',
  },
  {
    icon: Layers,
    key: 'sizes',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    icon: Settings,
    key: 'customization',
    gradient: 'from-red-600 to-pink-600',
  }
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 text-white`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {t(`features.${feature.key}` as TranslationKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}