import React from "react";
import PropTypes from "prop-types";

import CryptoItem from "../crypto-item/crypto-item";

import "./list-item.sass";

const ListItem = ({ tokens, activeFilter }) => {
  const filteredTokens = tokens.filter((item) => {
    if (activeFilter === "favorite") {
      return item.favorite === true;
    } else return true;
  });

  return (
    <div className="crypto-list">
      {filteredTokens.map((item) => (
        <CryptoItem
          key={item.id}
          src={item.src}
          id={item.id}
          name={item.name}
          main={item.main}
          abbreviation={item.abbreviation}
          favorite={item.favorite}
        />
      ))}
      <img src="./lightning.svg" alt="picture" className="item_back" />
      <img src="./lightning.svg" alt="picture" className="item_back right" />
    </div>
  );
};
ListItem.propTypes = {
  tokens: PropTypes.array,
  activeFilter: PropTypes.string,
};

export default ListItem;
