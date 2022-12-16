import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {  } from "react-router-dom";

import { tokenSelector } from "../../redux/selectors";
import { searchToken } from "../../redux/tokensSlice";
import classes from "./header-menu.module.sass";

const HeaderMenu = () => {
  const tokens = useSelector(tokenSelector);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  let coinQuery = searchParams.get("search") || "";

  const [coins, setCoins] = useState(tokens);
  coins.filter((item) =>
    item.name.toLowerCase().includes(coinQuery.toLowerCase())
  );

  useEffect(() => {
    const getCoins = () => {
      setCoins(tokens);
    };
    getCoins();
    dispatch(searchToken(coinQuery));
    if (coinQuery == "") setSearchParams({});
  }, [coinQuery, dispatch, tokens, setSearchParams]);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.logo_wrapper}>
            <img alt="logo" src="../logo.svg" className={classes.logo} />
            <h2 className={classes.tag}>CRYPTON</h2>
          </div>
          <Link className={classes.link} to="/">
            Main Page
          </Link>
          <Link href="#" className={classes.link}>
            Events
          </Link>
          <Link href="#" className={classes.link}>
            Hot News
          </Link>
          <div className={classes.input_wrapper}>
            <input
              type="text"
              className={classes.panel}
              placeholder="Search coin"
              onChange={(e) => setSearchParams({ search: e.target.value })}
              // onChange={(e) => setSearchParams({ search: e.target.value })}
              defaultValue={coinQuery}
            />
            <img alt="search" className={classes.icon} src="../search.svg" />
            <button className={classes.button}>Search</button>
          </div>
          <img alt="enter" className={classes.enter_icon} src="../enter.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
