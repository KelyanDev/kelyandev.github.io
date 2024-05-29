import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Default() {
  const { t } = useTranslation();

  return (
    <li className="nav-lien">
      <Link to="Apropos" smooth={true} duration={800}>
        <i className="bx bx-user-circle icons" />
        <span className="text nav-text"> {t('sidebar.SidAbout')} </span>
      </Link>
    </li>
  );
};