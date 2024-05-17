export default function Contact() {
    return (
        <div id="Contact">
            <h2 className="titre">Contact</h2>
            <br />
            <div className="Qligne">
                <div className="cont section">
                    <i className="bx bxl-gmail" />
                    <h4> Adresse mail</h4>
                    <div>
                        <p className="text"> kelyan.tournebize@etu.uca.fr</p>
                    </div>
                </div>
                <div className="cont section">
                    <i className="bx bxl-github" />
                    <h4> Github</h4>
                    <div>
                        <div className="TButton">
                        <a className="linke" href="https://github.com/KelyanDev" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github icon" />
                            <span className="linke"> Github</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="cont section">
                <i className="bx bxl-linkedin" />
                <h4> Linkedin</h4>
                    <div>
                        <div className="TButton">
                            <a className="linke" href="https://www.linkedin.com/in/kélyan-tournebize-0295082a9" target="_blank" rel="noreferrer">
                                <i className="bx bxl-linkedin-square icon" />
                                <span className="linke"> Linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <hr />
            <Footer />
        </div>
    );
}

function Footer() {
    return (
        <footer className="copyrights">
            <p> © 2024 TOURNEBIZE Kélyan</p>
        </footer>
    );
}