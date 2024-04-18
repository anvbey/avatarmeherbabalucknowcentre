import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

import Netting from "../../assets/LucknowCentre.jpeg";

import "./AboutMeherBaba.css";

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "0 40px",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <p
        className="about-meher-baba-heading"
        style={{ fontFamily: "Playfair Display SC, serif" }}
      >
        Avatar Meher Baba Lucknow Centre
      </p>

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
        <p
          className="about-meher-baba-content"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          The Avatar Meher Baba Centre in Lucknow was inaugurated in Samar Vihar Colony 
          on 23rd October 1993, Dr. H.P. Bharucha, from Navsari. Initially gathering in homes, 
          the Meher Baba lovers community gradually expanded its reach. Monthly satsangs on the 
          first Sunday and 23rd day of each month from 6 PM to 8 PM are held for Meher Baba lovers 
          to gather and sing in His praise and learn from His teachings through the medium of talks.
          Annual celebrations including Baba's birthday and commemorating His visits to Lucknow, are observed with reverence. 
          Additionally, initiatives such as the Lord Meher School, founded in 1996, reflect 
          Baba lovers' commitment to Meher Baba's teachings. Noteworthy events like the Silver Jubilee celebration 
          in 2018 underscore decades of dedication to spreading Baba's message of Love. 
          The Meher Baba lovers of Lucknow remain steadfast in their endeavor to uphold Baba's legacy 
          and share his teachings with the world.
        </p>

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