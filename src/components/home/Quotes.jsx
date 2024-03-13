import React from "react";
import { Box, Typography } from "@mui/material";

function Quotes() {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #60D49C 40%, #FFFFFF 95%)",
        width: "100%",
        margin: "10px 0 30px 0",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontFamily: "'Open Sans Hebrew', sans-serif",
          margin: "40px 0 0 0px",
          fontSize: "30px",
        }}
      >
        If you have the peace of a frozen lake, you will realize Me.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontFamily: "'Open Sans Hebrew', sans-serif",
          margin: "0px 20px 40px 0",
          fontSize: "30px",
        }}
      >
        -Meher Baba Calling
      </Typography>
    </Box>
  );
}

export default Quotes;
