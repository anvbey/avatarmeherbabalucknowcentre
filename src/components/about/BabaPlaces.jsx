import { Box, Typography } from "@mui/material";
import React from "react";
import Charbagh from "../about/visitedPlaces/Charbagh";
import IronBridge from "./visitedPlaces/IronBridge";

function BabaPlaces() {
  return (
    <Box>
      <Typography variant="h3">Baba's Places to visit in Lucknow</Typography>
      <Charbagh />
      <IronBridge />
    </Box>
  );
}

export default BabaPlaces;
