export default function LangSwitch({ changeLang }) {
    return (
        <li className="mode">
          <div className="icons">
            <i className='bx bx-globe icons'></i>
          </div>
          <select title="Language" defaultValue='fr' id="language-select" onChange={changeLang}>
            <option value="fr"> 🇫🇷 Français </option>
            <option value="en"> 🇬🇧 English </option>
          </select>
        </li>
    );
}