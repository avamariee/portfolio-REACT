import React, { useEffect} from 'react';

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
            

            <div className="navbar-menu grad">
                <div className="navbar-start grad">
                  <li className="navbar-item grad">
                        <a className="navbar-item grad">
                           <span className="grad" onClick={() => setCurrentItem("about")}>
                               About Me
                           </span>
                      </a>
                  </li>
                  <li className="navbar-item grad">
                        <a className="navbar-item grad">
                           <span className="grad" onClick={() => setCurrentItem("portfolio")}>
                               Portfolio
                           </span>
                      </a>
                  </li>
                  <li className="navbar-item grad">
                        <a className="navbar-item grad">
                           <span className="grad" onClick={() => setCurrentItem("Resume")}>
                               Resume
                           </span>
                      </a>
                  </li>
                  <li className="navbar-item grad">
                        <a className="navbar-item grad">
                           <span className="grad" onClick={() => setCurrentItem("Contact")}>
                               Contact
                           </span>
                      </a>
                  </li>

                </div>
            </div>
        </nav>
    )
}

export default Nav;