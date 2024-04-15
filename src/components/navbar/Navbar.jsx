import * as React from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Toolbar, IconButton, MenuItem, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import meherLucknow from "../../assets/Meher_Lucknow.png";

const menuLinkStyle = {
  color: "inherit",
  textDecoration: "none",
  fontFamily: "DM Sans, sans-serif",
};

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <Link to="/oct2024" style={{ ...menuLinkStyle}}>
        <MenuItem onClick={handleMenuClose} style={{color: '#065729', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>
          Meher Prem Sammelan<br/>
          October 2024
        </MenuItem>
      </Link>
      <Link to="/about" style={{ ...menuLinkStyle}}>
        <MenuItem onClick={handleMenuClose} style={{color: '#065729', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>  
          About
        </MenuItem>
      </Link>
      <Link to="/events" style={{ ...menuLinkStyle}}>
        <MenuItem onClick={handleMenuClose} style={{color: '#065729', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>
          Events
        </MenuItem>
      </Link>
      <Link to="/contact" style={{ ...menuLinkStyle}}>
        <MenuItem onClick={handleMenuClose} style={{color: '#065729', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>
          Contact Us
        </MenuItem>
      </Link>
      
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, width: "100vw", marginBottom: "10px" }}>
      <AppBar position="static" sx={{ borderBottom: '2px solid #065729', backgroundColor: 'white', boxShadow: 'none' }}>
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

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleMenuClose} style={{ ...menuLinkStyle, color: '#065729', fontWeight: 'bold'  }}>
              <Link to="/oct2024" style={menuLinkStyle}>
                Meher Prem Sammelan October 2024
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} style={{ ...menuLinkStyle, color: '#065729', fontWeight: 'bold' }}>
              <Link to="/about" style={menuLinkStyle}>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} style={{ ...menuLinkStyle, color: '#065729', fontWeight: 'bold' }}>
              <Link to="/events" style={menuLinkStyle}>
                Events
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} style={{ ...menuLinkStyle, color: '#065729', fontWeight: 'bold' }}>
              <Link to="/contact" style={menuLinkStyle}>
                Contact Us
              </Link>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{ color: '#065729', fontWeight: 'bold' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
