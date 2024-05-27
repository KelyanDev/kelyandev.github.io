import { Link } from "react-scroll";

export default function Divers() {
    return (
        <li className="nav-lien">
          <Link to="Divers" smooth={true} duration={800}>
            <i className="bx bx-book-bookmark icons" />
            <span className="text nav-text"> Divers</span>
          </Link>
        </li>
    );
}