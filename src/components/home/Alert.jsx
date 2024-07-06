import * as React from "react";
import {Box, Alert, IconButton, Collapse, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation("Home");

  return (
    <Box sx={{ width: "90%" }}>
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
          >
            {t("info")}{" "}
            <a
              href="/oct2024/register"
              style={{
                fontWeight: "bold",
              }}
            >
              {t("click-here")}
            </a>
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}
