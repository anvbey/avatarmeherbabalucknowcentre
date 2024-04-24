import React from "react";
import { Box, Typography } from "@mui/material";

import AboutCenter from "./AboutCentre";

function Present() {
  return (
    <Box id="present">
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        History of Avatar Meher Baba Centre, Lucknow
      </Typography>
      <AboutCenter />
    </Box>
  );
}

export default Present;