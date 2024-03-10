import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import contactFormSchema from '../../lib/formSchema/contactFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
  const onSubmit = (values) => {
    console.log(values)
  };

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ margin: '60px' }}>
      <Typography variant="h3" sx={{ textAlign: "left" }}>
        Connect with us
      </Typography>

      <Typography
        variant="h6"
        sx={{ textAlign: "left", fontSize: "14px", marginBottom: "16px" }}
      >
        We would love to respond to your queries. <br />Feel free to get in touch with us.
      </Typography>

      <Box display="flex" borderRadius="16px" overflow="hidden" border="1px solid #C4C698">
        {/* Left side with the form */}
        <Box width={isSmallScreen ? '100%' : '75%'} p={isSmallScreen ? 2 : 3} borderRight={isSmallScreen ? 'none' : '1px solid #ccc'}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "16px", textAlign: "left" }}
          >
            Send your request
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2} marginBottom={2}>
              <TextField label="Name" variant="outlined" fullWidth {...register('name')} />
              {isSmallScreen && <TextField label="Phone" variant="outlined" fullWidth {...register('phone')} />}
            </Box>
            <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2} marginBottom={2}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                marginBottom={isSmallScreen ? 2 : 0}
                {...register('email')}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                marginBottom={isSmallScreen ? 2 : 0}
                {...register('subject')}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                marginBottom={2}
                {...register('message')}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>

        {/* Right side with contact information */}
        {!isSmallScreen && (
          <Box width="25%" p={3} bgcolor="#C4C698" color="white">
            <Typography variant="h6" sx={{ marginBottom: "16px", textAlign: "left" }}>
              Reach Us
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left" }}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left" }}>
              Phone: +123 456 789
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left" }}>
              Address: 123 Main St, City, Country
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
