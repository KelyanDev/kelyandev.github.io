import { useEffect, useState } from "react";
import data from "./data.json";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [ hasBeenViewed, setHasBeenViewed ] = useState(false);

    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);

    function handleRadioChange(event) {
        setSelectedProject(event.target.id);
    };

    const renderSection = () => {
        const sectionData = data[selectedProject];

        if (!sectionData) {
            return (
                <h3 className="souligne"> Merci de sélectionner un projet parmis la liste </h3>
            );
        };

        const description = (
            <div dangerouslySetInnerHTML={{ __html: sectionData.description.join('') }} />
        );

        return (
            <>
                {description}
            </>
        );

    };

    return (
        <div id="Projet" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">{t('projects.Title')}</h2>
                    <br />
                    <div className="section projects">
                        <div className="aligne">
                            <div className="Affprojets select">
                                <h4>Liste projets</h4>
                                <hr />
                                <label className="containerproj">
                                    <input type="radio" id="SAE22" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Simulation de signaux numériques (SAE22)</span>
                                    Simulation de signaux numériques (SAE22)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="RToDo" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Application React</span>
                                    Application React
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Ticket" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Application de gestion de tickets (SAE23)</span>
                                    Application de gestion de tickets (SAE23)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Vacation" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Analyse de données (SAE15)</span>
                                    Analyse de données (SAE15)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Portfolio" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Portfolio (SAE14,SAE25)</span>
                                    Portfolio (SAE14,SAE25)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="SAE11" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Sensibilisation hygiène informatique (SAE11)</span>
                                    Sensibilisation hygiène informatique (SAE11)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Hatsu" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Console de jeu (Terminale)</span>
                                    Console de jeu (Terminale)
                                </label>
                            </div>
                            <div id="projets">
                                {renderSection()}
                            </div>
                        </div>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}