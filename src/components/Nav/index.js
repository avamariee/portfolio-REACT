import React from 'react';

function Nav() {
    return (
        <nav className="navbar" role="navigation">
            
            <div className="navbar-brand">
                <h1 className="nav-title navbar-item">Ava Bullock</h1>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        About Me
                  </a>
                    <a className="navbar-item">
                        Portfolio
                  </a>
                    <a className="navbar-item">
                        Contact
                  </a>
                    <a className="navbar-item">
                        Resume
                  </a>

                </div>
            </div>
        </nav>
    )
}

export default Nav;