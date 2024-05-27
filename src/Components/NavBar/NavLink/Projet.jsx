import { Link } from "react-scroll";

export default function Projet() {
    return (
        <li className="nav-lien">
          <Link to="Projet" smooth={true} duration={800}>
            <i className="bx bx-spreadsheet icons" />
            <span className="text nav-text"> Projets</span>
          </Link>
        </li>
    );
}