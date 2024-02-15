import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{  margin:'60px'}}>
      <Typography variant="h3" sx={{ textAlign: "left" }}>
        Connect with us
      </Typography>

      <Typography
        variant="h6"
        sx={{ textAlign: "left", fontSize: "14px", marginBottom: "16px" }}
      >
        We would love to respond to your queries. <br/>Feel free to get in touch with
        us.
      </Typography>

      <Box display="flex" borderRadius="16px" overflow="hidden" border="1px solid #C4C698">
        {/* Left side with the form */}
        <Box width="75%" p={3} borderRight="1px solid #ccc">
          <Typography
            variant="h6"
            sx={{ marginBottom: "16px", textAlign: "left" }}
          >
            Send your request
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box display="flex" gap={2} marginBottom={2}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Phone" variant="outlined" fullWidth />
            </Box>
            <Box display="flex" gap={2} marginBottom={2}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                marginBottom={2}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                marginBottom={2}
              />
            </Box>

            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              marginBottom={2}
            />

            <Button type="submit" variant="contained" color="primary" sx={{  marginTop:'10px'}}>
              Submit
            </Button>
          </form>
        </Box>

        {/* Right side with contact information */}
        <Box width="25%" p={3} bgcolor="#C4C698" color="white">
          <Typography variant="h6" sx={{ marginBottom: "16px", textAlign: "left"}}>
            Reach Us
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left"  }}>
            Email: info@example.com
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left"  }}>
            Phone: +123 456 789
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left"  }}>
            Phone: +123 456 789
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px", textAlign: "left"  }}>
            Address: 123 Main St, City, Country
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
