import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '90%' }}>
      <Collapse in={open}>
        <Alert
        severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        <Typography
        variant="body1"
        sx={{
          fontFamily: "DM Sans, sans-serif",
        }}
      >To register for Meher Prem Sammelan Oct'2024, <a href='/oct2024/register' style={{
        fontWeight: "bold",
      }}>Click Here!</a>
      </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}