import { Box, Typography } from "@mui/material";
import React from "react";
import AboutCentre from "./AboutCentre";

function BabaPlaces() {
  return (
    <Box>
      <Typography variant="h3">Baba's Places to visit in Lucknow</Typography>
      <AboutCentre />
      <AboutCentre />
      <AboutCentre />
    </Box>
  );
}

export default BabaPlaces;
