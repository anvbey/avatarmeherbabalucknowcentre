import React from "react";
import { Box, Typography } from "@mui/material";

import mbImage from "../../assets/overviewMB.jpg";

function Overview() {
  return (
    <Box  id="overview"
      sx={{
        margin: "20px 60px 0 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Playfair Display SC, serif' }}>Overview</Typography>
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
        <img src={mbImage} width="50%" alt="desciption" style={{borderRadius: "10px"}}/>
        <Typography
          variant="body1"
          sx={{
            margin: "10px 0 20px 0",
            fontFamily: 'DM Sans, sans-serif'
          }}
        >
          Meher Baba at Mandali Hall, Meherazad
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;