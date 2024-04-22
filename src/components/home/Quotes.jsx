import React from "react";
import { Box, Typography } from "@mui/material";

import Bg from "../../assets/QuotesBg.png";

import "./Quotes.css";

function Quotes() {
  return (
    <Box
      className="Quotes"
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
        padding: "10px",
        width: "100%",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
            textAlign: "center",
          }}
        >
        "If you have the peace of a frozen lake, you will realize Me."
      </Typography>
      <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
            textAlign: "center",
          }}
        >
        Meher Baba Calling
      </Typography>
    </Box>
  );
}

export default Quotes;