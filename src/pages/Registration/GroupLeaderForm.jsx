import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { groupFormSchema } from "../../lib/formSchema/registrationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import MemberForm from "./MemberForm";


const Note = () => (
    <Typography variant="subtitle1" color="textSecondary" align="center" sx={{ marginBottom: '20px' }}>
        * You won't be able to make changes to entries once you have submitted the form. Please verify the details before submitting the form.
    </Typography>
);

const GroupForm = () => {
    const [ isPreview, setIsPreview ] = useState({
        bool: false,
        members: 0
    });
    const { setValue, control, handleSubmit, register, watch, formState: { errors } } = useForm({
        resolver: zodResolver(groupFormSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            city: '',
            age: '',
            gender: '',
            dateOfArrival: '',
            dateOfDeparture: '',
            numberOfMembers: 1,
            members: []
        }
    })

    const { remove } = useFieldArray({
        control,
        name: "members"
    })

    const handleChange = () => {
        const count = watch('numberOfMembers');
        setIsPreview({
            bool: true,
            members: count
        });
    }

    const removeParticipant = (index) => {
        setIsPreview({
            bool: false,
        });
        remove(index);
        setValue('numberOfMembers', watch('numberOfMembers') - 1);
        console.log(watch('numberOfMembers'))
        if (watch('numberOfMembers') >= 2) {
            setTimeout(() => {
                setIsPreview({
                    bool: true,
                    members: watch('numberOfMembers')
                });
            }, 4);
        }
    };

    const onSubmit = async (values) => {
        if(watch('members').length < watch('numberOfMembers')-1) {
            toast.error('Please update the members details',{
                duration: 3000,
                position: "top-right",
            });
        }
        if(values.numberOfMembers !== values.members.length + 1) {
            values.members = values.members.filter((_, index) => index < values.members.length - 1);
        }
        if(dayjs(values.dateOfArrival).isAfter(dayjs(values.dateOfDeparture))) {
            toast.error('Date of Arrival cannot be greater than Date of Departure');
            return;
        }
        fetch('https://3i11a61k0e.execute-api.ap-south-1.amazonaws.com/dev1/storeData', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'x-api-key': 'C9yfSdhFSq24mNNSeQZMq8ybeYYqTwsi83g6jKLh',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({values})
        })
        .then(response => {
            return response.json();
        })
        .then(data=> {
                if(data.status === 200) {
                    toast.success('Form submitted successfully', 
                    {duration: 5000});
                    setTimeout(() => {
                        window.location.href = '/oct2024';
                    }, 3000) // Redirect after 3 seconds
                } else if(data.status === 409) {
                    toast.error(`${data.message}` `${data.violating_fields}`)
                } else throw new Error(data.message);
        })
        .catch(error => {
            toast.error(`Form submission failed": ${error.message}`);
        })
    }
    
    return ( 
        <Box sx={{padding: '1.5% 5% 5% 5%'}}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <Typography variant="h5" gutterBottom>
                Registration Form
            </Typography>
            <Note />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField label="First Name" name="first_name" {...register('first_name')} required fullWidth />
                    <p error={!!errors.first_name} style={{ color: 'red' }}>{errors.first_name?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Last Name" name="last_name" {...register('last_name')} required fullWidth />
                    <p error={!!errors.last_name} style={{ color: 'red' }}>{errors.last_name?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email (optional)" type="email" name="email" {...register('email')} fullWidth />
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
                    <InputLabel id='gender'>Gender *</InputLabel>
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
                <Grid item xs={6}>
                    <DateTimePicker label="Date and Time of Arrival" name='dateOfArrival' onChange={(e) => {
                        if(!e) return;
                        setValue('dateOfArrival', e['$d'])} 
                    }sx={{ width: '100%'}} />
                    <p error={!!errors.dateOfArrival} style={{ color: 'red' }}>{errors.dateOfArrival?.message}</p>
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker label='Date and Time of Departure' name='dateOfDeparture' onChange={(e) => {
                        if(!e) return;
                        setValue('dateOfDeparture', e['$d'])} 
                    } required sx={{ width: '100%'}}/>
                    <p error={!!errors.dateOfDeparture} style={{ color: 'red' }}>{errors.dateOfDeparture?.message}</p>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                    <div>
                        <TextField label="Number of Members" type="number" name="numberOfMembers" required sx={{width: '20vw'}} {...register('numberOfMembers')}/>
                        <p error={!!errors.numberOfMembers} style={{ color: 'red' }}>{errors.numberOfMembers?.message}</p>
                    </div>
                    <Button variant="contained" color="secondary" sx={{ width: '10vw' }} onClick={handleChange} disabled={watch('numberOfMembers')<1}>
                        Update
                    </Button>
                </Grid>
            </Grid>
            {isPreview.bool && Array.from({ length: isPreview.members-1 }).map((_, index) => (
                    <Box key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', position: 'relative', marginBottom: '10px' }}>
                        <MemberForm control={control} index={index} errors={errors}/>
                        <Button variant="contained" color="error" onClick={() => removeParticipant(index)} sx={{ position: 'absolute', top: '-10px', right: '-10px' }}>
                            Remove
                        </Button>
                    </Box>
                ))}  
            {(watch('numberOfMembers') < 2 || isPreview.bool) && <Button variant="contained" color="secondary" type="submit" sx={{ width: '25vw' }}>
                Submit
            </Button>}
            <Toaster />
        </Box>
    </Box>
     );
}
 
export default GroupForm;