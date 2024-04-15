import React from "react";
import { Box, Typography } from "@mui/material";

import MeherPrem from "../../assets/MeherPrem.jpg";

function Overview() {
  return (
    <Box  id="overview"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: 'Playfair Display SC, serif' }}>Overview</Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "40px",
          fontFamily: 'DM Sans, sans-serif'
        }}
      >
        Welcome to the place where the spiritual journey of Avatar Meher Baba in Lucknow awaits you. 
        Discover the essence of Meher Baba's visits to this city, tracing his footsteps through history. 
        Learn about the Avatar Meher Baba Lucknow Centre, a serene haven where seekers gather to explore his teachings. 
        Explore the places in Lucknow associated with Meher Baba, offering pilgrims a chance to connect with his divine presence. 
        From tranquil gardens to humble abodes, each site holds a story of spiritual significance. 
        Join us as we embark on a journey of discovery and reflection, embracing the timeless wisdom of 
        Meher Baba in the heart of Lucknow.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={MeherPrem} width="500px" />
        <Typography
          variant="body1"
          sx={{
            margin: "10px 0 20px 0",
            fontFamily: 'DM Sans, sans-serif'
          }}
        >
          Meher Prem Sammelan 2019
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;