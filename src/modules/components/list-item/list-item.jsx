import React from "react";
import PropTypes from "prop-types";

import CryptoItem from "../crypto-item/crypto-item";

import "./list-item.sass";

const ListItem = ({ tokens, activeFilter, openModal }) => {
  const filteredTokens = tokens.filter((item) => {
    if (activeFilter === "favorite") {
      return item.favorite;
    } else if (activeFilter === "wallet") {
      return console.log(item);
    } else return true;
  });

  return (
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
      <img src="./lightning.svg" alt="lightning" className="item_back right" />
    </div>
  );
};
ListItem.propTypes = {
  tokens: PropTypes.array,
  activeFilter: PropTypes.string,
  openModal: PropTypes.func,
};

export default ListItem;
