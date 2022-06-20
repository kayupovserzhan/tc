import { Box, Button, FormControlLabel, FormGroup, StepContent, StepLabel, Switch, TextField, Typography } from '@mui/material';
import React from 'react';

const StepFour = props => {
  const { index, step, steps, handleNext, handleBack } = props;

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box>
          <div className="row mt-4 ">
            <div className="col">
              <FormGroup>
                <FormControlLabel labelPlacement="end" control={<Switch defaultChecked />} label="Общий вес" />
              </FormGroup>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">Вессовые параметры для прервой группы осей</div>
            <div className="col">Вессовые параметры для второй группы осей</div>
            <div className="col">Вессовые параметры для третьей группы осей</div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col">
              <TextField className="weight_tf_s4" id="outlined-basic" label="Вес в тоннах" variant="outlined" />
            </div>
            <div className="col">
              <TextField className="weight_tf_s4" id="outlined-basic" label="Вес в тоннах" variant="outlined" />
            </div>
            <div className="col">
              <TextField className="weight_tf_s4" id="outlined-basic" label="Вес в тоннах" variant="outlined" />
            </div>
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
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

export default StepFour;
