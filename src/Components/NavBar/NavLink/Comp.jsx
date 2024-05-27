import { Link } from 'react-scroll';

export default function Competence() {
    return (
        <li className="nav-lien">
          <Link to="Competence" smooth={true} duration={800}>
            <i className="bx bx-slider icons" />
            <span className="text nav-text"> Compétences</span>
          </Link>
        </li>
    );
}