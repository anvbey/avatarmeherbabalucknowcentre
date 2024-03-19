import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useController } from 'react-hook-form';

const MemberForm = ({ control, index, remove }) => {
    const { field: firstNameField } = useController({
        name: `members[${index}].firstName`,
        control,
        rules: { required: 'First Name is required' }
    })
    const { field: lastNameField } = useController({
        name: `members[${index}].lastName`,
        control
    })
    const { field: ageField } = useController({
        name: `members[${index}].age`,
        control,
        rules: { required: 'Age is required' }
    })
    const { field: phoneField } = useController({
        name: `members[${index}].phone`,
        control
    })
    const { field: genderField } = useController({
        name: `members[${index}].gender`,
        control,
        rules: { required: true}
    })
    return ( 
        <Box sx={{ gap: '50px' }}>
            <Typography padding='5px'>
                {`Member ${index + 2}`}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField label={`First Name`} {...firstNameField} required fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Last Name`} {...lastNameField} fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Age`} type='number' {...ageField} required fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Phone`} type='number' {...phoneField} fullWidth />
                </Grid>
                <Grid item xs={4} >
                    <FormControl fullWidth>
                    <InputLabel id='gender'>Gender</InputLabel>
                    <Select {...genderField} required labelId='gender' label='Gender'>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Others</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default MemberForm;