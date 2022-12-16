import React from "react";

import classes from "./filter-menu.module.sass";

const FILTERS_BTN = [
  {
    text: "Favorite",
    id: "isView",
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

const FilterMenu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {FILTERS_BTN.map(({ text, id }) => (
          <button key={id} className={classes.btn}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
