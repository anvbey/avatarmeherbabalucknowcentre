import React, { useEffect, useRef } from 'react';
import { Box, Typography, List, ListItem, Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InformationBrochure = () => {
  const location = useLocation();
  const brochureRef = useRef(null);
  const { t } = useTranslation("HEvent");

  useEffect(() => {
    if (location.hash === "#brochure") {
      setTimeout(() => {
        if (brochureRef.current) {
          brochureRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Brochure.pdf";
    link.download = "Meher Prem Sammelan Information Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ padding: "20px", width: "90%", margin: "0 auto" }} ref={brochureRef}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: "Playfair Display SC, serif" }}>
        Information Brochure
      </Typography>

      <Box textAlign="center" marginBottom={3}>
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download Brochure
        </Button>
      </Box>

      <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", fontFamily: "DM Sans, sans-serif" }}>
            {t("brochure-1")}
          </Typography>
        </ListItem>
        
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", fontFamily: "DM Sans, sans-serif" }}>
            {t("brochure-2")}
          </Typography>
          <List sx={{ listStyleType: 'circle', paddingLeft: '40px' }}>
            {t("bullet-points").map((point, index) => (
                <ListItem key={index} sx={{ display: 'list-item' }}>
                    <Typography variant="body1" sx={{ fontSize: "1.1rem", fontFamily: "DM Sans, sans-serif" }}>
                        {point}
                    </Typography>
                </ListItem>
            ))}
          </List>
        </ListItem>

        {t("brochure-points").map((point, index) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>
                <Typography variant="body1" sx={{ fontSize: "1.1rem", fontFamily: "DM Sans, sans-serif" }}>
                    {point}
                </Typography>
            </ListItem>
        ))}
      </List>

      <Box textAlign="center" marginTop={3}>
        <Typography variant="h5" sx={{ fontFamily: "DM Sans, sans-serif", fontWeight: "bold" }}>
            {t("brochure-footer")}
        </Typography>
        <Grid container sx={{ display: "flex", "justifyContent": "space-around" }}>
            <Typography variant="h5" sx={{ fontFamily: "DM Sans, sans-serif" }}>
                {t("kamal-kishore-sharma")}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: "DM Sans, sans-serif" }}>
                {t("sanjay-dubey")}
            </Typography>
        </Grid>
        <Grid container sx={{ display: "flex", "justifyContent": "space-around" }}>
            <Typography variant="h5" sx={{ fontFamily: "DM Sans, sans-serif" }}>
            7607001888
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: "DM Sans, sans-serif" }}>
            9415469415
            </Typography>
        </Grid>
        <Typography variant="body2" sx={{ fontFamily: "DM Sans, sans-serif", marginTop: "20px" }}>
        "मेरे बारे में अधिक से अधिक सोचो, और तुम्हारी सारी चिंताएं समाप्त हो जाएं गी, क्योंकि वेवास्तव में कुछ भी नहीं हैं, और मेरी इच्छा तुम्हारे अंदर और सभी मे इसे जागृत करने का काम करती है"
      </Typography>

      <Typography variant="body2" sx={{ fontFamily: "DM Sans, sans-serif" }}>
        मेहेर बाबा
      </Typography>
        </Box>
    </Box>
  );
};

export default InformationBrochure;
