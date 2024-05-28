import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Formation() {
  const { t } = useTranslation();

    return (
        <li className="nav-lien">
          <Link to="Formation" smooth={true} duration={800}>
            <i className="bx bx-building-house icons" />
            <span className="text nav-text"> {t('SidTrai')} </span>
          </Link>
        </li>
    );
};