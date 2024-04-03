import React, { useRef, useEffect } from "react";
import Netting from "../../assets/Group.png";
import { Box } from "@mui/material";

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
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "80px 0 45px 0",
        maxHeight: "90vh",
      }}
    >
      <img
        ref={imageRef}
        src={Netting}
        alt={"item.title"}
        loading="lazy"
        width="1000"
        height="550"
      />
    </Box>
  );
}

export default HeroComponent;
