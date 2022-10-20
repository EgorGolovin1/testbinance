import PropTypes from "prop-types";
import React, { Fragment } from "react";
import classNames from "classnames/bind";

import "./main-item.sass";

const MainItem = ({ filteredCryptoArr, price, market }) => {
  let volatility = Math.round(market * Math.pow(10, 2)) / Math.pow(10, 2);
  return (
    <div className="main-item">
      {filteredCryptoArr.map((item) => (
        <Fragment key={item.id}>
          <img src={item.src} alt="token" className="main-item_picture" />
          <div className="info-wrapper">
            <div className="main-item_name">{item.name}</div>
            <div className="main-item_price">
              Market price :{price.USD} $
              <div
                className={classNames("main-item_info", {
                  down: volatility < 0,
                })}
              >
                {volatility}%
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
MainItem.propTypes = {
  filteredCryptoArr: PropTypes.array,
  price: PropTypes.object,
  market: PropTypes.number,
};

export default MainItem;
