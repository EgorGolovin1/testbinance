import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { finishEditing, deleteToken } from "../../redux/tokensSlice";
import { getEditToken } from "../../redux/selectors";

import { customStyles } from "../../../modalStyles";
import classes from "./edit-modal.module.sass";

const EditModalWindow = ({ closeEditModal, isOpen }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    let upAbr = data.abbreviation.toUpperCase();
    dispatch(
      finishEditing({
        id: edit[0].id,
        src: "../crypto-items/" + upAbr + ".svg",
        name: data.name,
        abbreviation: data.abbreviation,
        myAmount: Number(data.amount),
        annotation: data.annotation,
      })
    );
    closeEditModal();
    reset();
  };

  const deleteItem = (id) => {
    dispatch(deleteToken(id));
    reset();
    closeEditModal();
  };

  let edit = useSelector(getEditToken);
  console.log(edit);
  let isEditing = edit.length;
  if (isEditing)
    return (
      <Modal
        style={customStyles}
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeEditModal}
        contentLabel="Add item"
        shouldCloseOnEsc={false}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Coin name :
            <input
              {...register("name", {
                required: "Required field!",
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbols",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 symbols",
                },
              })}
              className={classes.input}
              defaultValue={edit[0].name}
            />
            <div style={{ height: 20 }} className={classes.error}>
              {errors?.name && <p>{errors?.name?.message || "Erorr!"}</p>}
            </div>
          </label>
          <label htmlFor="abbrevation" className={classes.label}>
            Coin abbreviation :
            <input
              {...register("abbreviation", {
                required: "Required field!",
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbols",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 symbols",
                },
              })}
              className={classes.input}
              placeholder="BTC"
              defaultValue={edit[0].abbreviation}
            />
            <div style={{ height: 20 }} className={classes.error}>
              {errors?.abbreviation && (
                <p>{errors?.abbreviation?.message || "Erorr!"}</p>
              )}
            </div>
          </label>
          <label className={classes.label}>
            Amount of coins :
            <input
              type="number"
              className={classes.input}
              {...register("amount")}
              placeholder="0.005"
              defaultValue={edit[0].myAmount}
            />
          </label>
          <label className={classes.label}>
            <textarea
              className={classes.comment}
              {...register("annotation")}
              defaultValue={edit[0].annotation}
            />
          </label>
          <div className={classes.wrapper}>
            <button
              type="button"
              onClick={() => deleteItem(edit[0].id)}
              className={classes.button_delete}
            >
              Delete
            </button>
            <input value={"Save"} type="submit" className={classes.button} />
          </div>
        </form>
      </Modal>
    );
};

EditModalWindow.propTypes = {
  closeEditModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default EditModalWindow;
