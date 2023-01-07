import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartslice: false,
   cartitems: [],
};

const CartSlice = createSlice({
   initialState,
   name: "cart",
   reducers: {
      setOpenCart: (action, state) => {
         state.cartState = action.payload.cartState;
      },
      setCloseCart: (action, state) => {
         state.cartState = action.payload.cartState;
      },
      setAddItemToCart: (action, state) => {
         state.cartItems.push(action.payload);
      },
   },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } =
   CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;
