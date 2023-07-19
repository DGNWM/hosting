import { useState } from "react";

const Sidebar = ({ setSelectedOption }) => {
  const [selectedLink, setSelectedLink] = useState('Users Details');

  const handleClick = (option) => {
    setSelectedOption(option);
    setSelectedLink(option);
  };

  return (
    <div className="w-[180px] h-[87.5vh] bg-slate-600 shadow-lg text-white">
      <h1 className="text-3xl py-8 font-bold w-fit mx-auto">Dashboard</h1>
      <div className="flex flex-col items-center font-bold text-2xl py-5 gap-10 border-white border-t-[1px]">
          <p 
            className={`cursor-pointer hover:text-red-500 ${selectedLink === 'Users Details' && 'text-yellow-500'}`} 
            onClick={() => handleClick('Users Details')}
          >
            Users Details
          </p>
          <p 
            className={`cursor-pointer hover:text-red-500 ${selectedLink === 'Orders Details' && 'text-yellow-500'}`} 
            onClick={() => handleClick('Orders Details')}
          >
            Orders Details
          </p>
          <p 
            className={`cursor-pointer hover:text-red-500 ${selectedLink === 'Delivery Details' && 'text-yellow-500'}`} 
            onClick={() => handleClick('Delivery Details')}
          >
            Delivery Details
          </p>
      </div>
    </div>
  );
};

export default Sidebar;
