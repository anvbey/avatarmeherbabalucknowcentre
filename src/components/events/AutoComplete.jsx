import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const DropDown = ({ handleYearChange }) => {
  const year = [
    { label: "2024", year: 2024 },
    { label: "2023", year: 2023 },
    { label: "2022", year: 2022 },
    { label: "2021", year: 2021 },
    { label: "2020", year: 2020 },
  ];

  const defaultProps = {
    options: year,
    getOptionLabel: (option) => option.label,
  };

  const maxWidth = year.reduce((max, option) => {
    const labelWidth = option.label.length * 8;
    return labelWidth > max ? labelWidth : max;
  }, 0);

  const staticWidth = `${maxWidth + 100}px`;

  return (
    <Autocomplete
      {...defaultProps}
      id="disable-clearable"
      disableClearable
      renderInput={(params) => (
        <TextField {...params} label="Select Year" variant="standard" />
      )}
      style={{ width: staticWidth, margin: "10px 0 0 10px" }}
      defaultValue={year[0]}
      onChange={(event, value) => handleYearChange(event, value)}
    />
  );
};

export default DropDown;
