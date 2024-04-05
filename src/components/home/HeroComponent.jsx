import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import video from "./WebsiteBanner.mp4"

function HeroComponent() {
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
      className="hero-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
    <video autoPlay loop muted controls={false} width="70%" className="videoPlayer" src={video}></video>
    </Box>
  );
}

export default HeroComponent;
