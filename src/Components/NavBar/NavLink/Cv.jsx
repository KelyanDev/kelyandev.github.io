import { Link } from "react-scroll";

export default function CV() {
    return (
        <li className="nav-lien">
        <Link to="CV" smooth={true} duration={800}>
          <i className="bx bx-file icons" />
          <span className="text nav-text"> CV</span>
        </Link>
      </li>
    );
}