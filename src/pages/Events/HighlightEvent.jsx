import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import MeherPrem from "../../assets/MeherPrem.jpg";

const HighlightEvent = () => {
  const imageRef = React.createRef();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Set minimum height to cover the entire viewport
    >
      <img
        ref={imageRef}
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
        style={{
          maxWidth: '100%', // Make sure the image doesn't exceed the screen width
          maxHeight: '100%', // Make sure the image doesn't exceed the screen height
        }}
      />
    </Box>
);
}

export default HighlightEvent;
