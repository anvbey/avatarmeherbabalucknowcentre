import React from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import contactFormSchema from '../../lib/formSchema/contactFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
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
          Connect with us
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            marginBottom: "16px",
            fontFamily: "Playfair Display, serif",
          }}
        >
          We would love to respond to your queries. <br />
          Feel free to get in touch with us.
        </Typography>

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
              Send your request
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                gap={2} // Adjusted gap
                marginBottom={2}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  {...register("name")}
                />
                
                  <TextField
                    label="Phone"
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
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  {...register("subject")}
                />
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  {...register("message")}
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
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
                  Reach Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Mr. Sanjay Dubey (Secretary)
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Phone: +91 9415 469 415
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
                  Email: avatarmeherbabalucknowcentre@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "8px",
                    textAlign: "left",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Address: 169, Samar Vihar Colony, Alambagh, Lucknow, Uttar
                  Pradesh, India. 226005 (
                  <a
                    href="https://maps.app.goo.gl/Hpu3YAggcdn6xHTp6"
                    target="_blank"
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
                Reach Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                Mr. Sanjay Dubey (Secretary)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                Phone: +91 9415 469 415
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
                Email: avatarmeherbabalucknowcentre@gmail.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "8px",
                  textAlign: "left",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                Address: 169, Samar Vihar Colony, Alambagh, Lucknow, Uttar
                Pradesh, India. 226005 (
                <a
                  href="https://maps.app.goo.gl/Hpu3YAggcdn6xHTp6"
                  target="_blank"
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
        <Toaster />
      </Box>
    </Box>
  );
};

export default ContactForm;
