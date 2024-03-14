import { useState } from "react";
import { groupFormSchema } from "../../lib/formSchema/registrationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import MemberForm from "./MemberForm";

const GroupForm = () => {
    const [ memberForm, setMemberForm ] = useState(0)
    const { watch, handleSubmit, register } = useForm({
        resolver: zodResolver(groupFormSchema),
        defaultValues: {
            leaderName: '',
            email: '',
            phone: '',
            address: '',
            age: '',
            gender: '',
            numberOfMembers: '',
            members: [],
        }
    })

    const onSubmit = (values) => {
        console.log(values)
    }
    return ( 
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
        <Typography variant="h5" gutterBottom>
            Group Registration Form
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField label="Leader Name" name="name" {...register('name')} required fullWidth />
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
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                <TextField label="Number of Members" type="number" name="numberOfMembers" {...register('numberOfMembers')} required sx={{width: '15vw'}}/>
            </Grid>
        </Grid>
        {memberForm !== 0 && Array.from({ length: watch('numberOfMembers')}).map((_, index) => (
            <MemberForm members={watch('members')} index={index} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} key={index}/>
        ))}
        { memberForm === 0 && <Button variant="contained" color="secondary" sx={{ width: '25vw' }} onClick={() => setMemberForm(watch('numberOfMembers'))}>
            Continue
        </Button>
}   
        {memberForm !== 0 && <Button variant="contained" color="secondary" type="submit" sx={{ width: '25vw' }}>
            Submit
        </Button>}
    </Box>
     );
}
 
export default GroupForm;