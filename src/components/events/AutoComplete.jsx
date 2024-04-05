import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
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
    />
  );
}

const year = [
  { label: "2024", year: 1994 },
  { label: "2023", year: 1972 },
  { label: "2022", year: 1974 },
];
