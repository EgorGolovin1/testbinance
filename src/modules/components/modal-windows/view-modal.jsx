import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { toggleToken } from "../../redux/tokensSlice";
import { getViewToken } from "../../redux/selectors";

import { customStyles } from "../../../modalStyles";
import classes from "./view-modal.module.sass";

const ViewModalWindow = ({ closeViewModal, isOpen }) => {
  const dispatch = useDispatch();
  const handleCloseModal = (id) => {
    dispatch(toggleToken(id));
    closeViewModal();
  };
  const view = useSelector(getViewToken);
  let count = view.length;
  if (count)
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
          <div className={classes.item}>{view[0].name}</div>
          <span className={classes.span}>Token Abbrevation: </span>
          <div className={classes.item}>{view[0].abbreviation}</div>
          <span className={classes.span}>Token Amount: </span>
          <div className={classes.item}>{view[0].myAmount}</div>
          <button
            onClick={() => handleCloseModal(view[0].id)}
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
