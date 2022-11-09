import PropTypes from "prop-types";
import React, { Fragment } from "react";
import classNames from "classnames/bind";

import "./main-item.sass";

const MainItem = ({ filteredCryptoArr, price, market }) => {
  console.log(price.btc);
  let volatility = Math.round(market * Math.pow(10, 2)) / Math.pow(10, 2);
  return (
    <div className="main-item">
      {filteredCryptoArr.map((item) => (
        <Fragment key={item.id}>
          <img src={item.src} alt="token" className="main-item_picture" />
          <div className="info-wrapper">
            <div className="main-item_name">{item.name}</div>
            <button className="main-item_details">Details</button>
            <div className="main-item_amount">
              {item.myAmount ? `My tokens: ${item.myAmount}` : ""}
            </div>
            <div className="main-item_annotation">{item.annotation}</div>
            <div className="main-item_balance">
              {" "}
              {item.myAmount
                ? `My balance: ${
                    Math.round(item.myAmount * price.USD * Math.pow(10, 2)) /
                    Math.pow(10, 2)
                  } $`
                : ""}
            </div>
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
