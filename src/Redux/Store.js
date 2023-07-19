import { configureStore } from "@reduxjs/toolkit";
import CartProductReducer from "./Slices/CartProductSlice";
import CartItemSelectionReducer from "./Slices/CartItemSelectionSlice";
import AuthReducer from "./Auth/AuthSlice";
import OrderReducer from "./Slices/OrderSlice";

export const store = configureStore({
  reducer: {
    cart: CartProductReducer,
    cartItemSelection: CartItemSelectionReducer,
    auth: AuthReducer,
    order: OrderReducer,
  },
});
