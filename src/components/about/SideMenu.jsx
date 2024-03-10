// SideMenu.js
import React, { useState } from 'react';
import './SideMenu.css'; // Import your CSS file



const SideMenu = ({ isOpen, toggleMenu, sections, onMenuItemClick }) => {
    return (
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleMenu}>
          Toggle Menu
        </button>
        <ul>
          {sections.map((section, index) => (
            <li key={index} onClick={() => onMenuItemClick(section)}>
              {section}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default SideMenu;
