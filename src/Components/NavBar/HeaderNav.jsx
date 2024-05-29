import { useTranslation } from "react-i18next";

export default function HeaderNav({ toggleSidebar }) {
    const { t } = useTranslation();

    return (
        <div className="headerNav">
            <div className="image-text">
                <span className="image">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
                </span>
                <div>
                    <h3 className="menu"> {t('sidebar.SidHead')} </h3>
                </div>
            </div>
            <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}/>
        </div>
    );
}