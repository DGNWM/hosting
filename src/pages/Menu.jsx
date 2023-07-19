import React, { useState } from "react";
import { Tab } from "@mui/material";
import { FoodCategory } from "components";
import breakfastData from "../data/breakfast.json";
import launchData from "../data/launch.json";
import snacksData from "../data/snacks.json";
import drinksData from "../data/drinks.json";
import { useParams, useNavigate } from "react-router-dom";

const Menu = () => {
  let { tab } = useParams();
  const navigate = useNavigate();

  // checking the food type is veg or non-veg
  const [foodType, setFoodType] = useState("");
  const [value, setValue] = useState(tab || "1");

  // changing the menu tab
  const handleMenuChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/menu/${newValue}`);
  };

  const renderContent = () => {
    if (value === "1") {
      return <FoodCategory foodType={foodType} data={breakfastData} />;
    } else if (value === "2") {
      return <FoodCategory foodType={foodType} data={launchData} />;
    } else if (value === "3") {
      return <FoodCategory foodType={foodType} data={snacksData} />;
    } else if (value === "4") {
      return <FoodCategory foodType={foodType} data={drinksData} />;
    }
    return null;
  };

  // handling food type change (veg, non-veg, all)
  const handleFoodTypeChange = (selectedFoodType) => {
    setFoodType(selectedFoodType);
  };

  return (
    <div className="mt-36 lg:px-6">
      <div className="w-full flex justify-between flex-wrap lg:pr-5 border-b-2 border-gray-400">
        <div>
          <Tab
            label="Breakfast"
            value="1"
            onClick={() => handleMenuChange(null, "1")}
            selected={value === "1"}
            sx={{
              backgroundColor: value === "1" ? "gray" : "white",
              color: "brown",
              fontSize: { xs: "12px", sm: "16px" },
              fontFamily: "sans",
            }}
          />
          <Tab
            label="Lunch"
            value="2"
            onClick={() => handleMenuChange(null, "2")}
            selected={value === "2"}
            sx={{
              backgroundColor: value === "2" ? "gray" : "white",
              color: "brown",
              fontSize: { xs: "12px", sm: "16px" },
              fontFamily: "sans",
            }}
          />
          <Tab
            label="Snacks"
            value="3"
            onClick={() => handleMenuChange(null, "3")}
            selected={value === "3"}
            sx={{
              backgroundColor: value === "3" ? "gray" : "white",
              color: "brown",
              fontSize: { xs: "12px", sm: "16px" },
              fontFamily: "sans",
            }}
          />
          <Tab
            label="Drinks"
            value="4"
            onClick={() => handleMenuChange(null, "4")}
            selected={value === "4"}
            sx={{
              backgroundColor: value === "4" ? "gray" : "white",
              color: "brown",
              fontSize: { xs: "12px", sm: "16px" },
              fontFamily: "sans",
            }}
          />
        </div>
        <div className="flex gap-x-5 items-center px-5 lg:px-0">
          <label htmlFor="all">
            <input
              checked={foodType === ""}
              type="radio"
              name="foodType"
              id="all"
              onChange={() => handleFoodTypeChange("")}
            />
            &nbsp;All
          </label>
          <label htmlFor="veg">
            <input
              checked={foodType === "veg"}
              type="radio"
              name="foodType"
              id="veg"
              onChange={() => handleFoodTypeChange("veg")}
            />
            &nbsp;Veg
          </label>
          <label htmlFor="non-veg">
            <input
              checked={foodType === "non-veg"}
              type="radio"
              name="foodType"
              id="non-veg"
              onChange={() => handleFoodTypeChange("non-veg")}
            />
            &nbsp;Non-veg
          </label>
        </div>
      </div>
      <div className="mt-5 p-5">{renderContent()}</div>
    </div>
  );
};

export default Menu;
