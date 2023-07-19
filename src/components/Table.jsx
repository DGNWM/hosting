import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [filterData, setFilterData] = useState([]);
  const email = localStorage.getItem("userEmail");

  const handleOrderData = useCallback(async () => {
    const response = await axios.get("http://localhost:3030/order/getAllData");
    const filteredItems = response.data.orderData.filter((item) => item.email === email);
    setFilterData(filteredItems[0]?.orders);
  }, [email]);

  useEffect(() => {
    handleOrderData();
  }, [handleOrderData]);
  const data = useMemo(() => filterData, [filterData]);

  /** @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: "Food Name",
      accessorKey: "name",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Price",
      accessorKey: "total",
    },
    {
      header: "Purshased Date",
      accessorKey: "createdAt",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {filterData ? (
        <div className="w3-container w-full overflow-x-scroll">
          <table className="w3-table-all w3-hoverable">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <p className="text-2xl font-semibold lg:text-4xl px-6">
            You don't have any purchased items yet
          </p>
          <div className="w-full h-full flex justify-center flex-col lg:gap-4 items-center">
            <img
              className="w-[400px] h-[350px] object-contain"
              src="https://cdn.discordapp.com/attachments/1123144974683361401/1125350006325510174/empty.gif"
              alt="shop now"
            />
            <div>
              <Link to={"/menu"}>
                <button className="bg-primary px-5 py-3 rounded">
                  Go to Shop
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
