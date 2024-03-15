import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../../components/events/Cards"; // Assuming Card component exists
import DropDown from "../../components/events/AutoComplete"; // Assuming DropDown component exists

const Events = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "80px" }}>
      {" "}
      {/* Set full viewport height */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {" "}
        {/* Main content area */}
        <DropDown /> {/* Place dropdown at the top */}
        <Grid container spacing={2} sx={{ mt: 2, px: 2 }}>
          {" "}
          {/* Card grid with spacing and margins */}
          <Grid item xs={12} md={6} lg={4}>
            {" "}
            {/* Adjust grid layout as needed */}
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Events;
