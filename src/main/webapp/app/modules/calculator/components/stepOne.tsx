import { Box, Button, FormControlLabel, FormGroup, StepContent, StepLabel, Switch, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from 'app/config/store';
import React, { useState } from 'react';
import { setDistance, setIsometric } from '../calculatorSlice';

const StepOne = props => {
  const { isometric, distance, index, step, steps, handleNext, handleBack } = props;
  const [distanceVal, setDistanceVal] = useState(distance || 0);
  const [isometricVal, setIsometricVal] = useState(isometric || false);

  const dispatch = useAppDispatch();

  const handleNextStep = () => {
    dispatch(setDistance(distanceVal));
    dispatch(setIsometric(isometricVal));
    handleNext();
  };

  const handleChange = e => {
    setDistanceVal(e.target.value);
  };

  const handleChangeIsometric = e => {
    setIsometricVal(e.target.checked);
  };

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="mb-2 mt-4">
            <TextField
              value={distanceVal}
              onChange={handleChange}
              className="distance_tf"
              id="outlined-basic"
              label="Введите растояние маршрута в киллометрах"
              variant="outlined"
            />
          </div>
          <div className="mb-2">
            <FormGroup>
              <FormControlLabel
                labelPlacement="end"
                control={<Switch checked={isometricVal} onChange={handleChangeIsometric} />}
                label="Сезон ограничений"
              />
            </FormGroup>
          </div>
          <div>
            <Button variant="contained" onClick={handleNextStep} sx={{ mt: 1, mr: 1 }}>
              {index === steps.length - 1 ? 'Закончить' : 'Продолжить'}
            </Button>
            <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
              Назад
            </Button>
          </div>
        </Box>
      </StepContent>
    </>
  );
};

export default StepOne;
