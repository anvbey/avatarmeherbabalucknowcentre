import { Box, Typography } from "@mui/material";
import React from "react";
import akhtariTomb from "../../../assets/akhtariTomb.jpg";
import { useTranslation } from "react-i18next";

function BegumAkhtar() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        {t("begum-akhtar-heading")}
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={akhtariTomb}
            alt="description"
            style={{
              minWidth: "40%",
              maxWidth: "50%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
          <Typography
            variant="body1"
            style={{ padding: "10px" }}
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("begum-akhtar-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: t("begum-akhtar-description") }}
        ></Typography>
      </Box>
    </Box>
  );
}

export default BegumAkhtar;
