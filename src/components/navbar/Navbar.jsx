import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import meherLucknow from "../../assets/Meher_Lucknow.png"

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 , margin: " 0 0 80px 0"}}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: "2.5px solid #C4C698",
          backgroundColor: "#FBFAF5",
          height: "68px"
        }}
      >
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 70,
                width: 150,
              }}
              alt="The alternate text"
              src={meherLucknow}
            ></Box>
          </Link>

          {/* Toggle button for smaller screens */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu for smaller screens */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/oct2024"> Meher Prem Sammelan October 2024</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/events"> Events</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/contact">Contact Us</Link>
            </MenuItem>
          </Menu>

          {/* Regular navigation links for larger screens */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
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
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link to="/oct2024"> October 2024</Link>
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
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link to="/about">About</Link>
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
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link to="/events"> Events</Link>
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
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link to="/contact">Contact Us</Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
