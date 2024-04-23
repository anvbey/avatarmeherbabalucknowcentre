import React from "react";
import { Box, Typography } from "@mui/material";
import { List, ListItem } from "@mui/joy";
import "./Contact.css";

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
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        Contact
      </Typography>
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
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Accommodation:
          </Typography>
          <Box>
            <List>
              <List marker="disc">
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Mr. Sanjay Dubey: (+91) 123 456 7890
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Mr. Sanjay Dubey: (+91) 123 456 7890
                  </Typography>
                </ListItem>
              </List>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            General Information:
          </Typography>
          <Box>
            <List>
              <List marker="disc">
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Mr. Sanjay Dubey: (+91) 123 456 7890
                  </Typography>
                </ListItem>
              </List>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalDividerMiddle;
