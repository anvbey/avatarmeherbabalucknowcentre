import React from "react";
import { Box, Typography } from "@mui/material";

import Bg from "../../assets/QuotesBg.png";

import "./Footer.css";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        margin: "20px 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "black"
      }}
    >
      <Typography className="footer"
        sx={{
          color: "#fff"
        }}>
        © 2023 Avatar Meher Baba Lucknow Centre
      </Typography>
    </Box>
  );
}

export default Footer;