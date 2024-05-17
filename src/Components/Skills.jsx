import { useState } from "react";
import data from "./data.json";

export default function Skills() {
    return (
        <div id="Competence" className="part">
            <h2 className="titre">Compétences</h2>
            <br />
            <h3 className="souligne">Compétences techniques</h3>
            <HardSkills />
            <h3 className="souligne">Qualités</h3>
            <SoftSkills /> <br /> <br />
            <h3 className="souligne">Langues</h3>
            <div className="Qligne">
                <div className="Lligne">
                    <div className="lang section">
                        <h2>B2</h2>
                        <p> Anglais</p>
                    </div>
                    <div className="lang section">
                        <h2>A2</h2>
                        <p> Espagnol</p>
                    </div>
                </div>
            </div>
            <br /> <br /> <hr />
        </div>
    );
}

function HardSkills() {
    const [selectedComp, setSelectedComp] = useState(null);

    function handleRadioChange(event) {
        setSelectedComp(event.target.id);
    };

    const renderSection = () => {
        const sectionData = data[selectedComp];

        if (!sectionData) {
            return (
                <div class="comp">
						<div class="cercle">
							<svg>
								<circle class="Scercle" r="80" cx="100" cy="100" fill="transparent" stroke-width="15px"></circle>
								<circle class="Pcercle" r="80" cx="100" cy="100" fill="transparent" stroke-width="15px" stroke-linecap="round" style={{'stroke-dashoffset':'calc((502 * (100 - 0)) / 100)'}} ></circle>
							</svg>
							<span class="pourcent"> -- </span>
						</div>
						<div id="compDesc">
							<h4>Sélectionner une compétence</h4>
							<hr />
							<p class="text"> -- Les jauges dépendent des résultats attendus par nos professeurs. </p>
							<p class="text">.</p>
							<p class="text">.</p>
							<hr />
							<p class="text resume"><b>Compétences 1</b> / <b>Compétence 2</b></p>
						</div>
					</div>
            );
        };

        const description = (
            <div dangerouslySetInnerHTML={{ __html: sectionData.description.join('') }} />
        );

        return (
            <>
				<div class="comp">
					<div class="cercle">
						<svg>
							<circle class="Scercle" r="80" cx="100" cy="100" fill="transparent" stroke-width="15px"></circle>
							<circle class="Pcercle" r="80" cx="100" cy="100" fill="transparent" stroke-width="15px" stroke-linecap="round" style={{'stroke-dashoffset': sectionData.circleStyle}} ></circle>
						</svg>
						<span class="pourcent"> {sectionData.circleText} </span>
					</div>
					<div id="compDesc">
						{description}
					</div>
				</div>
			</>
        );
    }

    return (
        <div className="section AffComp">
            <div>
                <div className="aligne">
                    <h4>Liste compétences</h4>
                </div>
                <div className="aligne select">
                    <label className="container" htmlFor="Syst">
                        <input type="radio" id="Syst" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Système</span>
                        Système
                    </label>
                    <label className="container" htmlFor="Progra">
                        <input type="radio" id="Progra" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Programmation</span>
                        Programmation
                    </label>
                    <label className="container">
                        <input type="radio" id="Conf" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Réseau </span>
                        Réseau
                    </label>
                    <label className="container">
                        <input type="radio" id="Analy" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Télécom</span>
                        Télécom
                    </label>
                    <label className="container">
                        <input type="radio" id="Tél" name="Compétences" className="RadComp" onChange={handleRadioChange}/> 
                        <span className="checkmark"> Téléphonie</span>
                        Téléphonie
                    </label>
                    <label className="container">
                        <input type="radio" id="Lang" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Langues</span>
                        Langues
                    </label>
                </div>
            </div>
            <div id="comp">
                {renderSection()}
            </div>
      </div>
    );
}

function SoftSkills() {
    return (<>  
        <div className="Qligne">
            <div className="qualit section">
                <i className="bx bx-user-circle" />
                <h4> Maturité</h4>
                <div>
                    <p className="text"> Je sais recevoir des remarques et des commentaires dans le but de m'améliorer sans adopter une attitude trop défensive </p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-hourglass" />
                <h4> Patience</h4>
                <div>
                    <p className="text"> Lorsque je rencontre un problème en projet, je sais me montrer patient afin de trouver la solution à ce problème </p>
                </div>
            </div>
        </div>
        <div className="Qligne">
            <div className="qualit section">
                <i className="bx bx-code-curly" />
                <h4> Passion</h4>
                <div>
                    <p className="text"> Lorsque je suis intéressé par un sujet, je sais me donner à fond pour atteindre mes objectifs </p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-calendar-check" />
                <h4> Efficacité</h4>
                <div>
                    <p className="text"> Je sais me montrer efficace afin de réaliser mes projets dans les temps données</p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-group" />
                <h4> Esprit D'équipe</h4>
                <div>
                    <p className="text"> Je sais oeuvrer avec les autres et être solidaire afin d'aider mes collègues à la réalisation de nos objectifs.</p>
                </div>
            </div>
        </div>
        </>
    );
}