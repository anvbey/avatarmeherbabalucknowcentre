import React from "react";
import { Box, Typography } from "@mui/material";

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
        backgroundColor: "black",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontFamily: "DM Sans, sans-serif",
          padding: "5px",
          textAlign: "center",
        }}
      >
        © 2023 Avatar Meher Baba Lucknow Centre
      </Typography>
    </Box>
  );
}

export default Footer;
