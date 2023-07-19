import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Orders from "./Orders";
import Users from "./Users";
import Delivery from './Delivery';

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState('Users Details');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Users Details':
        return <Users />;
      case 'Orders Details':
        return <Orders />;
      case 'Delivery Details':
        return <Delivery />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full pt-32 flex font-primary overflow-hidden">
        <Sidebar setSelectedOption={setSelectedOption} />
        <div className='w-full'>
            {renderComponent()}
        </div>
    </div>
  );
};

export default AdminPanel;
