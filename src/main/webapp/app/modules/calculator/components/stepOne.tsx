import { Box, Button, FormControlLabel, FormGroup, StepContent, StepLabel, Switch, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

const StepOne = props => {
  const { index, step, steps, handleNext, handleBack } = props;

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="mb-2 mt-4">
            <TextField className="distance_tf" id="outlined-basic" label="Введите растояние маршрута в киллометрах" variant="outlined" />
          </div>
          <div className="mb-2">
            <FormGroup>
              <FormControlLabel labelPlacement="start" control={<Switch defaultChecked />} label="Сезон ограничений" />
            </FormGroup>
          </div>
          <div>
            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
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
