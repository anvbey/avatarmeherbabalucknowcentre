import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

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
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
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
}));

export default function CustomizedSwitches() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(true);

  const toggleLanguage = () => {
    if (isEnglish) {
      i18n.changeLanguage('hi');
    } else {
      i18n.changeLanguage('en');
    }
    setIsEnglish(!isEnglish);
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
        // label={isEnglish ? "English" : "हिंदी"}
      />
    </FormGroup>
  );
}
