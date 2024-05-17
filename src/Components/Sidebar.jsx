import HeaderNav from "./NavBar/HeaderNav";
import Switch from "./NavBar/ColorSwitch";
import { useState } from "react";

import Default from "./NavBar/NavLink/Default";
import Formation from "./NavBar/NavLink/Formation";
import Experience from "./NavBar/NavLink/Exp";
import Competence from "./NavBar/NavLink/Comp";
import Projet from "./NavBar/NavLink/Projet";
import Divers from "./NavBar/NavLink/Divers";
import CV from "./NavBar/NavLink/Cv";
import Contact from "./NavBar/NavLink/Contact";


export default function Sidebar({ DarkToggle }) {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    function toggleSidebar() {
        setIsSidebarClosed(!isSidebarClosed);
    };

    return (
        <nav className={`sidebar ${isSidebarClosed ? '' : 'close'}`}>
            <HeaderNav toggleSidebar={toggleSidebar} />
            <div className="menu-bar">
                <ul className="menu-lien">
                    <Default />
                    <Formation />
                    <Experience />
                    <Competence />
                    <Projet />
                    <Divers />
                    <CV />
                    <Contact />
                </ul>
                <ul className="contenu-bas">
                    <Switch DarkToggle={DarkToggle}/>
                </ul>
            </div>
        </nav>
    );
};
