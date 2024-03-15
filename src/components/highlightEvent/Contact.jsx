import React from "react";
import { Card, Divider, Box, Typography } from "@mui/material";

const ContactCard = ({ title, email }) => (
  <Box>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="body2">{email}</Typography>
  </Box>
);

const VerticalDividerMiddle = () => {
  const contactData = [
    { title: "General Query", email: "(+91) 123 456 7890)" },
    { title: "Accommodation", email: "(+91) 123 456 7890)" },
    { title: "Transportation", email: "(+91) 123 456 7890)" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h2" align="left">
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Transportation</Typography>
          <Typography variant="body1">(+91) 123 456 7890</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Accommodation</Typography>
          <Typography variant="body1">(+91) 123 456 7890</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">General</Typography>
          <Typography variant="body1">(+91) 123 456 7890</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalDividerMiddle;
