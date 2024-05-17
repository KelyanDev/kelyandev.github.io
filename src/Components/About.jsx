export default function About() {
    return (
        <div id="Apropos" className="part">
            <h2 className="titre">A propos de moi</h2>
            <br />
            <div className="photo">
                <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="" id="pdp" />
            </div>
            <h3 className="souligne"> Etudiant en première année de BUT Réseaux et Télécommunications </h3>
        <p className="texte"> Je m'appelle Tournebize Kélyan, j'ai 18 ans, et je suis actuellement étudiant en première année de BUT en <b>Réseaux et Télécommunications</b>. </p>
        <br />
        <p className="texte"> Après avoir passé un baccalauréat Général avec pour spécialités Mathématiques et Numérique et Sciences Informatiques (NSI),
            j'ai décidé d'intégrer une formation de BUT en Réseaux et Télécommunications afin de pouvoir suivre le parcours <b>Cybersécurité</b> proposé dès la deuxième année,
            mais aussi pour la possibilité de faire de l'<b>alternance</b>, en deuxième et en troisième année. </p>
        <br />
        <p className="texte"> Actuellement, je suis à la <b>recherche</b> d'un <b>contrat d'alternance</b> à compter de Septembre 2024,
            sur un <b>rythme</b> de <b>1 mois / 1 mois</b>, afin de travailler avec celle-ci pendant une ou deux années et renforcer mes compétences
            tout en comprenant les enjeux du milieu professionnel.
        </p>
        <br /> <br /> <hr />
      </div>
    );
}