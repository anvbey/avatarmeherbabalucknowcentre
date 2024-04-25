import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Netting from "../../assets/LucknowCentre.jpeg";
import "./AboutLucknowCentre.css";
function AboutMeherBaba() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Disable default context menu
      });
    }
  }, []);

  return (
    <Box
      className="about-meher-baba-container"
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <Typography
        className="about-meher-baba-title"
        variant="h4"
        sx={{
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        Avatar Meher Baba Lucknow Centre
      </Typography>

      <Box
        className="about-meher-baba"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          }}
        >
          The Avatar Meher Baba centre in Lucknow is situated at 169, Samar Vihar 
          Colony, Alambagh, Lucknow. While the Meher Baba lovers in Lucknow gathered 
          at homes of each other for satsangs and talks about Baba in the early days, 
          they gradually expanded their reach. And hence, the centre was inaugurated 
          on 23rd October 1993 by Dr. HP Bharucha of Navsari, Gujarat.
          Satsangs our held on the first Sunday and the 23rd day of each month at 
          the centre for all Baba lovers to gather and sing in His praise and learn 
          from His teachings through the medium of talks. Annual celebrations 
          include Beloved Baba's birthday and programs commemorating His visits in Lucknow. 
          The Lord Meher College, founded in 1996 reflects Lucknow Baba lovers' commitment 
          to Baba's teachings. Noteworthy events like the silver jubilee celebration 
          held in 2018 highlight decades of dedication of Baba lovers community in 
          Lucknow of spreading His message of love. The Meher Baba lovers of Lucknow 
          remain steadfast in their endeavour to uphold their Beloved Baba's 
          legacy and share His teachings with the world.
        </Typography>

        <img
          className="meher-baba-image"
          ref={imageRef}
          src={Netting}
          alt={"item.title"}
          loading="lazy"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
}

export default AboutMeherBaba;
