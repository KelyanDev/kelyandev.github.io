import { Link } from "react-scroll";

export default function Contact() {
    return (
        <li className="nav-lien">
          <Link to="Contact" smooth={true} duration={800}>
            <i className="bx bx-envelope icons" />
            <span className="text nav-text"> Contact</span>
          </Link>
      </li>
    );
}