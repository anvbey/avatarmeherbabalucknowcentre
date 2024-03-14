import React from 'react';
import { Box, Button, Typography, TextField, FormControl, Select, MenuItem, Grid, InputLabel } from "@mui/material";
import { individualFormSchema } from '../../lib/formSchema/registrationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const IndividualForm = () => {
    
    const { handleSubmit, register } = useForm({
        resolver: zodResolver(individualFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            age: '',
            gender: ''
        }
    })

    const onSubmit = (values) => {
      console.log(values)
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <Typography variant="h5" gutterBottom>
                Individual Registration Form
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Name" name="name" {...register('name')} required fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" type="email" name="email" {...register('email')} required fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Phone" type="tel" name="phone" {...register('phone')} required fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Address" name="address" {...register('address')} required fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Age" type="number" name="age" {...register('age')} required fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                    <InputLabel id='gender'>Gender</InputLabel>
                    <Select name="gender" {...register('gender')} required labelId='gender' label='Gender'>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="contained" color="secondary" type="submit" sx={{ width: '25vw' }}>
                Submit
            </Button>
        </Box>
    );
};

export default IndividualForm;
