import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.tokens.tokens;
export const rootSearchSelector = (state) => state.tokens.searchParam;

export const viewTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isView) || {};
});

export const editTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isEditing) || {};
});

export const tokenSelector = createSelector(
  [rootSearchSelector, rootSelector],
  (searchParams, tokens) => {
    return tokens.filter((t) =>
      t.name.toLowerCase().includes(searchParams.toLowerCase())
    );
  }
);

export const getPrice = (state) => state.tokens.prices;

export const getInform = (state) => state.tokens.marketInform;
