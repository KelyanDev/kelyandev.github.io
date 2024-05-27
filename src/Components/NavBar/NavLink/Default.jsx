import { Link } from "react-scroll";

export default function Default() {
    return (
        <li className="nav-lien">
          <Link to="Apropos" smooth={true} duration={800}>
            <i className="bx bx-user-circle icons" />
            <span className="text nav-text"> A propos de moi </span>
          </Link>
        </li>
    );
};