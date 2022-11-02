import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { addToken, getViewToken, toggleToken } from "../redux/tokensSlice";

import "./Modal.sass";

const ModalWindow = ({ closeModal }) => {
  const endView = (id) => {
    dispatch(toggleToken(id));
    closeModal();
  };
  const dispatch = useDispatch();
  const view = useSelector(getViewToken);
  let count = view.length;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let upAbr = data.Abbreviation.toUpperCase();
    dispatch(
      addToken({
        name: data.Name,
        abbreviation: data.abbreviation,
        src: "./crypto-items/" + upAbr + ".svg",
        myAmount: Number(data.Amount),
        annotation: data.Note,
      })
    );
    closeModal();
  };
  return (
    <>
      {count ? (
        <div className="fast-view_wrapper">
          <span>Token Name: </span>
          <div className="fast-view_item">{view[0].name}</div>
          <span>Token Abbrevation: </span>
          <div className="fast-view_item">{view[0].abbreviation}</div>
          <span>Token Amount: </span>
          <div className="fast-view_item">{view[0].myAmount}</div>
          <button onClick={() => endView(view[0].id)} className="modal_button">
            End View
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="modal_form">
          <label htmlFor="name" className="modal_label">
            Coin name (Bitcoin)
            <input
              id="name"
              {...register("Name", {
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
              className="modal_input"
            />
            <div style={{ height: 20 }} className="erorr">
              {errors?.Name && <p>{errors?.Name?.message || "Erorr!"}</p>}
            </div>
          </label>
          <label htmlFor="Abbrevation" className="modal_label">
            Coin abbrevation (BTC)
            <input
              {...register("Abbreviation", {
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
              className="modal_input"
            />
            <div style={{ height: 20 }} className="erorr">
              {errors?.Abbreviation && (
                <p>{errors?.Abbreviation?.message || "Erorr!"}</p>
              )}
            </div>
          </label>
          <label className="modal_label">
            Amount of coins? (0.005)
            <input
              type="number"
              defaultValue={0}
              className="modal_input"
              {...register("Amount")}
            />
          </label>
          <label className="modal_label">
            Some comments...
            <textarea className="modal_textarea" {...register("Note")} />
          </label>
          <div className="button-wrapper">
            <button onClick={closeModal} className="modal_button">
              Cancel
            </button>
            <input
              value={"Accept"}
              type="submit"
              className="modal_button submit"
            />
          </div>
        </form>
      )}
    </>
  );
};

ModalWindow.propTypes = {
  closeModal: PropTypes.func,
};

export default ModalWindow;
