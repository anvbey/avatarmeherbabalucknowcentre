import React, { useState } from 'react';
import { MenuItem } from "@mui/material";
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        if (isEnglish) {
            i18n.changeLanguage("hi");
        } else {
            i18n.changeLanguage("en");
        }
        setIsEnglish(!isEnglish);
    };

    return (
        <MenuItem
            onClick={toggleLanguage}
            style={{
                color: "#065729",
                fontWeight: "bold",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            {isEnglish ? "हिंदी" : "English"}
        </MenuItem>
    );
}

export default LanguageSelector;
