import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "40px"
      }}
    >
      <Typography variant="body1">
        © 2023 Avatar Meher Baba Lucknow Centre
      </Typography>
    </Box>
  );
}

export default Footer;
