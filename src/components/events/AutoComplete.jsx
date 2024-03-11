import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option) => option.label,
    };
  
    // Find the maximum width based on the content
    const maxWidth = top100Films.reduce((max, option) => {
      const labelWidth = option.label.length * 8; // Adjust the multiplier based on font size and styling
      return labelWidth > max ? labelWidth : max;
    }, 0);
  
    // Set a static width for the Autocomplete based on the maximum width
    const staticWidth = `${maxWidth + 20}px`;
  
    return (
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="Select Year" variant="standard" />
        )}
        style={{ width: staticWidth }}
      />
    );
  }
  

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];