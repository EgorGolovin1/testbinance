import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { coins, dataIcons } from "../data/coins";

export const rootSelector = (state) => state.tokens.tokens;

export const viewTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.filter((t) => t.favorite);
});

export const fetchPrices = createAsyncThunk(
  "prices/fetchPrices",
  async function (id) {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${id}&tsyms=USD`
    );

    const data = await response.json();

    return data;
  }
);

export const fetchMarketInform = createAsyncThunk(
  "marketInform/fetchMarketInform",
  async function (id) {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=USD`
    );

    const data = await response.json();

    return data.RAW[id].USD.CHANGEPCT24HOUR;
  }
);

const initialValue = {
  tokens: coins,
  icons: dataIcons,
  searchParam: "",
  filterStatus: "hot",
  prices: {},
  statusPrice: null,
  erorrPrice: null,
  marketInform: 0,
};

export const tokensSlice = createSlice({
  name: "CryptoApp",
  initialState: initialValue,
  reducers: {
    showDetails(state, action) {
      state.tokens.map((item) => {
        if (item.id === action.payload) return (item.main = true);
        else return (item.main = false);
      });
    },
    closeDetails(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.main = false;
    },
    toggleToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isView = !token.isView;
    },
    changeFilter(state, action) {
      state.filterStatus = action.payload;
    },
    editToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isEditing = !token.isEditing;
    },
    deleteToken(state, action) {
      const tokens = state.tokens.filter((item) => item.id !== action.payload);
      state.tokens = tokens;
    },
    finishEditing(state, action) {
      let token = state.tokens.find((item) => item.id === action.payload.id);
      token.src =
        state.icons.find((item) => item.src === action.payload.src)?.src ||
        "./unknown.svg";
      token.name = action.payload.name;
      token.abbreviation = action.payload.abbreviation;
      token.myAmount = action.payload.myAmount;
      token.annotation = action.payload.annotation;
      token.isEditing = false;
    },
    addToken(state, action) {
      const id = uuidv4();
      state.tokens.push({
        ...action.payload,
        src:
          state.icons.find((item) => item.src == action.payload.src)?.src ||
          "./unknown.svg",
        id: id,
        main: false,
        isView: false,
        isEditing: false,
      });
    },
    searchToken(state, action) {
      state.searchParam = action.payload;
    },
  },
  extraReducers: {
    [fetchPrices.pending]: (state) => {
      state.statusPrice = "loading";
      state.erorrPrice = null;
    },
    [fetchPrices.fulfilled]: (state, action) => {
      state.statusPrice = "resolved";
      state.prices = action.payload;
    },
    [fetchMarketInform.pending]: (state) => {
      state.statusInfo = "loading";
      state.erorrInfo = null;
    },
    [fetchMarketInform.fulfilled]: (state, action) => {
      state.statusInfo = "resolved";
      state.marketInform = action.payload;
    },
  },
});

export const {
  showDetails,
  changeFilter,
  toggleToken,
  addToken,
  editToken,
  finishEditing,
  deleteToken,
  closeDetails,
  searchToken,
} = tokensSlice.actions;

export default tokensSlice.reducer;
