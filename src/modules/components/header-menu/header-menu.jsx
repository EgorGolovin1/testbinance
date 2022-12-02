import React from "react";
import { Link } from "react-router-dom";
import classes from "./header-menu.module.sass";

const HeaderMenu = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.logo_wrapper}>
            <img alt="logo" src="../logo.svg" className={classes.logo} />
            <h2 className={classes.tag}>CRYPTON</h2>
          </div>
          <Link className={classes.link} to="/">
            Main Page
          </Link>
          <Link href="#" className={classes.link}>
            Events
          </Link>
          <Link href="#" className={classes.link}>
            Hot News
          </Link>
          <div className={classes.input_wrapper}>
            <input
              type="text"
              className={classes.panel}
              placeholder="Search coin"
            />
            <img alt="search" className={classes.icon} src="../search.svg" />
            <button className={classes.button}>Search</button>
          </div>
          <img alt="enter" className={classes.enter_icon} src="../enter.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
