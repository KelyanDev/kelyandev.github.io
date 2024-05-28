import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Experience() {
  const { t } = useTranslation();

    return (
        <li className="nav-lien">
          <Link to="Experience" smooth={true} duration={800}>
            <i className="bx bx-briefcase-alt icons" />
            <span className="text nav-text"> {t('SidExp')} </span>
          </Link>
        </li>
    );
}