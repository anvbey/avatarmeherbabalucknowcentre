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
          Avatar Meher Baba Lucknow centre was inaugurated in 1993 by Dr H.P. Bharucha of Navsari, 
          Gujarat. It all began with only a handful of Baba lovers getting together in His love & 
          remembrance, & gradually grew into a big Baba family leading to establishing the centre. 
          It was all possible as Baba had Himself sowed the seed of His love in the city of Lucknow 
          by setting His foot on it 7 times over the years!
          <br/>
          To commemorate His visits to Lucknow, we lovingly organise annual Baba programs in the 
          months of May & October! Baba’s birthday is celebrated every year with ‘Ratri Jagran’ & 
          evening program with utmost love. Poor feeding is an inevitable part of it. Monthly programs 
          on 1st Sunday & 23rd of each month are held for all Baba lovers to come 
          & rejoice in His praise through songs & speeches.
          Silver Jubilee year was celebrated in 2018 where Baba lovers all over India shared in our 
          love & joy, making it the most memorable event. It highlights decades of dedication of 
          Lucknow centre in spreading His message of love. Baba’s presence was palpable in every single moment!
          <br/>
          The Lord Meher College, founded in 1996 by Alobaji(Baba’s Mandali) reflects Lucknow Baba lovers' 
          commitment to Baba's teachings.
          Baba lovers of Lucknow remain steadfast in their endeavour to uphold their Beloved Baba's 
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
