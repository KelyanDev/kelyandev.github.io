import { Link } from "react-scroll";

export default function Formation() {
    return (
        <li className="nav-lien">
          <Link to="Formation" smooth={true} duration={800}>
            <i className="bx bx-building-house icons" />
            <span className="text nav-text"> Formation </span>
          </Link>
        </li>
    );
};