import { useTranslation } from "react-i18next";

export default function Formation() {
    const { t } = useTranslation();

    return (
        <div id="Formation" className="part">
            <h2 className="titre">{t('training.Title')}</h2>
            <div className="listing">
                <h4> {t('training.Train-3-Tit')} </h4>
                <h4 className="souligne"> IUT Clermont-Auvergne, Aubière (63)</h4>
                <p className="text"> {t('training.Train-3-Desc')} </p>
            </div>
            <div className="listing">
                <h4> 2023 / 2024</h4>
                <h4 className="souligne"> IUT Clermont-Auvergne, Aubière (63)</h4>
                <p className="text"> {t('training.Train-2-Desc')} </p>
            </div>
            <div className="listing">
                <h4> {t('training.Train-1-Tit')}</h4>
                <h4 className="souligne"> Lycée Jean-Zay, Thiers (63)</h4>
                <p className="text"> {t('training.Train-1-Desc')} </p>
            </div>
            <br /> <hr />
        </div>
    );
}