import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select 
        value={i18n.language} 
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="fr">🇫🇷</option>
        <option value="en">🇬🇧</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;