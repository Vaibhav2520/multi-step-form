import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import StepNavigation from './components/StepNavigation';
import { Container, Box } from '@mui/material';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  const handleStep = (step) => {
    if (step <= activeStep) {
      setActiveStep(step);
    }
  };

  const submitForm = () => {
    console.log('Form Submitted', formData);
    localStorage.removeItem('formData');
  };

  return (
    <Container>
      <Box>
        <StepNavigation activeStep={activeStep} handleStep={handleStep} />
        {activeStep === 0 && (
          <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
        )}
        {activeStep === 1 && (
          <AddressInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
        )}
        {activeStep === 2 && (
          <Confirmation formData={formData} prevStep={prevStep} submitForm={submitForm} />
        )}
      </Box>
    </Container>
  );
};

export default App;

