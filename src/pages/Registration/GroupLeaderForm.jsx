import { useState } from "react";
import axios from "axios";
import { groupFormSchema } from "../../lib/formSchema/registrationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import MemberForm from "./MemberForm";

const GroupForm = () => {
    const [ isPreview, setIsPreview ] = useState(false);
    const { setValue, getValues, control, handleSubmit, register, watch, formState: { errors } } = useForm({
        resolver: zodResolver(groupFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            age: '',
            gender: '',
            numberOfMembers: 1,
            members: []
        }
    })

    const { remove } = useFieldArray({
        control,
        name: "members"
    })

    const handlePreview = () => {
        const values = getValues();
        if(values.firstName && values.lastName && values.phone && values.city && values.age && values.gender && values.numberOfMembers) {
            
            setIsPreview(true);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setIsPreview(false);
        setValue('numberOfMembers', value);
    }

    const removeParticipant = (index) => {
        setIsPreview(false);
        remove(index);
        setValue('numberOfMembers', watch('numberOfMembers') - 1);
        console.log(watch('numberOfMembers'))
        if (watch('numberOfMembers') >= 2) {
            setTimeout(() => {
                setIsPreview(true);
            }, 4);
        }
    };

    const onSubmit = async (values) => {
        if(values.numberOfMembers !== values.members.length + 1) {
            values.members = values.members.filter((_, index) => index < values.members.length - 1);
        }
        const result = await axios.post('http://localhost:8080/form/registration', values);
        console.log(result.data.message)
    }
    return ( 
        <Box sx={{padding: '5%'}}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
            <Typography variant="h5" gutterBottom>
                Registration Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField label="First Name" name="firstName" {...register('firstName')} required fullWidth />
                    <p error={!!errors.firstName} style={{ color: 'red' }}>{errors.firstName?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Last Name" name="lastName" {...register('lastName')} required fullWidth />
                    <p error={!!errors.lastName} style={{ color: 'red' }}>{errors.lastName?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" type="email" name="email" {...register('email')} fullWidth />
                    <p error={!!errors.email} style={{ color: 'red' }}>{errors.email?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Phone" type="tel" name="phone" {...register('phone')} required fullWidth />
                    <p error={!!errors.phone} style={{ color: 'red' }}>{errors.phone?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Age" type="number" name="age" {...register('age')} required fullWidth />
                    <p error={!!errors.age} style={{ color: 'red' }}>{errors.age?.message}</p>
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
                    <p error={!!errors.gender} style={{ color: 'red' }}>{errors.gender?.message}</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="City" name="city" {...register('city')} required fullWidth />
                    <p error={!!errors.city} style={{ color: 'red' }}>{errors.city?.message}</p>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <TextField label="Number of Members" type="number" name="numberOfMembers" required sx={{width: '15vw'}} onChange={handleChange} value={watch('numberOfMembers')}/>
                    <p error={!!errors.numberOfMembers} style={{ color: 'red' }}>{errors.numberOfMembers?.message}</p>
                </Grid>
            </Grid>
            {isPreview && Array.from({ length: watch('numberOfMembers') -1 }).map((_, index) => (
                    <Box key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', position: 'relative', marginBottom: '10px' }}>
                        <MemberForm control={control} index={index} errors={errors}/>
                        <Button variant="contained" color="error" onClick={() => removeParticipant(index)} sx={{ position: 'absolute', top: '-10px', right: '-10px' }}>
                            Remove
                        </Button>
                    </Box>
                ))}
            {watch('numberOfMembers') > 1 && !isPreview && <Button variant="contained" color="secondary" sx={{ width: '25vw' }} onClick={handlePreview}>
                Continue
            </Button>}   
            {(watch('numberOfMembers') < 2 || isPreview) && <Button variant="contained" color="secondary" type="submit" sx={{ width: '25vw' }}>
                Submit
            </Button>}
        </Box>
    </Box>
     );
}
 
export default GroupForm;