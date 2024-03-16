import React from 'react';
import { Box } from "@mui/material";
import GroupForm from './GroupLeaderForm';

const Registration = () => {
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5%'}}>
            <Box sx={{ marginTop: '50px' }}>
            <GroupForm/>
            </Box>
        </Box>
        </>
    );
};

export default Registration;
