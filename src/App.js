import { Dropdown, Navbar, PopUp } from "components";
import { Checkout, Home, Login, Menu, MyOrder, Register } from "pages";
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    // If the click is within the dropdown, do nothing
    if (dropdownRef.current && dropdownRef.current.contains(event.target))
      return;
    // Otherwise, hide the dropdown
    setShowDropdown(false);
    setShowDownArrow(false);
  };

  // Listen for clicks anywhere in the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDownArrow(true);
  };

  // remove the dropdown if clicked on menuitems
  const handleDropdownClick = () => {
    setShowDropdown(false);
    setShowDownArrow(false);
  };

  return (
    <>
      <Navbar onClick={toggleDropdown} showDownArrow={showDownArrow} />
      <div ref={dropdownRef}>
        <Dropdown show={showDropdown} onClick={handleDropdownClick} />
      </div>
      <PopUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu/:tab?" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<MyOrder />} />
      </Routes>
    </>
  );
}

export default App;
