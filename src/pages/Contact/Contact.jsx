import React from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import contactFormSchema from "../../lib/formSchema/contactFormSchema";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("Contact");
  const onSubmit = (values) => {
    toast.error(
      "Something went wrong while submitting the request. Kindly reach out to us at the details mentioned below for your queries.",
      { duration: 10000 }
    );
  };

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        margin: "auto", // Center horizontally
        minHeight: "100vh", // Maintain full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
      }}
    >
      <Box sx={{ margin: "60px" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Playfair Display SC, serif",
          }}
        >
          {t("connect")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            marginBottom: "16px",
            fontFamily: "Playfair Display, serif",
          }}
          dangerouslySetInnerHTML={{ __html: t("sub-heading") }}
        />

        <Box
          display="flex"
          borderRadius="16px"
          overflow="hidden"
          border="1px solid #C4C698"
        >
          {/* Left side with the form */}
          <Box
            width={isSmallScreen ? "100%" : "75%"}
            p={isSmallScreen ? 2 : 3}
            borderRight={isSmallScreen ? "none" : "1px solid #ccc"}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: "16px",
                textAlign: "left",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {t("send-request")}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                gap={2} // Adjusted gap
                marginBottom={2}
              >
                <TextField
                  label={t("name-label")}
                  variant="outlined"
                  fullWidth
                  {...register("name")}
                />

                <TextField
                  label={t("phone-label")}
                  variant="outlined"
                  fullWidth
                  {...register("phone")}
                />
              </Box>
              <Box
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                gap={2}
                marginBottom={2}
              >
                <TextField
                  label={t("email-label")}
                  type="email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                />
                <TextField
                  label={t("subject-label")}
                  variant="outlined"
                  fullWidth
                  {...register("subject")}
                />
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label={t("message-label")}
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  {...register("message")}
                />
                <Button type="submit" variant="contained" color="primary">
                  {t("submit-button")}
                </Button>
              </Box>
            </form>

            {isSmallScreen && (
              <Box
                p={3}
                sx={{
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "#C4C698",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "16px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("reach-us")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("president-name")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("president-phone")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("secretary-name")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("secretary-phone")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                    wordBreak: "break-all", // Allow breaking long words
                  }}
                >
                  {t("email")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t("address")}(
                  <a
                    href="https://maps.app.goo.gl/Hpu3YAggcdn6xHTp6"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Location
                  </a>
                  )
                </Typography>
              </Box>
            )}
          </Box>

          {/* Right side with contact information */}
          {!isSmallScreen && (
            <Box width="25%" p={3} bgcolor="#C4C698" color="white">
              <Typography
                variant="h6"
                sx={{
                  marginBottom: "16px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("reach-us")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("president-name")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("president-phone")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("secretary-name")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("secretary-phone")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                  wordBreak: "break-all", // Allow breaking long words
                }}
              >
                {t("email")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {t("address")} (
                <a
                  href="https://maps.app.goo.gl/Hpu3YAggcdn6xHTp6"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {t("location")}
                </a>
                )
              </Typography>
            </Box>
          )}
        </Box>
        <Toaster />
      </Box>
    </Box>
  );
};

export default ContactForm;
