import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../LanguageContext';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(4px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(18px)',
      '& .MuiSwitch-thumb:before': {
        content: '"हिं"',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        color: theme.palette.mode === 'dark' ? '#000' : '#fff',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#598a6f' : '#598a6f',
    width: 20,
    height: 20,
    '&::before': {
      content: '"en"',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 'bold',
      color: theme.palette.mode === 'dark' ? '#000' : '#fff',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },

  // Add media queries for mobile view
  '@media (max-width: 600px)': {
    width: 60, // Increase width for mobile
    height: 28, // Increase height for mobile
    '& .MuiSwitch-thumb': {
      width: 26, // Increase thumb size for mobile
      height: 26,
      '&::before': {
        fontSize: '12px', // Adjust font size for mobile
      },
    },
    '& .MuiSwitch-switchBase': {
      transform: 'translateX(1px)', // Adjust translation for mobile
      '&.Mui-checked': {
        transform: 'translateX(28px)', // Adjust checked translation for mobile
      },
    },
  },
}));

export default function CustomizedSwitches() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'hi' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch 
            sx={{ m: 1 }} 
            checked={!isEnglish} 
            onChange={toggleLanguage} 
          />
        }
      />
    </FormGroup>
  );
}
