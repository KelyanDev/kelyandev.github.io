export default function HeaderNav({ toggleSidebar }) {
    return (
        <div className="headerNav">
            <div className="image-text">
                <span className="image">
                <img src="logo.png" alt="logo" />
                </span>
                <div>
                    <h3 className="menu"> Onglets </h3>
                </div>
            </div>
            <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}/>
        </div>
    );
}