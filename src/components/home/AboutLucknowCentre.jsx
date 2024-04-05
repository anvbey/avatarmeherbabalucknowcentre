import React, { useRef, useEffect } from "react";
import Netting from "../../assets/BabaMeetingKids.jpg";
import { Typography, Box } from "@mui/material";
import "./AboutMeherBaba.css"
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
        margin: "0 40px"
      }}
    >
    <p className="about-meher-baba-heading">About Meher Baba</p>
      
      <Box
        className="about-meher-baba"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <p className="about-meher-baba-content">
          Meher Baba, the Avatar. “Meher Baba” means “Compassionate Father.” It
          is the name given to Him, their spiritual Master, by a group of His
          disciples in the early 1920s after signs of His spiritual status
          became apparent. Today, many thousands of people from every religious
          tradition regard Meher Baba as the one long awaited — the Prophet, the
          Buddha, the Christ, the Messiah of this age. Most commonly in India,
          He is referred to as the “Avatar,” a Sanskrit word meaning “descent of
          God.” Meher Baba, the Avatar. “Meher Baba” means “Compassionate
          Father.” It is the name given to Him, their spiritual Master, by a
          group of His disciples in the early 1920s after signs of His spiritual
          status became apparent. Today, many thousands of people from every
          religious tradition regard Meher Baba as the one long awaited — the
          Prophet, the Buddha, the Christ, the Messiah of this age. Most
          commonly in India, He is referred to as the “Avatar,” a Sanskrit word
          meaning “descent of God.”
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
