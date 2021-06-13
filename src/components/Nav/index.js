import React, { useEffect } from 'react';

function Nav(props) {


    const {
        setCurrentItem,
        currentItem
    } = props;

    useEffect(() => {
        document.title = currentItem;
    }, [currentItem]);
    console.log(currentItem)



    return (

        <nav className="navbar" role="navigation">

            <div className="navbar-brand">
                <h1 className="nav-title grad">Ava Bullock</h1>
            </div>



            <div id="navbar" className="navbar-menu is-active grad">
                <div className="navbar-start grad">
                    <li className="navbar-item grad">
                        <a className="navbar-item grad">
                            <span className="grad" onClick={() => setCurrentItem("about")}>
                                About Me <i class="fas fa-smile grad"></i>
                            </span>
                        </a>
                    </li>
                    <li className="navbar-item grad">
                        <a className="navbar-item grad">
                            <span className="grad" onClick={() => setCurrentItem("portfolio")}>
                                Portfolio <i class="fas fa-folder-open grad"></i>
                            </span>
                        </a>
                    </li>
                    <li className="navbar-item grad">
                        <a className="navbar-item grad">
                            <span className="grad" onClick={() => setCurrentItem("Resume")}>
                                Resume <i class="fas fa-file grad"></i>
                            </span>
                        </a>
                    </li>
                    <li className="navbar-item grad">
                        <a className="navbar-item grad">
                            <span className="grad" onClick={() => setCurrentItem("Contact")}>
                                Contact <i class="fas fa-id-card grad"></i>
                            </span>
                        </a>
                    </li>

                </div>
            </div>
        </nav >
    )
}

export default Nav;