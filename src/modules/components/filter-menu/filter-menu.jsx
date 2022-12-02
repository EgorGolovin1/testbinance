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
  const checkCredit = (age, isJob) => {
    if (age > 24 && isJob) {
      return 500;
    } else if (age > 24) {
      return 100;
    }
    return 0;
  };
  const checkOpportunityToGetMac = (age, isJob, money) => {
    if (money >= 2000) {
      return true;
    }
    let opportunity = checkCredit(age, isJob);
    return opportunity + money > 2000;
  };
  console.log(checkOpportunityToGetMac(25, false, 1900));
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
