import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: null,
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartId = action.payload.id;
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    },
    clearCart: (state) => {
      state.cartId = null;
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;