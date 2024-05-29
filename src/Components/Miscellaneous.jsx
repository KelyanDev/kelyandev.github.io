import { useTranslation } from "react-i18next";

export default function Other() {
    const { t } = useTranslation();

    return(
        <div id="Divers" className="part">
            <h2 className="titre">{t('miscellaneous.Title')}</h2>
            <br />
            <div className="aligne">
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.First-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.First-dsc')} </p>
                </div>
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.Second-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.Second-dsc')} </p>
                </div>
            </div>
            <div className="aligne">
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.Third-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.Third-dsc')} </p>
                </div>
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.Fourth-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.Fourth-dsc')} </p>
                </div>
            </div>
            <div className="aligne">
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.Fifth-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.Fifth-dsc')} </p>
                </div>
                <div className="passions section">
                    <h4 className="aligne"> {t('miscellaneous.Sixth-title')}</h4>
                    <p className="text aligne"> {t('miscellaneous.Sixth-dsc')} </p>
                </div>
            </div>
            <br /> <hr />
        </div>
    );
}