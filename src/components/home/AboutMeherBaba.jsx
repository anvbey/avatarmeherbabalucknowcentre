import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Netting from "../../assets/mb1.jpg";
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
        Meher Baba, the Avatar
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
          Meher Baba, the Avatar. “Meher Baba” means “Compassionate Father.” It
          is the name given to Him, their spiritual Master, by a group of His
          disciples in the early 1920s after signs of His spiritual status
          became apparent. Today, many thousands of people from every religious
          tradition regard Meher Baba as the one long-awaited — the Prophet, the
          Buddha, the Christ, the Messiah of this age. Most commonly in India,
          He is referred to as the “Avatar,” a Sanskrit word meaning “descent of
          God.” Meher Baba, the Avatar.
        </Typography>

        <img
          className="meher-baba-image"
          ref={imageRef}
          src={Netting}
          alt={"item.title"}
          loading="lazy"
          style={{ borderRadius: "10px" }}
        />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
          style={{ padding: "10px" }}
        >
          Iron Bridge, Lucknow
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMeherBaba;
