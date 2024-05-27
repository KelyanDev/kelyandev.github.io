import { Link } from "react-scroll";

export default function Experience() {
    return (
        <li className="nav-lien">
          <Link to="Experience" smooth={true} duration={800}>
            <i className="bx bx-briefcase-alt icons" />
            <span className="text nav-text"> Expériences </span>
          </Link>
        </li>
    );
}