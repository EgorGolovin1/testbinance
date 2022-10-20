import React from "react";

import "./banner.sass";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <h3 className="banner_text">The future is already here</h3>
      <h1 className="banner_text">There is never too much freedom</h1>
      <h2 className="banner_text">Your money. Your choice</h2>
      <button className="add_button">Add your own Coin</button>
    </div>
  );
};

export default Banner;
