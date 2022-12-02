import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItems from "./modules/components/list-items/list-items";
import CryptoItem from "./modules/components/crypto-item/crypto-item";
import ViewModalWindow from "./modules/components/modal-windows/view-modal";
import AddModalWindow from "./modules/components/modal-windows/add-modal";
import EditModalWindow from "./modules/components/modal-windows/edit-modal";
// import MainItem from "./modules/components/main-item/main-item";

// import { Layout } from "./modules/components/layout/layout";

const CryptoApp = () => {
  const [modalAddIsOpen, setAddModalIsOpen] = useState(false);
  function openAddModal() {
    setAddModalIsOpen(true);
  }
  function closeAddModal() {
    setAddModalIsOpen(false);
  }

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
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderMenu />
              <AddMenu openModal={openAddModal} />
              <FilterMenu />
              <ListItems
                openViewModal={openViewModal}
                openEditModal={openEditModal}
              />
            </>
          }
        />
        <Route path="/items/:id" element={<CryptoItem />}></Route>
      </Routes>
      <AddModalWindow
        onRequestClose={closeAddModal}
        isOpen={modalAddIsOpen}
        closeAddModal={closeAddModal}
      />
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      />
      <EditModalWindow
        isOpen={modalEditIsOpen}
        closeEditModal={closeEditModal}
      />
    </div>
  );
};

export default CryptoApp;
