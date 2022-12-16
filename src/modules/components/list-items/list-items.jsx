import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import ViewModalWindow from "../modal-windows/view-modal";
import EditModalWindow from "../modal-windows/edit-modal";
import CryptoItem from "../crypto-item/crypto-item";
import { tokenSelector } from "../../redux/selectors";
// import { useSearchParams } from "react-router-dom";

import classes from "./list-items.module.sass";

const ListItems = () => {
  const tokens = useSelector(tokenSelector);

  const [modalViewIsOpen, setViewModalIsOpen] = useState(false);
  function openViewModal() {
    setViewModalIsOpen(true);
  }
  function closeViewModal() {
    setViewModalIsOpen(false);
  }

  const [modalEditIsOpen, setEditModalIsOpen] = useState(false);
  function openEditModal() {
    setEditModalIsOpen(true);
  }
  function closeEditModal() {
    setEditModalIsOpen(false);
  }

  return (
    <>
      <div className={classes.list}>
        {tokens.map((item) => (
          <CryptoItem
            key={item.id}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
            {...item}
            isView={item.isView}
            index={item}
          />
        ))}
        <img src="./lightning.svg" alt="lightning" className={classes.item} />
        <img
          src="./lightning.svg"
          alt="lightning"
          className={classes.item_right}
        />
      </div>
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      />
      <EditModalWindow
        isOpen={modalEditIsOpen}
        closeEditModal={closeEditModal}
      />
    </>
  );
};
ListItems.propTypes = {
  tokensArr: PropTypes.array,
};

export default ListItems;
