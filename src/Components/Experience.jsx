import { useTranslation } from "react-i18next";

export default function Exp() {
    const { t } = useTranslation();

    return (
        <div id="Experience" className="part">
            <h2 className="titre">{t('experience.Title')}</h2>
            <br />
            <div className="section exp">
                <div className="exp-im">
                    <img src={`${process.env.PUBLIC_URL}/Divers/13158614.jpg`} className="screens" alt="" />
                </div>
                <div>
                    <h4>{t('experience.Exp-1-Tit')}</h4>
                    <p className="text"> {t('experience.Exp-1-P1')}</p>
                    <p className="text"> {t('experience.Exp-1-P2')}</p>
                    <p className="text"> {t('experience.Exp-1-P3')}</p>
                    <p className="text"> {t('experience.Exp-1-P4')}</p>
                </div>
            </div>
            <br /> <hr />
        </div>
    );
}