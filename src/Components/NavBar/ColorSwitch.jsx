import { useTranslation } from "react-i18next";

export default function Switch({ isDarkMode, DarkToggle }) {
  const { t } = useTranslation();

    return (
        <li className="mode">
          <div className="moon-sun">
            <i className="bx bx-moon icons moon" />
            <i className="bx bx-sun icons sun" />
          </div>
          <span className="mode-text text">{isDarkMode ? t('sidebar.SidDark') : t('sidebar.SidWhite')}</span>
          <div className="activer-switch">
            <span className="switch" onClick={DarkToggle}/>
          </div>
        </li>
    );
}