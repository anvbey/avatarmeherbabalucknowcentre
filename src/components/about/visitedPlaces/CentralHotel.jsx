import { Box, Typography } from "@mui/material";
import React from "react";
import central from "../../../assets/central.jpg";

function CentralHotel() {
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Central Hotel, Aminabad
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={central}
            alt="description"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            style={{ padding: "10px" }}
          >
            Central Hotel
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          In September 1943, there was news that Kolkata, Lucknow, and many
          other places in India were hit by a famine. On 1st October 1943, Baba
          expressed His wish to visit Kolkata and when He reached there, He
          served food to people Himself.
          <br />
          In Baba’s words, “This work of mine is quite distinct from that done
          by others. For spiritual reasons, I want to serve the food myself.
          There are hundreds of institutions engaged in the work of handing out
          free food, but I do not wish to work through them. The meaning of my
          feeding people is quite different. It is not to fill the stomachs of
          the hungry, but to feed humanity spiritually.”
          <br />
          When Baba was in Kolkata, He sent Chanji and Adi Sr. to Lucknow to
          make arrangements to feed poor people there. Baba reached Lucknow on
          20th October 1943, Wednesday at 9:00 pm and stayed at the Central
          Hotel.
        </Typography>
      </Box>
    </Box>
  );
}

export default CentralHotel;
