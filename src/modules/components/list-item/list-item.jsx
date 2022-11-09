import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CryptoItem from "../crypto-item/crypto-item";

import "./list-item.sass";

const ListItem = ({ tokens, openModal }) => {
  const [coins, setCoins] = useState(tokens);

  const getCoins = () => {
    setCoins(tokens);
  };

  useEffect(() => {
    getCoins();
  });

  const [value, setValue] = useState("");

  const filteredTokens = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <>
      <div className="form">
        <form className="search_form">
          <input
            type="text"
            className="search_panel-list"
            placeholder="Search coin..."
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="crypto-list">
        {filteredTokens.map((item) => (
          <CryptoItem
            openModal={openModal}
            key={item.id}
            src={item.src}
            id={item.id}
            name={item.name}
            main={item.main}
            abbreviation={item.abbreviation}
            favorite={item.favorite}
          />
        ))}
        <img src="./lightning.svg" alt="lightning" className="item_back" />
        <img
          src="./lightning.svg"
          alt="lightning"
          className="item_back right"
        />
      </div>
    </>
  );
};
ListItem.propTypes = {
  tokens: PropTypes.array,
  openModal: PropTypes.func,
};

export default ListItem;
