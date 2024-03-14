import React, { useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import IndividalForm from './IndividualForm'
import GroupForm from './GroupLeaderForm';

const Registration = () => {
    const [registrationType, setRegistrationType] = useState('');
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:'1vh', padding: '10%'}}>
            <Typography variant="h4" gutterBottom>
                Choose your registration method
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Button variant="contained" color="primary" size="large" sx={{ width: '150px' }} onClick={() => setRegistrationType('individual')}>
                    Individual
                </Button>
                <Button variant="contained" color="primary" size="large" sx={{ width: '150px' }} onClick={() => setRegistrationType('group')}>
                    Group
                </Button>
            </Box>
            <Box sx={{ marginTop: '50px' }}>
            { registrationType === 'individual' && <IndividalForm/>}
            { registrationType === 'group' && <GroupForm/>}
            </Box>
        </Box>
        </>
    );
};

export default Registration;
