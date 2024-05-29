import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <div id="Apropos" className="part">
            <h2 className="titre"> {t('SidAbout')} </h2>
            <br />
            <div className="photo">
                <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="" id="pdp" />
            </div>
            <h3 className="souligne"> {t('AboutTit')} </h3>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('About-1')}}></p>
        <br />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('About-2')}}></p>
        <br />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('About-3')}}></p>
        <br /> <br /> <hr />
      </div>
    );
}