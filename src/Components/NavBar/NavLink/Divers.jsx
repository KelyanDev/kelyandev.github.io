import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Divers() {
  const { t } = useTranslation();

    return (
        <li className="nav-lien">
          <Link to="Divers" smooth={true} duration={800}>
            <i className="bx bx-book-bookmark icons" />
            <span className="text nav-text"> {t('SidMisc')} </span>
          </Link>
        </li>
    );
}