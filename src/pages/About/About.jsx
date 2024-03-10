import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Overview from "../../components/about/Overview";
import Timeline from "../../components/about/Timeline";
import SideMenu from "../../components/about/SideMenu";
const About = () => {
  const sections = [
    { id: "section1", title: "Section 1" },
    { id: "section2", title: "Section 2" },
    { id: "section3", title: "Section 3" },
    // Add more sections as needed
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId) => {
    // Implement logic to scroll to the corresponding section based on sectionId
    // You may use libraries like react-scroll for smooth scrolling
    console.log(`Clicked on section: ${sectionId}`);
  };
  return (
    <Box sx={{ margin: "60px" }}>
      

    <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    {/* Your page content goes here */}
    <div className="content">
      {/* Your content sections go here */}
      <div id="section1">Section 1 Content</div>
      <div id="section2">Section 2 Content</div>
      <div id="section3">Section 3 Content</div>
    </div>
    </Box>
  );
};

export default About;
