import { createSelector } from "@reduxjs/toolkit";

export const getTokens = (state) => state.tokens.tokens;

export const getViewToken = createSelector(getTokens, (tokens) => {
  return tokens.filter((t) => t.isView);
});

export const getEditToken = createSelector(getTokens, (tokens) => {
  return tokens.filter((t) => t.isEditing);
});

export const tokens = createSelector(getTokens, (tokens) => {
  return tokens;
});

export const mainToken = createSelector(getTokens, (token) => {
  return token.filter((t) => t.main);
});

export const getPrice = (state) => state.tokens.prices;

export const getInform = (state) => state.tokens.marketInform;
