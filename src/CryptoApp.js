import React, { useState } from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import Banner from "./modules/components/banner/banner";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItem from "./modules/components/list-item/list-item";
import ModalWindow from "./modules/Modal/Modal";
import Modal from "react-modal";

import "./CryptoApp.sass";
import MainItem from "./modules/components/main-item/main-item";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#434651",
    padding: "40px 20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

const CryptoApp = () => {
  const tokens = useSelector((state) => {
    return state.tokens.tokens;
  });

  const activeFilter = useSelector((state) => {
    return state.tokens.filterStatus;
  });
  const price = useSelector((state) => {
    return state.tokens.prices;
  });

  const market = useSelector((state) => {
    return state.tokens.marketInform;
  });

  const filteredCryptoArr = tokens.filter((item) => item.main);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="todo-wrapper">
        <HeaderMenu />
        <Banner openModal={openModal} />
        <FilterMenu activeFilter={activeFilter} />
        <ListItem
          openModal={openModal}
          tokens={tokens}
          activeFilter={activeFilter}
        />
        <MainItem
          filteredCryptoArr={filteredCryptoArr}
          price={price}
          market={market}
        />
        <Modal
          id="modal"
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalWindow id="crypto" closeModal={closeModal} />
        </Modal>
        ;
      </div>
    </>
  );
};

// ReactDOM.createRoot(<CryptoApp />, document.getElementById("modal"));

export default CryptoApp;
