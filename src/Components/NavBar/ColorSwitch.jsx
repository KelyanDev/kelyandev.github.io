export default function Switch({ DarkToggle }) {
    return (
        <li className="mode">
          <div className="moon-sun">
            <i className="bx bx-moon icons moon" />
            <i className="bx bx-sun icons sun" />
          </div>
          <span className="mode-text text">Mode Clair</span>
          <div className="activer-switch">
            <span className="switch" onClick={DarkToggle}/>
          </div>
        </li>
    );
}