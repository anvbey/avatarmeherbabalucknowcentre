import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useController } from 'react-hook-form';

const MemberForm = ({ control, index }) => {
    const { field: firstNameField, fieldState: firstNameFieldState } = useController({
        name: `members[${index}].firstName`,
        control,
        rules: { required: 'First Name is required' }
    })
    const { field: lastNameField, fieldState: lastNameFieldState } = useController({
        name: `members[${index}].lastName`,
        control,
        rules: { required: 'Last Name is required' }
    })
    const { field: ageField, fieldState: ageFieldState } = useController({
        name: `members[${index}].age`,
        control,
        rules: { required: 'Age is required' }
    })
    const { field: phoneField, fieldState: phoneFieldState } = useController({
        name: `members[${index}].phone`,
        control
    })
    const { field: genderField, fieldState: genderFieldState } = useController({
        name: `members[${index}].gender`,
        control,
        rules: { required: true }
    })
    return ( 
        <Box sx={{ gap: '50px' }}>
            <Typography padding='5px'>
                {`Member ${index + 2}`}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField label={`First Name`} {...firstNameField} required fullWidth />
                    <p error={firstNameFieldState.invalid} style={{ color: 'red' }}>{firstNameFieldState.error?.message}</p>
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Last Name`} {...lastNameField} required fullWidth />
                    <p error={lastNameFieldState.invalid} style={{ color: 'red' }}>{lastNameFieldState.error?.message}</p>
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Age`} type='number' {...ageField} required fullWidth />
                    <p error={ageFieldState.invalid} style={{ color: 'red' }}>{ageFieldState.error?.message}</p>
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Phone (optional)`} type='number' {...phoneField} fullWidth />
                    <p error={phoneFieldState.invalid} style={{ color: 'red' }}>{phoneFieldState.error?.message}</p>
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
                    <p error={genderFieldState.invalid} style={{ color: 'red' }}>{genderFieldState.error?.message}</p>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default MemberForm;