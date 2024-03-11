import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../../components/events/Cards";
import DropDown from "../../components/events/AutoComplete";

const Events = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DropDown />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Grid item xs={12} sm={6}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Events;
