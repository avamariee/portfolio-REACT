import React, { useState } from 'react';

function Nav(props) {

    const {
        navItems = [],
        setCurrentItem,
        currentItem
    } = props;

    
   
    function itemSelected(name){
        console.log(`${name} clicked`)
    }


    return (
        
        <nav className="navbar" role="navigation">
            
            <div className="navbar-brand">
                <h1 className="nav-title grad">Ava Bullock</h1>
            </div>
            

            <div className="navbar-menu grad">
                <div className="navbar-start">
                  <li className="navbar-item grad">
                        <a className="navbar-item grad" href="/">
                            About Me
                      </a>
                  </li>
                  {navItems.map((item) => (
                      <li
                      className={`navbar-item grad ${

                        currentItem.name === item.name && 'navActive'

                      }`}
                      key={item.name}
                      >
                          <span onClick={() => itemSelected(item.name)}>
                              {item.name}
                          </span>
                      </li>
                  ))}

                    {/* <li className="navbar-item grad">
                        <a className="navbar-item grad" href="#portfolio">
                            Portfolio
                      </a>
                    </li>
                    <a className="navbar-item grad" href="#contact">
                        Contact
                  </a>
                    <a className="navbar-item grad" href="#resume">
                        Resume
                  </a> */}

                </div>
            </div>
        </nav>
    )
}

export default Nav;