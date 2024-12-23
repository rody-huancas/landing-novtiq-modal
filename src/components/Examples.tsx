import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { useLanguage } from '../contexts/LanguageContext';

const basicExample = `import { Modal } from 'novtiq-modal';
import "novtiq-modal/dist/novtiq-modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Modal"
      >
        <p>This is a basic modal example.</p>
      </Modal>
    </>
  );
}`;

const advancedExample = `import { Modal } from 'novtiq-modal';
import "novtiq-modal/dist/novtiq-modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Advanced Modal"
      size="lg"
      position="center"
      hasOverlay={true}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      showCloseButton={true}
    >
      <div className="space-y-4">
        <p>Advanced features demo:</p>
        <ul className="list-disc pl-4">
          <li>Custom size</li>
          <li>Positioning</li>
          <li>Overlay configuration</li>
          <li>Keyboard support</li>
        </ul>
      </div>
    </Modal>
  );
}`;

export default function Examples() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');

  return (
    <section id='examples' className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('examples.title')}
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'basic'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            }`}
          >
            {t('examples.basic')}
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'advanced'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            }`}
          >
            {t('examples.advanced')}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <CodeBlock code={activeTab === 'basic' ? basicExample : advancedExample} />
        </div>
      </div>
    </section>
  );
}