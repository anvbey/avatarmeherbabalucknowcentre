import { Box, Typography } from "@mui/material";
import React from "react";
import lordMeher from "../../../assets/lordMeher.png";

function LordMeher() {
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Lord Meher College
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
            src={lordMeher}
            alt="description"
            style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
          />
          <Typography variant="body1" style={{ padding: "10px" }}>
            Lord Meher School
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          The foundation stone of the school established by Shri K.D. Nigam ji
          was laid by Shri. Ali Akbar Shahpurzaman “Aloba” on 28th November
          1996. The first session of the High School was inaugurated by Shri.
          V.S. Kalchuri “Bhau” on 21st March 2000. Apart from Bhau ji, Smt.
          Dolly Dastur, Shri. Jal Dastur, Shri. Krishna ji, Shri. Shridhar
          Kelkar, Shri. Mehernath Kalchuri, and Shri. Zhilpilvar ji also joined
          the program. The school is still running and it holds its annual Baba
          satsang program on 24th October every year.
        </Typography>
      </Box>
    </Box>
  );
}

export default LordMeher;
