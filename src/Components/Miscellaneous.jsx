import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Other() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const [ hasBeenViewed, setHasBeenViewed ] = useState(false);

    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);

    return(
        <div id="Divers" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">{t('miscellaneous.Title')}</h2>
                    <div className="sous-ligne"></div>
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
                    <br /> <br />
                </>
            )}
        </div>
    );
}