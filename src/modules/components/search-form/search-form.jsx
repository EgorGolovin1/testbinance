import React from "react";
import PropTypes from "prop-types";

import classes from "./search-form.module.sass";

const SearchForm = ({ coinQuery, setSearchParams }) => {
  return (
    <div className={classes.form}>
      <form className={classes.search_form}>
        <input
          type="search"
          name="search"
          className={classes.search_panel}
          placeholder="Search coin..."
          onChange={(e) => setSearchParams({ search: e.target.value })}
          defaultValue={coinQuery}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  coinQuery: PropTypes.string,
  setSearchParams: PropTypes.func,
};

export default SearchForm;
