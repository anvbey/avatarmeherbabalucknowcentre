import { Box, Typography } from "@mui/material";
import React from "react";
import ironBridge from "../../../assets/ironBridge.jpg";

function IronBridge() {
  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Iron Bridge
      </Typography>
      <Box sx={{ display: "block" }}>
        <Box
          sx={{
            float: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src={ironBridge}
            alt="description"
            style={{ width: "300px", height: "300px", borderRadius: "10px" }}
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
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          In February 1941, when Baba was on His travel to various locations of
          North India, Baba came to Lucknow and contacted Masts. During this
          visit, He first met Nasiban Mastani, a mast of the 6th plane who used
          to sit near this bridge. She was revered with respect in Lucknow. It
          is said that even a queen used to visit her from time to time during
          those days. Baba met Nasiban Mastani again in October 1943. This time
          they met in a Harijan (untouchables) settlement. Baba gave her a
          scarf. At first, she tied that scarf around her head but suddenly, she
          removed the scarf and gave it to a Harijan woman standing near her.
          Looking at this, Baba gave her another scarf which she again removed. 
          This shows us that if we have got God Himself, we would not need anything more.
        </Typography>
      </Box>
    </Box>
  );
}

export default IronBridge;
