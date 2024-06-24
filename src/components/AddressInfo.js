import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';


const AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, [setFormData]);

  const validate = () => {
    const { address1, city, state, zip } = formData;
    let tempErrors = {};
    if (!address1) tempErrors.address1 = "Address Line 1 is required";
    if (!city) tempErrors.city = "City is required";
    if (!state) tempErrors.state = "State is required";
    if (!zip) tempErrors.zip = "Zip Code is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      nextStep();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box>
      <TextField
        label="Address Line 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        error={!!errors.address1}
        helperText={errors.address1}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
        fullWidth
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        error={!!errors.state}
        helperText={errors.state}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={!!errors.zip}
        helperText={errors.zip}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={prevStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: '10px' }}>
        Next
      </Button>
    </Box>
  );
};

export default AddressInfo;
