import React from 'react';

function Nav() {
    return (
        <nav className="navbar" role="navigation">
            
            <div className="navbar-brand">
                <h1 className="nav-title grad">Ava Bullock</h1>
            </div>

            <div className="navbar-menu grad">
                <div className="navbar-start">
                    <a className="navbar-item grad">
                        About Me
                  </a>
                    <a className="navbar-item grad">
                        Portfolio
                  </a>
                    <a className="navbar-item grad">
                        Contact
                  </a>
                    <a className="navbar-item grad">
                        Resume
                  </a>

                </div>
            </div>
        </nav>
    )
}

export default Nav;