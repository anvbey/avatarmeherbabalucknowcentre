import { Box, Typography } from "@mui/material";
import React from "react";
import MeherPrem from "../../../assets/MeherPrem.jpg";

function IronBridge() {
  return (
    <Box>
      <Typography variant="h4">Iron Bridge</Typography>
      <Box sx={{ display: "block" }}>
        <Box
          sx={{
            float: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src={MeherPrem}
            alt="Image description"
            style={{ width: "200px", height: "150px" }}
          />
          <Typography variant="body1">Picture from the centre</Typography>
        </Box>
        <Typography variant="body1">
          In February 1941, when Baba was on His travel to various locations of
          North India, Baba came to Lucknow and contacted Masts. During this
          visit, He first met Nasiban Mastani, a mast of the 6th plane who used
          to sit near this bridge. She was revered with respect in Lucknow. It
          is said that even a queen used to visit her from time to time during
          those days. Baba met Nasiban Mastani again in October 1943. This time
          they met in a Harijan (untouchables) settlement. Baba gave her a
          scarf. At first, she tied that scarf around her head but suddenly, she
          removed the scarf and gave it to a Harijan woman standing near her.
          Looking at this, Baba gave her another scarf which she again removed
          and tried. This shows us that if we have got the God Himself, why
          would we need anything more to worry about.
        </Typography>
      </Box>
    </Box>
  );
}

export default IronBridge;