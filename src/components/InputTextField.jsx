import { TextField } from "@mui/material";

const InputTextField = ({ name, value, changeValue, type }) => {
  return (
    <TextField
      type={type}
      fullWidth
      required
      label={name}
      variant="outlined"
      InputProps={{
        style: {
          fontSize: "14px",
        },
      }}
      value={value}
      onChange={changeValue}
    />
  );
};

export default InputTextField;
