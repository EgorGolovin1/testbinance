import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { addToken } from "../../redux/tokensSlice";

import { customStyles } from "../../../modalStyles";
import classes from "./add-modal.module.sass";

const AddModalWindow = ({ closeAddModal, isOpen }) => {
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
      addToken({
        name: data.name,
        abbreviation: data.abbreviation,
        src: "../crypto-items/" + upAbr + ".svg",
        myAmount: Number(data.amount),
        annotation: data.annotation,
      })
    );
    closeAddModal();
    reset();
  };
  return (
    <Modal
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeAddModal}
      contentLabel="Add item"
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
            placeholder="Bitcoin"
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
            defaultValue={0}
            className={classes.input}
            {...register("amount")}
            placeholder="0.005"
          />
        </label>
        <label className={classes.label}>
          <textarea
            className={classes.comment}
            {...register("annotation")}
            placeholder="Some comments..."
          />
        </label>
        <div className={classes.wrapper}>
          <button
            type="button"
            onClick={() => closeAddModal()}
            className={classes.button}
          >
            Cancel
          </button>
          <input value={"Accept"} type="submit" className={classes.button} />
        </div>
      </form>
    </Modal>
  );
};

AddModalWindow.propTypes = {
  closeAddModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default AddModalWindow;
