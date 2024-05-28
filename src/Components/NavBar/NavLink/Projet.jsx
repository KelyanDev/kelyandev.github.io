import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Projet() {
  const { t } = useTranslation();

    return (
        <li className="nav-lien">
          <Link to="Projet" smooth={true} duration={800}>
            <i className="bx bx-spreadsheet icons" />
            <span className="text nav-text"> {t('SidProj')} </span>
          </Link>
        </li>
    );
}