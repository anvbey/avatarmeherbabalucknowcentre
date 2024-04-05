import React from "react";
import { Card, Divider, Box, Typography } from "@mui/material";

const ContactCard = ({ title, email }) => (
  <Box>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="body2">{email}</Typography>
  </Box>
);

const VerticalDividerMiddle = () => {
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <p>Contact</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p>Transportation:</p>
          <p>(+91) 123 456 7890</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p>Accommodation:</p>
          <p>(+91) 123 456 7890</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p>General:</p>
          <p>(+91) 123 456 7890</p>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalDividerMiddle;
