import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function CV() {
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

    return (
        <div id="CV" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">CV</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <div className="aligne">
                        <img className="cv" src={`${process.env.PUBLIC_URL}/Divers/CV_Tournebize-Kélyan-1.png`} alt="" />
                    </div>
                    <div className="aligne">
                        <div className="GButton">
                            <a className="down" href="CV_Tournebize-Kélyan.pdf" download="">
                                <i className="bx bxs-download icon" />
                                <span className="down"> {t('CV')}</span>
                            </a>
                        </div>
                    </div>
                    <br /> <br />
                </>
            )}
        </div>
    );
}