import React from "react";

import "./header-menu.sass";

const HeaderMenu = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img alt="icon" src="./logo.svg" className="logo" />
            <h2 className="logo_tag">CRYPTON</h2>
          </div>
          <button href="#" className="menu_link">
            Main Page
          </button>
          <button href="#" className="menu_link">
            Events
          </button>
          <button href="#" className="menu_link">
            Hot News
          </button>
          <div className="input-wrapper">
            <input
              type="text"
              className="search_panel"
              placeholder="Search coin"
            />
            <img alt="111" className="search_icon" src="./search.svg" />
            <button className="search_button">Search</button>
          </div>
          <img alt="111" className="enter_icon" src="./enter.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
