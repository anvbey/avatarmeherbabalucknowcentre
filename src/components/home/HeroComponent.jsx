import React, { useRef } from "react";
import { Box } from "@mui/material";

import video from "./WebsiteBanner.mp4";

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
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        controls={false}
        width="90%"
        maxHeight="85vh"
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