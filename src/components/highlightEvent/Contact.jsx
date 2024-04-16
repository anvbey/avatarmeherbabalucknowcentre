import React from "react";
import { Box, Typography } from "@mui/material";
import "./Contact.css";

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
      <p
        className="contact-heading"
        style={{ fontFamily: "Playfair Display SC, serif" }}
      >
        Contact
      </p>
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
          <p className="contact-content" style={{ fontFamily: "DM Sans, sans-serif" }}>Accommodation:</p>
          <p className="contact-content" style={{ fontFamily: "DM Sans, sans-serif" }}>
            (+91) 123 456 7890
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Accommodation:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Mr. Amit Sharma - </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 9794839059</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Mr. Nitin Dubey - </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 9654985984</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>General:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Mr. Sanjay Dubey - </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>(+91) 9415469415</p>
          <p className="contact-content" style={{ fontFamily: "DM Sans, sans-serif" }}>General:</p>
          <p className="contact-content" style={{ fontFamily: "DM Sans, sans-serif" }}>
            (+91) 123 456 7890
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalDividerMiddle;
