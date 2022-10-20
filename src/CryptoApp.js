import React from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import Banner from "./modules/components/banner/banner";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItem from "./modules/components/list-item/list-item";

import "./CryptoApp.sass";
import MainItem from "./modules/components/main-item/main-item";
import { useSelector } from "react-redux";

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

  return (
    <div className="todo-wrapper">
      <HeaderMenu />
      <Banner />
      <FilterMenu activeFilter={activeFilter} />
      <ListItem tokens={tokens} activeFilter={activeFilter} />
      <MainItem
        filteredCryptoArr={filteredCryptoArr}
        price={price}
        market={market}
      />
    </div>
  );
};

export default CryptoApp;
