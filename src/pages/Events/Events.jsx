import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import Card from "../../components/events/Cards";
import DropDown from "../../components/events/AutoComplete";

import "./Events.css";
import data from "../../data/Events.json"

const Events = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString()); // State to hold selected year

  // Function to handle year selection change
  const handleYearChange = (event, value) => {
    setSelectedYear(value.label);
  };

  const eventsForSelectedYear = data.find(
    (item) => item.year === selectedYear
  )?.events || [];

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
        <DropDown handleYearChange={handleYearChange} /> {/* Pass the handleYearChange function */}
      </Box>
      <Box
        className="cards"
        sx={{
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          flexWrap: "wrap", // Allow cards to wrap to the next row
          gap: "10px",
        }}
      >
      {eventsForSelectedYear.length === 0 ? (
        <Typography variant="body1">No events available for the selected year.</Typography>
      ) : (
        // If there are events, map over them and render the Card component
        <Card year={selectedYear} />
      )}
         {/* Pass the selected year */}
      </Box>
    </Box>
  );
};

export default Events;