import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

export const Dropdown = ({ show, onClick }) => {
  const dropDownItems = [
    {
      name: "Breakfast",
      isScroll: false,
    },
    {
      name: "Lunch",
      isScroll: false,
    },
    {
      name: "Drinks",
      isScroll: false,
    },
    {
      name: "Today Special",
      to: "special",
      isScroll: true,
    },
    {
      name: "Special Menu",
      to: "menu",
      isScroll: true,
    },
  ];

  return show ? (
    <div className="z-50 fixed top-32 left-[53%] bg-white w-[200px] h-fit rounded-md p-6">
      {dropDownItems.map((meal, i) =>
        meal.isScroll ? (
          <Scroll
            key={`${meal.isScroll}.${meal.name}.${i}`}
            onClick={onClick}
            activeclassname="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to={meal.to}
            className="hover:no-underline"
          >
            <div
              className="border-gray-500 border-b-[1px] text-primary hover:cursor-pointer hover:text-blue-700 w-full mb-2 shadow-xl"
              style={{ fontFamily: "cursive", fontSize: "20px" }}
            >
              {meal.name}
            </div>
          </Scroll>
        ) : (
          <Link
            to={`menu/${i + 1}`}
            key={`${meal.name}.${i}`}
            onClick={onClick}
            className="hover:no-underline"
          >
            <div
              className="border-gray-500 border-b-[1px] text-primary hover:cursor-pointer hover:text-blue-700 w-full mb-2 shadow-xl"
              style={{ fontFamily: "cursive", fontSize: "20px" }}
            >
              {meal.name}
            </div>
          </Link>
        )
      )}
    </div>
  ) : null;
};
