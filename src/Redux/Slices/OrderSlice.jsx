import { createSlice } from "@reduxjs/toolkit";

const formSubmit = localStorage.getItem("deliveryFormSubmit")==="true";

const OrderSlice = createSlice({
  name: "cart",
  initialState: {
    deliveryFormSubmit: formSubmit,
    orderItems: [],
  },
  reducers: {
    setIsFormSubmit(state, action) {
      state.deliveryFormSubmit = action.payload;
    },
  },
});

export const {setIsFormSubmit,} = OrderSlice.actions;

export default OrderSlice.reducer;
