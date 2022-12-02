import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import CryptoItem from "../crypto-item/crypto-item";
import SearchForm from "../search-form/search-form";
import { tokens } from "../../redux/selectors";
import { useSearchParams } from "react-router-dom";

import classes from "./list-items.module.sass";

const ListItems = ({ openViewModal, openEditModal }) => {
  const tokensArr = useSelector(tokens);
  const [coins, setCoins] = useState(tokensArr);

  const [searchParams, setSearchParams] = useSearchParams();

  let coinQuery = searchParams.get("search") || "";

  const getCoins = () => {
    setCoins(tokensArr);
  };

  useEffect(() => {
    getCoins();
  });

  const filteredTokens = coins.filter((item) => {
    return item.name.toLowerCase().includes(coinQuery.toLowerCase());
  });

  return (
    <>
      <SearchForm coinQuery={coinQuery} setSearchParams={setSearchParams} />
      <div className={classes.list}>
        {filteredTokens.map((item) => (
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
    </>
  );
};
ListItems.propTypes = {
  tokensArr: PropTypes.array,
  openViewModal: PropTypes.func,
  openEditModal: PropTypes.func,
};

export default ListItems;
