import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../../components/events/Cards"; // Assuming Card component exists
import DropDown from "../../components/events/AutoComplete"; // Assuming DropDown component exists
import "./Events.css";

const Events = () => {
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
        <DropDown />
      </Box>
      <Box
        className="cards"
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          flexWrap: "wrap", // Allow cards to wrap to the next row
          gap: "10px",
        }}
      >
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default Events;
