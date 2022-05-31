import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <>
        <div className="nav_container">
          <div className="nav_main">
            <div className="nav_bar">
             <div className="nav_icons">
             <i class="fa-regular fa-rectangle-list"></i>
             </div>
              <div className="nav_name">
                <span>MENU</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;