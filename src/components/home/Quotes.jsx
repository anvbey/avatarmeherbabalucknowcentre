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
        margin: "10px 0"
      }}
    >
      <p className="quote">
        "If you have the peace of a frozen lake, you will realize Me."
      </p>
      <p className="quote">
        Meher Baba Calling
      </p>
    </Box>
  );
}

export default Quotes;
