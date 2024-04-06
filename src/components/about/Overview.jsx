import { Box, Typography } from "@mui/material";
import React from "react";
import MeherPrem from "../../assets/MeherPrem.jpg";
function Overview() {
  return (
    <Box  id="overview"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Overview</Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "40px",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={MeherPrem} width="500px" />
        <Typography
          variant="body1"
          sx={{
            margin: "10px 0 20px 0",
          }}
        >
          Meher Prem Sammelan 2019
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;
