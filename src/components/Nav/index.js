import React from 'react';

function Nav() {

    
    return (
        <nav className="navbar" role="navigation">
            
            <div className="navbar-brand">
                <h1 className="nav-title grad">Ava Bullock</h1>
            </div>

            <div className="navbar-menu grad">
                <div className="navbar-start">
                    <a className="navbar-item grad" href="#about">
                        About Me
                  </a>
                    <a className="navbar-item grad" href="#portfolio">
                        Portfolio
                  </a>
                    <a className="navbar-item grad" href="#contact">
                        Contact
                  </a>
                    <a className="navbar-item grad" href="#resume">
                        Resume
                  </a>

                </div>
            </div>
        </nav>
    )
}

export default Nav;