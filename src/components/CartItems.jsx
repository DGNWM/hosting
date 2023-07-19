import React from "react";
import { FiLock } from "react-icons/fi";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TbMinus, TbPlus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  decreaseQty,
  increaseQty,
  removeProduct,
} from "Redux/Slices/CartProductSlice";
import {
  selectAllCartItems,
  deselectAllCartItems,
  selectCartItem,
  deselectCartItem,
  increaseQtySelectItem,
  decreaseQtySelectItem,
} from "Redux/Slices/CartItemSelectionSlice";

const CartItems = ({ onClose }) => {
  // cartproduct slice states
  const dispatch = useDispatch();
  const { cartDatas: data } = useSelector((state) => state.cart);

  // cartitemselection slice state
  const { selectAll, selectedCartItems } = useSelector(
    (state) => state.cartItemSelection
  );

  const cartItemNum = data.reduce((acc, item) => acc + item.quantity, 0);


  // selected items total price 
  const selectedItemNum = selectedCartItems.reduce((acc, item) => acc + item.quantity, 0);

  const slectedItemPrice = selectedCartItems.reduce((acc, item) => acc + item.total, 0);

console.log(selectedItemNum, 'selected item num')
console.log(slectedItemPrice, 'selected item price')



  

  return (
    <div className="h-full font-primary text-black" role="presentation">
      <div className="w-[90%] md:w-[500px] bg-gray-100 fixed top-0 right-0 p-5 flex justify-between items-center border-b-[1px] border-gray-800">
        <div className="flex items-center gap-5 ">
          <PiHandbagSimpleLight size={40} />{" "}
          <p className="text-3xl font-bold">
            {data.length > 0 ? <>{cartItemNum} items</> : <>Cart</>}
          </p>
        </div>
        <RxCross1
          onClick={onClose}
          className="hover:cursor-pointer"
          size={35}
        />
      </div>
      {data.length > 0 ? (
        <div className="mt-[6.5rem] pb-[45rem] h-fit overflow-y-scroll">
          <label className="bg-[#F9F1F0] py-4 md:px-14 flex items-center gap-5 text-2xl px-6  w-full">
            <input
              type="checkbox"
              checked={selectedCartItems.length === data.length}
              onChange={() => {
                if (selectAll) {
                  dispatch(deselectAllCartItems());
                } else {
                  dispatch(selectAllCartItems(data));
                }
              }}
            />{" "}
            Select All
          </label>
          {data.map((item, id) => (
            <div key={item.name + id}>
              <div className="bg-[#F9F1F0] lx:p-6  md:p-6 px-2 py-2 flex gap-4 md:rounded-[20px] rounded-[10px] md:mx-10 lx:mx-10 mx-3 my-5">
                <input
                  type="checkbox"
                  checked={selectedCartItems.some((p) => p.id === item.id)}
                  onChange={() => {
                    if (selectedCartItems.some((p) => p.id === item.id)) {
                      dispatch(deselectCartItem(item.id));
                    } else {
                      dispatch(selectCartItem(item));
                    }
                  }}
                />
                <div className="p-3 bg-white rounded-[12px] overflow-hidden">
                  <img
                    src={item.image}
                    className="h-28 w-40 object-cover "
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-black capitalize text-lg md:text-xl">
                      {item.name}
                    </h3>
                    <div
                      className="cursor-pointer text-black hover:text-[#A50F06]"
                      onClick={() => dispatch(removeProduct(item.id))}
                    >
                      <AiFillDelete size={20} />
                    </div>
                  </div>
                  <p className=" text-black font-medium ">{item.category}</p>
                  <p className=" font-bold text-lg">
                    <span className="text-[#A50F06] ">Rs. </span>
                    <span>{item.price}</span>
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => {
                          dispatch(decreaseQty(item.id));
                          dispatch(decreaseQtySelectItem(item.id));
                        }}
                        className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
                      >
                        <TbMinus />
                      </button>
                      <p className="font-semibold p-1">{item.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(increaseQty(item.id));
                          dispatch(increaseQtySelectItem(item.id));
                        }}
                        className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
                      >
                        <TbPlus />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <p>Total :</p>
                      <p>
                        <span className="text-[#A50F06]">Rs.</span>
                        {item.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="fixed bottom-0 right-0 bg-[#F9F1F0] z-40 w-[90%] md:w-[500px] flex flex-col md:gap-4 gap:1 p-4 overflow-hidden">
            <p className="text-black font-bold w-fit mx-auto  text-xl  md:text-3xl">
              Order Summary
            </p>
            <div>
             
              <p className="flex justify-between font-bold text-2xl mx-10 py-2">
                Shipping<span>Rs. 100</span>
              </p>
            </div>
            <div>
            <p className="flex justify-between font-bold text-2xl mx-10">
                Sub Total <span>Rs.{slectedItemPrice + 100}</span>
              </p>
            </div>
            <div
              onClick={onClose}
              to="/checkout"
              className="bg-primary md:text-2xl text-xl hover:no-underline    py-10 rounded-[10px] flex items-center gap-10  md:gap-44  justify-center font-bold"
            >
              <div className="">
                <p className="font-thin ">Total : {selectedItemNum ? <>({selectedItemNum} items)</>:null}</p>{" "}
                <h1 className="my-3">Rs : {slectedItemPrice + 100}</h1>
              </div>
              <div>
                <Link to='/checkout' className="hover:no-underline">
                  {" "}
                  <p className="bg-slate-300 px-3 py-4 text-xl rounded-[10px] lx:px-6 md:px-6 md:py-6 lx:py-6 font-bold text-primary md:text-3xl lx:text-3xl ">
                    Proceed to Checkout
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-full flex justify-center flex-col lg:gap-4 items-center">
            <p className="text-2xl font-bold">Your Cart is empty</p>
            <img
              className="w-[400px] h-[350px] object-contain"
              src="https://cdn.discordapp.com/attachments/1123144974683361401/1125350006325510174/empty.gif"
              alt="shop now"
            />
            <div>
              <Link to={"/menu"}>
                <button
                  onClick={onClose}
                  className="bg-primary px-5 py-3 rounded"
                >
                  Go to Shop
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
