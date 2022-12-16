import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { toggleToken } from "../../redux/tokensSlice";
import { viewTokenSelector } from "../../redux/selectors";

import { customStyles } from "../../../modalStyles";
import classes from "./view-modal.module.sass";

const ViewModalWindow = ({ closeViewModal, isOpen }) => {
  const dispatch = useDispatch();
  const handleCloseModal = (id) => {
    dispatch(toggleToken(id));
    closeViewModal();
  };
  const view = useSelector(viewTokenSelector);
  return (
    <Modal
      id="modal-view"
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeViewModal}
      contentLabel="View item"
    >
      <div className={classes.wrapper}>
        <span className={classes.span}>Token Name: </span>
        <div className={classes.item}>{view.name}</div>
        <span className={classes.span}>Token Abbrevation: </span>
        <div className={classes.item}>{view.abbreviation}</div>
        <span className={classes.span}>Token Amount: </span>
        <div className={classes.item}>{view.myAmount}</div>
        <button
          onClick={() => handleCloseModal(view.id)}
          className={classes.button}
        >
          End View
        </button>
      </div>
    </Modal>
  );
};

ViewModalWindow.propTypes = {
  closeViewModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default ViewModalWindow;
