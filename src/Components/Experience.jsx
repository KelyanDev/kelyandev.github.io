export default function Exp() {
    return (
        <div id="Experience" className="part">
            <h2 className="titre">Experience Professionnelle</h2>
            <br />
            <div className="section exp">
                <div className="exp-im">
                    <img src={`${process.env.PUBLIC_URL}/Divers/13158614.jpg`} className="screens" alt="" />
                </div>
                <div>
                    <h4>Janvier 2020</h4>
                    <p className="text"> Lors de mon année de 3ème, j'ai eu l'occasion de réaliser un stage d'une semaine aux Thermes de Vichy.</p>
                    <p className="text"> Lors de ce stage, j'ai accompagné le bactériologiste de l'établissement
                        afin de faire des analyses sur les différentes eaux de source de l'établissement.</p>
                    <p className="text"> Une fois les eaux de sources récupérées, il fallait passer par un processus d'évaporation avant de déposer les filtres dans des boîtes de pétries. </p>
                    <p className="text"> Enfin, j'ai dû analyser les boîtes de pétries afin de repérer si des bactéries dangereuses étaient présentes. </p>
                </div>
            </div>
            <br /> <hr />
        </div>
    );
}