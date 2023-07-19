import {
  deselectAllCartItems,
  removeSelectedProd,
} from "Redux/Slices/CartItemSelectionSlice";
import { ToastMsg } from "Toast/Toast";
import axios from "axios";
import { ModalUi } from "components";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbPlus } from "react-icons/tb";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import swal from "sweetalert";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { selectedCartItems } = useSelector((state) => state.cartItemSelection);
  const { userEmail } = useSelector((state) => state.auth);

  const { deliveryFormSubmit } = useSelector((state) => state.order);

  const orderForm = selectedCartItems?.map(
    ({ id, rating, price, ...rest }) => ({
      ...rest,
      email: userEmail,
    })
  );

  const totalPayment = selectedCartItems.reduce(
    (acc, item) => acc + item.total,
    0
  );
  const CheckoutItems = selectedCartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const deliveryFee = 100;

  const orderHandler = async () => {
    setLoading(true);
    try {
      if (deliveryFormSubmit) {
        if (orderForm.length > 0) {
          const response = await axios.post(
            "http://localhost:3030/order/orderData",
            orderForm
          );

          const { error, success } = response.data;

          if (success) {
            swal({
              title: "Successfully received your order",
              icon: "success",
              button: "Ok !",
            });
            dispatch(deselectAllCartItems());
          } else {
            ToastMsg(error, "error");
          }
        }else{
        ToastMsg("Please add some items in checkout", "info");
        }
      } else {
        ToastMsg("Please fill the delivery form first !", "info");
      }
    } catch (err) {
      ToastMsg(err.message, "error");
    }
    setLoading(false);
  };

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <div className="w-full flex justify-between flex-wrap mt-36 px-10 font-primary ">
        <div className="basis-full lg:basis-[55%]">
          <div className="bg-slate-50 rounded py-8 px-5 shadow-xl flex items-center justify-center gap-5 hover:cursor-pointer mb-10">
            <TbPlus /> <ModalUi />
          </div>
          {selectedCartItems.map((item, id) => (
            <div
              key={item + id}
              className="bg-slate-50 shadow-xl mb-2 flex items-center justify-between rounded lg:p-5"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 lg:w-40 object-cover"
                />
                <div>
                  <p className="font-semibold mb-2  text-lg md:text-xl">
                    {item.name}
                  </p>
                  <p className="font-semibold text-gray-400 text-lg md:text-xl">
                    Category: {item.category}
                  </p>
                  <p className="font-bold text-lg">Quantity: {item.quantity}</p>
                </div>
              </div>

              <div className="font-bold flex items-center gap-5 lg:gap-10 flex-col text-black">
                <AiFillDelete
                  onClick={() => dispatch(removeSelectedProd(item.id))}
                  className="cursor-pointer text-black hover:text-red-500"
                  size={20}
                />
                <p className="text-lg font-bold">Total Rs. {item.total}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="basis-full mt-10 lg:mt-0 lg:basis-[35%] h-[400px] bg-slate-50 shadow-xl rounded overflow-hidden">
          <p className="text-4xl py-4 border-b-[1px] px-5 font-bold border-black">
            Order Summary
          </p>
          <div className="flex justify-between font-bold text-2xl p-5">
            <p>Total items</p>
            <p>{CheckoutItems}</p>
          </div>
          <div className="flex justify-between font-bold text-2xl p-5">
            <p>Delivery Fee</p>
            <p>Rs. {deliveryFee}</p>
          </div>
          <div className="flex justify-between font-bold text-2xl p-5">
            <p>Total Payment</p>
            <p>Rs. {totalPayment + deliveryFee}</p>
          </div>
          <p className="text-lg text-gray-500 font-bold text-right p-5">
            All tax included
          </p>
          <p className="text-black font-bold px-5">
            Choose a payment method to place your order
          </p>
          <div className="flex justify-between mt-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Khalti_Digital_Wallet_Logo.jpg/2560px-Khalti_Digital_Wallet_Logo.jpg"
              alt="khalti"
              className="w-40 object-contain hover:cursor-pointer"
            />
            <img
              src="data:image/png;base64,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"
              alt="esewa"
              className="w-40 object-contain hover:cursor-pointer"
            />

            <img
              src="data:image/png;base64,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"
              alt="ime pay"
              className="w-40 object-contain hover:cursor-pointer"
            />
          </div>
          <button
            onClick={orderHandler}
            className="bg-primary rounded px-8 py-5 w-full mt-5 text-3xl font-bold"
          >
            {loading ? (
              <div className="w-fit mx-auto">
                <RotatingLines width="25" />
              </div>
            ) : (
              <> Place Your Order</>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
