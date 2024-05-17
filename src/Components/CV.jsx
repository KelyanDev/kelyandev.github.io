export default function CV() {
    return (
        <div id="CV" className="part">
            <h2 className="titre">CV</h2>
            <br />
            <div className="aligne">
                <img className="cv" src="Divers/CV_Tournebize-Kélyan-1.png" alt="" />
            </div>
            <div className="aligne">
                <div className="GButton">
                    <a className="down" href="CV_Tournebize-Kélyan.pdf" download="">
                        <i className="bx bxs-download icon" />
                        <span className="down"> Télécharger mon CV</span>
                    </a>
                </div>
            </div>
            <br /> <hr />
        </div>
    );
}