import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
const MemberForm = ({ members, index, register }) => {
    return ( 
        <Box sx={{ gap: '50px' }}>
            <Typography>{`Member ${index + 1}`}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4} sx={{width: '500px'}}>
                    <TextField label={`Name`} name={`${members[index]}.name`} {...register(`${members[index]}.name`)} required fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label={`Age`} name={`${members[index]}.age`} {...register(`${members[index]}.age`)} required fullWidth />
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <FormControl fullWidth>
                    <InputLabel id='gender'>Gender</InputLabel>
                    <Select name={`${members[index]}.gender`} {...register(`${members[index]}.gender`)} required labelId='gender' label='Gender'>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default MemberForm;