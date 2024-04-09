import React from "react";
import { Box } from "@mui/material";

import Schedule from "../../components/events/Schedule";
import AboutEvent from "../../components/highlightEvent/AboutEvent";
import Contact from "../../components/highlightEvent/Contact";

import MeherPrem from "../../assets/MeherPrem.jpg";

const HighlightEvent = () => {

  const imageRef = React.createRef();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img
        ref={imageRef}
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
        style={{
          borderRadius: "8px",
          width: "90%",
          maxHeight: "85vh"
        }}
      />
      <AboutEvent />
      {/*<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "90%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3">Session-wise Schedule</Typography>
        <Schedule />
      </Box>*/}
      <Contact /> 
    </Box>
  );
};

export default HighlightEvent;