import CodeBlock from './CodeBlock';
import { useLanguage } from '../contexts/LanguageContext';

const installationCode = `# npm
npm install novtiq-modal

# pnpm
pnpm add novtiq-modal

# yarn
yarn add novtiq-modal`;

const basicUsageCode = `import { Modal } from 'novtiq-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="My Modal"
    >
      <p>Modal content goes here</p>
    </Modal>
  );
}`;

export default function Documentation() {
  const { t } = useLanguage();

  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {t('docs.title')}
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {t('docs.installation')}
            </h3>
            <CodeBlock code={installationCode} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {t('docs.usage')}
            </h3>
            <CodeBlock code={basicUsageCode} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {t('docs.api')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}