import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StepNavigation = ({ activeStep, handleStep }) => {
  return (
    <Box mb={2}>
      <Tabs value={activeStep} onChange={(e, value) => handleStep(value)} centered>
        <Tab label="Personal Info" />
        <Tab label="Address Info" />
        <Tab label="Confirmation" />
      </Tabs>
    </Box>
  );
};

export default StepNavigation;
