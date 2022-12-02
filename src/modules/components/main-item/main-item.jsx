import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./main-item.module.sass";
import classNames from "classnames/bind";

import { mainToken, getPrice, getInform } from "../../redux/selectors";

const MainItem = () => {
  const token = useSelector(mainToken);
  const price = useSelector(getPrice);
  const marketInform = useSelector(getInform);

  let balance = (price.USD * Math.pow(10, 2)) / Math.pow(10, 2);
  let volatility = Math.round(marketInform * Math.pow(10, 2)) / Math.pow(10, 2);

  if (token)
    return (
      <div className={classes.item}>
        {token.map((item) => (
          <Fragment key={item.id}>
            <img
              src={"." + item.src}
              alt="token"
              className={classes.item_picture}
            />
            <div className={classes.wrapper}>
              <div className={classes.item_name}>{item.name}</div>
              <button className={classes.item_details}>Details</button>
              <div className={classes.item_amount}>
                {item.myAmount ? `My tokens: ${item.myAmount}` : ""}
              </div>
              <div className={classes.item_annotation}>{item.annotation}</div>
              <div className={classes.item_balance}>
                {item.myAmount
                  ? `My balance: ${Math.round(item.myAmount * balance)} $`
                  : ""}
              </div>
              <div className={classes.item_price}>
                {price.USD ? `Market price :${price.USD} $` : ""}
                {price.USD ? (
                  <div
                    className={classNames(
                      classes.item_info,
                      volatility < 0 && classes.item_info_down
                    )}
                  >
                    {volatility} %
                  </div>
                ) : (
                  <div className={classes.unknown_item}>
                    We have no information about this coin!
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    );
};
MainItem.propTypes = {
  token: PropTypes.array,
  src: PropTypes.string,
  name: PropTypes.string,
  annotation: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
};

export default MainItem;
