import React, { useRef, useEffect } from "react";
import Netting from "../../assets/BabaMeetingKids.jpg";
import { Typography, Box } from "@mui/material";

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
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "0 40px",
        }}
      >
        <Typography variant="h3">About Lucknow Centre</Typography>
        <Typography variant="h6">
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
        </Typography>
      </Box>
      <img
        ref={imageRef}
        src={Netting}
        alt={"item.title"}
        loading="lazy"
        width="340"
        height="340"
        style={{ borderRadius: "10px", marginRight: "40px" }}
      />
    </Box>
  );
}

export default AboutMeherBaba;
