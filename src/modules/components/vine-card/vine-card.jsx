import React from "react";
import PropTypes from "prop-types";

import classes from "./vine-card.module.sass";
const VineCard = ({ array }) => {
  console.log(array);
  return (
    <div className={classes.card}>
      {/* <div className="name">{array.sort}</div>
      <div className="costBottle">{array.costBottle}</div> */}
      {/* <div className="costGlass">{props.costGlass}</div> */}
    </div>
  );
};

VineCard.propTypes = {
  array: PropTypes.array,
  sort: PropTypes.string,
  costBottle: PropTypes.number,
  //   costGlass: PropTypes.number,
};

export default VineCard;
