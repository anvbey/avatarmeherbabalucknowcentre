import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import video from "./WebsiteBanner.mp4";
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap')
</style>
function HeroComponent() {
  
  const videoRef = useRef(null);
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

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
      <video
        autoPlay
        loop
        muted
        controls={false}
        width="70%"
        controlsList="nodownload"
        className="videoPlayer"
        src={video}
        ref={videoRef}
        onContextMenu={handleContextMenu}
      ></video>
    </Box>
  );
}

export default HeroComponent;
