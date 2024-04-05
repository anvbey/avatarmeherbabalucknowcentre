import React from "react";
import { Box, Typography } from "@mui/material";
import Bg from "../../assets/QuotesBg.png";
import "./Footer.css"
function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#fff",
        textAlign: "center",
        margin: "20px 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography className="footer">
        © 2023 Avatar Meher Baba Lucknow Centre
      </Typography>
    </Box>
  );
}

export default Footer;
