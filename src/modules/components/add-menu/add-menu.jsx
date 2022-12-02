import React from "react";
import PropTypes from "prop-types";

import classes from "./add-menu.module.sass";

const AddMenu = ({ openModal }) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.text}>The future is already here</h3>
      <h1 className={classes.text}>There is never too much freedom</h1>
      <h2 className={classes.text}>Your money. Your choice</h2>
      <button onClick={openModal} className={classes.button}>
        Add new Coin
      </button>
    </div>
  );
};

AddMenu.propTypes = {
  openModal: PropTypes.func,
};

export default AddMenu;
