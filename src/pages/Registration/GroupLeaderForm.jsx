import { useState } from "react";
import { groupFormSchema } from "../../lib/formSchema/registrationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import MemberForm from "./MemberForm";

const GroupForm = () => {
    const [ isPreview, setIsPreview ] = useState(null);
    const { getValues, control, handleSubmit, register } = useForm({
        resolver: zodResolver(groupFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            age: '',
            gender: '',
            numberOfMembers: '',
            members: [{
                firstName: '',
                lastName: '',
                age: '',
                phone: '',
                gender: '',
            }]
        }
    })

    const { fields, remove } = useFieldArray({
        control,
        name: "members"
    })

    const handlePreview = () => {
        const values = getValues();
        if(values.firstName && values.phone && values.city && values.age && values.gender && values.numberOfMembers) {
            setIsPreview(values);
        }
    }

    const onSubmit = (values) => {
        console.log("Hello")
        console.log(values)
    }
    return ( 
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
        <Typography variant="h5" gutterBottom>
            Registration Form
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField label="First Name" name="firstName" {...register('firstName')} required fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Last Name" name="lastName" {...register('lastName')} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Email" type="email" name="email" {...register('email')} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Phone" type="tel" name="phone" {...register('phone')} required fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Age" type="number" name="age" {...register('age')} required fullWidth />
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                <InputLabel id='gender'>Gender</InputLabel>
                <Select name="gender" {...register('gender')} required labelId='gender' label='Gender'>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Others</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField label="City" name="city" {...register('city')} required fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField label="Number of Members" type="number" name="numberOfMembers" {...register('numberOfMembers')} required sx={{width: '15vw'}}/>
            </Grid>
        </Grid>
        {isPreview && fields.map((field, index) => (
            <MemberForm control={control} index={index} remove={remove} key={field.id}/>
        ))}
        {!isPreview && <Button variant="contained" color="secondary" sx={{ width: '25vw' }} onClick={handlePreview}>
            Continue
        </Button>}   
        {isPreview && <Button variant="contained" color="secondary" type="submit" sx={{ width: '25vw' }}>
            Submit
        </Button>}
    </Box>
     );
}
 
export default GroupForm;