import React from "react";
import { Box } from "@mui/material";

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
        margin: "10px 0",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <p className="quote" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        "If you have the peace of a frozen lake, you will realize Me."
      </p>
      <p className="quote" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Meher Baba Calling
      </p>
    </Box>
  );
}

export default Quotes;