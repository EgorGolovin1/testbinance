import React, { useState } from "react";
import PropTypes from "prop-types";

import AddModalWindow from "../modal-windows/add-modal";

import classes from "./add-menu.module.sass";

const AddMenu = () => {
  const [modalAddIsOpen, setAddModalIsOpen] = useState(false);
  function openAddModal() {
    setAddModalIsOpen(true);
  }
  function closeAddModal() {
    setAddModalIsOpen(false);
  }

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.text}>The future is already here</h3>
      <h1 className={classes.text}>There is never too much freedom</h1>
      <h2 className={classes.text}>Your money. Your choice</h2>
      <button onClick={openAddModal} className={classes.button}>
        Add new Coin
      </button>
      <AddModalWindow
        onRequestClose={closeAddModal}
        isOpen={modalAddIsOpen}
        closeAddModal={closeAddModal}
      />
    </div>
  );
};

AddMenu.propTypes = {
  openModal: PropTypes.func,
};

export default AddMenu;
