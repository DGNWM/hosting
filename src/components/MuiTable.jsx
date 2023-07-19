import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";

// Define a custom theme with updated styling
const theme = createTheme({
  typography: {
    fontSize: 19,
  },
});

export default function MuiTable({ API_URL, type }) {
  const [rows, setRows] = useState([]);

  // getting user details from database
  useEffect(() => {
    const userDetails = async () => {
      const response = await axios.get(API_URL);

      switch (type) {
        case "userDetails": {
          let data = response?.data?.getAlladta;
          data = data.map((item) => ({ ...item, id: item._id }));
          setRows(data);
          break;
        }
        case "orderDetails": {
          let data = response.data?.orderData;
          // Flatten the nested orders array and add ID for each order
          data = data.flatMap((item) =>
            item.orders.map((order, index) => ({
              ...order,
              id: `${item._id}_${index}`,
              email: item.email,
            }))
          );
          setRows(data);
          break;
        }
        default:
          return null;
      }
    };

    userDetails();
  }, [API_URL, type]);

  let columns;

  switch (type) {
    case "userDetails": {
      columns = [
        { field: "id", headerName: "ID", width: 140 },
        { field: "name", headerName: "FULL NAME", width: 140 },
        { field: "email", headerName: "EMAIL", width: 140 },
        { field: "phone", headerName: "PHONE", width: 140 },
        { field: "address", headerName: "ADDRESS", width: 190 },
      ];
      break;
    }
    case "orderDetails": {
      columns = [
        { field: "_id", headerName: "ID", width: 140 },
        { field: "email", headerName: "EMAIL", width: 140 },
        { field: "name", headerName: "FOOD NAME", width: 140 },
        { field: "status", headerName: "STATUS", width: 100 },
        { field: "quantity", headerName: "QUANTITY", width: 110 },
        { field: "total", headerName: "PRICE", width: 110 },
        { field: "category", headerName: "CATEGORY", width: 110 },
        { field: "createdAt", headerName: "DATE", width: 220 },
      ];
      break;
    }
    default:
      return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 480, width: "100%" }}>
        <DataGrid
          className="font-primary"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
        />
      </div>
    </ThemeProvider>
  );
}
