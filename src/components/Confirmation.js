import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Confirmation = ({ formData, prevStep, submitForm }) => {
  return (
    <Box>
      <h2>Confirm your details</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address Line 1:</strong> {formData.address1}</p>
      <p><strong>Address Line 2:</strong> {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Zip Code:</strong> {formData.zip}</p>
      <Button variant="contained" onClick={prevStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={submitForm} style={{ marginLeft: '10px' }}>
        Submit
      </Button>
    </Box>
  );
};

export default Confirmation;
