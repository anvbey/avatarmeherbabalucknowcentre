import { Box, Typography } from "@mui/material";
import React from "react";

function AMBCLko() {
  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Avatar Meher Baba Centre, Lucknow
      </Typography>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          The Avatar Meher Baba Centre, Lucknow was established in the year 1975
          in Charbagh, Lucknow. It was later shifted to 169, Samar Vihar Colony,
          Lucknow in 1993. Since then, every year, the celebration of Meher
          Baba’s birthday, which was earlier celebrated at the centre at
          Charbagh, shifted to this Centre at Samar Vihar Colony which is
          followed even today. Apart from this, satsang programs are held at the
          Centre on the first Sunday of every month and the 23rd of every month
          from 6 PM to 8 PM, along with bi-annual celebrations remembering
          Baba’s visits to Lucknow on the 16th of May and the 23rd of October.
        </Typography>
      </Box>
    </Box>
  );
}

export default AMBCLko;
