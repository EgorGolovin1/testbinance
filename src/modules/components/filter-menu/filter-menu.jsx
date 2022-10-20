import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/tokensSlice";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import "./filter-menu.sass";

const FILTERS_BTN = [
  {
    text: "Favorite",
    id: "favorite",
  },
  {
    text: "Hot",
    id: "hot",
  },
  {
    text: "Geiners",
    id: "geiners",
  },
  {
    text: "Losers",
    id: "losers",
  },
];

const FilterMenu = ({ activeFilter }) => {
  const dispatch = useDispatch();

  const editFilter = (type) => {
    dispatch(changeFilter(type));
  };
  return (
    <div className="container filter">
      <div className="filter-wrapper">
        {FILTERS_BTN.map(({ text, id }) => (
          <button
            onClick={() => {
              editFilter(id);
            }}
            key={id}
            className={classNames("btn", { tabbed: activeFilter === id })}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  activeFilter: PropTypes.string,
};

export default FilterMenu;
{
  /* <button href="#" className="filter_button choice">
          Favorite
        </button>
        <button href="#" className="filter_button">
          Hot
        </button>
        <button href="#" className="filter_button">
          Gainers
        </button>
        <button href="#" className="filter_button">
          Losers
        </button>  */
}
