import { Box, Typography } from "@mui/material";
import React from "react";

function Masjid() {
 

  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Masjid, Aminabad
      </Typography>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Meher Baba met “Allah vala” mast near this Mosque on 21st October 1943
          when He had come for a poor feeding program. “Allah vala” mast used to
          wear ragged clothes. He used to stay near this mosque in a small
          niche. When anyone came near him, he would raise both his hands
          towards the sky and say “Allah”. He expected people with whom he
          behaved like this to reciprocate in the same manner. Baba met with
          “Allah vala” mast for the first time in 1942 and then met him for the
          third time during His visit to Lucknow in May 1946. Baba also met with
          Badi Bibi, an old lady who used to wear a long dress and held a bundle
          all the time. She liked sitting at one place during the day but at
          night, she used to roam on the streets of the city.
        </Typography>
      </Box>
    </Box>
  );
}

export default Masjid;
