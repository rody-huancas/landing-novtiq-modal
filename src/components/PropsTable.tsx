import { useLanguage } from "../contexts/LanguageContext";
import { dataPropsTable } from "../constants/data-props-table";

export default function PropsTable() {
  const { t } = useLanguage();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          {t('propsTable.title')}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('propsTable.prop')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('propsTable.type')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('propsTable.default')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('propsTable.description')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataPropsTable.map((prop) => (
                <tr key={prop.name}>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-purple-600">
                    {prop.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600">
                    {prop.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600">
                    {prop.default}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {t(prop.descriptionKey)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
