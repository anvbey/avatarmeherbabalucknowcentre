import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        // color="transparent"
        elevation={0}
        sx={{
          borderBottom: "2.5px solid #C4C698",
          display: "flex",
          alignItems: "space-between",
          backgroundColor: "#FBFAF5",
        }}
      >
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 50,
                width: 150,
              }}
              alt="The alternate text"
              src="https://avatarmeherbabatrust.org/wp-content/uploads/2020/08/Meher-Babas-Sig.png"
            ></Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: 8,
                fontFamily: "'Open Sans Hebrew', sans-serif",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link to="/library">Library</Link>
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: 8,
                fontFamily: "'Open Sans Hebrew', sans-serif",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link to="/contact">Contact Us!</Link>
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: 8,
                fontFamily: "'Open Sans Hebrew', sans-serif",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link to="/library"> Ways to donate</Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar