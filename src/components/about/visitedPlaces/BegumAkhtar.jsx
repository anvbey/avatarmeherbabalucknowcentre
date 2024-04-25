import { Box, Typography } from "@mui/material";
import React from "react";
import akhtariTomb from "../../../assets/akhtariTomb.jpg";

function BegumAkhtar() {

  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Begum Akhtar’s Tomb
      </Typography>
      <Box>
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
            src={akhtariTomb}
            alt="description"
            style={{ width: "150px", height: "200px", borderRadius: "10px" }}
          />
          <Typography
            variant="body1"
            style={{ padding: "10px" }}
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Begum Akhtar's Tomb
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Begum Akhtar, also known as “Mallika-e-Ghazal” (Queen of Ghazals)
          lived in Lucknow. She was born in Faizabad near Lucknow and was
          married to a Lucknow-based Barrister. Her tomb was a mango orchard
          within her home “Pasand Bagh” in Thakurganj area of Lucknow.
          <br />
          Begum Akhtar was offered an opportunity by Adi Sr. to sing in front of
          Meher Baba in 1937-38. But at that time, she demanded a large sum of
          fees. Adi Sr. also proposed to sponsor her two-way travel from
          Kolkata. But her demand was so high that Baba himself told Adi
          Sr. to drop the plan and that one day she would herself come to Baba.
          After this, she was once again approached to present her Ghazals in
          Baba’s presence at Guruprasad, Pune, but this time she was severely
          ill and could not sing.
          <br />
          In October 1963, Begum Akhtar expressed her desire to visit Meherazad
          and sing in front of Baba. On 15th October 1963, even after being in
          Seclusion, Baba allowed Begum Akhtar to take His darshan. She came to
          Meherazad, accompanied with her percussionist, Md. Ahmad. She offered
          a huge garland of flowers to Baba and sang 3 of her ghazals which made
          Baba happy.
          <br />
          She was about to open a new music school in Lucknow, for which she
          asked Baba for His blessings and took a big portrait of Baba and came
          back to Lucknow.
        </Typography>
      </Box>
    </Box>
  );
}

export default BegumAkhtar;
