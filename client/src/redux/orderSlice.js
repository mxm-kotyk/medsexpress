import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.items.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === itemId);
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 0) {
        state.items[itemIndex].quantity -= 1;
      }
    },
    removeFromOrder: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    },
  },
});

export const {
  addToOrder,
  incrementQuantity,
  decrementQuantity,
  removeFromOrder,
} = orderSlice.actions;

const persistConfig = {
  key: "order",
  storage,
};

export const persistedOrderReducer = persistReducer(
  persistConfig,
  orderSlice.reducer
);
