import React from "react";
import { Box, Typography } from "@mui/material";

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
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Contact</p>
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
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Transportation:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 123 456 7890</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Accommodation:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 123 456 7890</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>General:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 123 456 7890</p>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalDividerMiddle;