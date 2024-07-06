import React from "react";
import { Box, Typography } from "@mui/material";
import { List, ListItem } from "@mui/joy";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const VerticalDividerMiddle = () => {
  const { t } = useTranslation("HEvent");
  return (
    <Box
      className="eventContact"
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
        {t("contact-heading")}
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
            {t("accommodation")}
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
                    {t("acc-contact-1")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {t("acc-contact-2")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {t("acc-contact-3")}
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
            {t("volunteer-info")}
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
                    {t("vol-contact-1")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {t("vol-contact-2")}
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
            {t("general-info")}
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
                    {t("gen-contact-1")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {t("gen-contact-2")}
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
