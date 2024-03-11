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
    { title: "Placeholder I", email: "test1@gmail.com" },
    { title: "Placeholder II", email: "test2@gmail.com" },
    { title: "Placeholder III", email: "test3@gmail.com" },
  ];

  return (
    <Box>
      <Typography variant="h2" align="left">
        Contact
      </Typography>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          color: "text.secondary",
          width: "100%", // Set width to 100%
          justifyContent: "space-between", // Evenly distribute items
          "& svg": {
            m: 1,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        {contactData.map(({ title, email }, index) => (
          <React.Fragment key={index}>
            <ContactCard title={title} email={email} />
            {index < contactData.length - 1 && (
              <Divider orientation="vertical" variant="middle" flexItem />
            )}
          </React.Fragment>
        ))}
      </Card>
    </Box>
  );
};

export default VerticalDividerMiddle;
