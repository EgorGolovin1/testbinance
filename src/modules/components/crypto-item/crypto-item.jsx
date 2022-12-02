import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import { tokens, getPrice, getInform } from "../../redux/selectors";

import {
  showDetails,
  fetchPrices,
  toggleToken,
  fetchMarketInform,
  editToken,
} from "../../redux/tokensSlice";

import classes from "./crypto-item.module.sass";
import { Link, useParams } from "react-router-dom";

const CryptoItem = (props) => {
  const tokensArr = useSelector(tokens);
  const dispatch = useDispatch();

  const price = useSelector(getPrice);
  const marketInform = useSelector(getInform);

  let balance = (price.USD * Math.pow(10, 2)) / Math.pow(10, 2);
  let volatility = Math.round(marketInform * Math.pow(10, 2)) / Math.pow(10, 2);

  const showInformation = () => {
    dispatch(showDetails(tokensArr[index].id));
    dispatch(fetchPrices(tokensArr[index].abbreviation));
    dispatch(fetchMarketInform(tokensArr[index].abbreviation));
  };

  const viewToken = () => {
    dispatch(toggleToken(props.id));
    props.openViewModal();
  };

  const isEdit = () => {
    dispatch(editToken(props.id));
    props.openEditModal();
  };

  const { id } = useParams();

  let index = id - 1;
  return (
    <div className="wrapper">
      {props.id ? (
        <div className={classes.item}>
          <button
            onClick={() => viewToken()}
            className={classNames(classes.eye, props.isView && classes.isView)}
          >
            <img alt="eye" className={classes.picture} src="./view.svg" />
          </button>
          <Link
            className={classes.button}
            to={`/items/${tokensArr.findIndex((el) => el.id === props.id) + 1}`}
          >
            <img
              src={props.src}
              alt="./search.svg"
              className={classes.item_picture}
              id={props.id}
            />
            {props.name}
          </Link>
          <button onClick={() => isEdit()} className={classes.button_edit}>
            <img src="../edit.svg" alt="pen" className={classes.picture_edit} />
            Edit token
          </button>
        </div>
      ) : (
        <div className={classes.wapper_secondary}>
          <div className={classes.item_main}>
            <img
              src={tokensArr[index].src}
              alt="token"
              className={classes.picture_main}
            />
            <div className={classes.wrapper_main}>
              <div className={classes.name_main}>{tokensArr[index].name}</div>
              <button
                onClick={() => showInformation()}
                className={classes.details_main}
              >
                Details
              </button>
              <div className="wrapper2">
                {tokensArr[index].main ? (
                  <>
                    <div className={classes.amount}>
                      {tokensArr[index].myAmount
                        ? `My tokens: ${tokensArr[index].myAmount}`
                        : ""}
                    </div>
                    <div className={classes.annotation}>
                      {tokensArr[index].annotation}
                    </div>
                    <div className={classes.balance}>
                      {tokensArr[index].myAmount
                        ? `My balance: ${Math.round(
                            tokensArr[index].myAmount * balance
                          )} $`
                        : ""}
                    </div>
                    <div className={classes.price}>
                      Market price : {price.USD} $
                      <div
                        className={classNames(
                          classes.info,
                          volatility < 0 && classes.info_down
                        )}
                      >
                        {volatility} %
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CryptoItem.propTypes = {
  props: PropTypes.object,
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  abbreviation: PropTypes.string,
  isView: PropTypes.bool,
  openViewModal: PropTypes.func,
  openEditModal: PropTypes.func,
  main: PropTypes.bool,
};

export default CryptoItem;
