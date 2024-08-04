import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

const DropDown = ({ handleYearChange }) => {
  const { t } = useTranslation("Events");
  const years = [
    { label: "2024", year: 2024 },
    { label: "2023", year: 2023 },
    { label: "2022", year: 2022 },
    { label: "2021", year: 2021 },
    { label: "2020", year: 2020 },
  ];

  const [selectedYear, setSelectedYear] = useState(years[0].year);

  const handleChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    handleYearChange(event, years.find((y) => y.year === year));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="year-select-label">{t("select_year")}</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={selectedYear}
          label={t("select_year")}
          onChange={handleChange}
        >
          {years.map((year) => (
            <MenuItem key={year.year} value={year.year}>
            {t(year.label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
