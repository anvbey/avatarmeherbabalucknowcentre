import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import ImgMediaCard from "../../components/events/Cards";
import DropDown from "../../components/events/AutoComplete";

import "./Events.css";
import englishData from "../../data/Events.json";
import hindiData from "../../data/HEvents.json";

const Events = () => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [data, setData] = useState([]);
  const { i18n } = useTranslation();
  // Update data based on the selected language
  useEffect(() => {
    if (i18n.language === "hi") {
      setData(hindiData);
    } else {
      setData(englishData);
    }
  }, [i18n.language]);

  // Function to handle year selection change
  const handleYearChange = (event, value) => {
    setSelectedYear(value.label);
  };

  const eventsForSelectedYear =
    data.find((item) => item.year === selectedYear)?.events || [];

  const { t } = useTranslation("Events");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <DropDown handleYearChange={handleYearChange} />
      </Box>
      <Box
        className="cards"
        sx={{
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {eventsForSelectedYear.length === 0 ? (
          <Typography variant="body1">{t("no_events_available")}</Typography>
        ) : (
          <ImgMediaCard events={eventsForSelectedYear} />
        )}
      </Box>
    </Box>
  );
};

export default Events;
