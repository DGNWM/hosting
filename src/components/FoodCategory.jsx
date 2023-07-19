import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "Redux/Slices/CartProductSlice";
import { ToastContainer } from "react-toastify";
import { ToastMsg } from "Toast/Toast";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const FoodCategory = ({ data, foodType }) => {
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  // checking user is logged in or not
  const { isLoggedIn } = useSelector((state) => state.auth);

  // dispathc func calling
  const dispatch = useDispatch();

  // filtering data on the basis of veg and non veg item
  useEffect(() => {
    const filter = data.filter(
      (item) => item.type === "" || item.type === foodType || foodType === ""
    );
    setFilterData(filter);
  }, [foodType, data]);

  const itemsToRender = foodType === "" ? data : filterData;

  // adding food items into cart
  const addtoCart = (product) => {
    if (isLoggedIn) {
      dispatch(addProduct(product));
    } else {
      const msg = "Please Login first";
      ToastMsg(msg, "info");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-rows-12 grid-cols-1 lg:grid-rows-4 lg:grid-cols-4 gap-10 w-full font-primary">
        {itemsToRender.map((item, id) => (
          <div
            key={`${item}.${id}`}
            className="relative shadow-xl bg-slate-100 rounded-md p-4 mx-auto md:mx-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[280px] bg-white h-[280px] object-center shadow-lg rounded-md"
            />
            <p className="absolute top-8 rounded left-10 px-8 py-2 z-10 text-white font-bold bg-red-600">
              Rs. {item.price}
            </p>
            <p className="w-full font-bold text-2xl truncate my-2">
              {item.name}
            </p>
            <div className="flex justify-center mb-4">
              <Rating
                name="half-rating-read"
                value={Number(item.rating)}
                precision={0.5}
                size="large"
                readOnly
              />
            </div>
            <p
              onClick={() => addtoCart(item)}
              className="bg-primary hover:bg-purple-600 transition-all hover:cursor-pointer text-white px-10 py-4 rounded w-fit mx-auto"
            >
              Add to cart
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCategory;
