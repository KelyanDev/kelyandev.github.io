import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function Competence() {
  const { t } = useTranslation();

    return (
        <li className="nav-lien">
          <Link to="Competence" smooth={true} duration={800}>
            <i className="bx bx-slider icons" />
            <span className="text nav-text"> {t('SidSkills')} </span>
          </Link>
        </li>
    );
}