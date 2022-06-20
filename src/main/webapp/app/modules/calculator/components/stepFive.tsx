import { Box, Button, StepContent, StepLabel, TextField, Typography } from '@mui/material';
import React from 'react';

const StepFive = props => {
  const { index, step, steps, handleNext, handleBack } = props;

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box>
          <div className="row mt-4 ">
            <div className="col">
              <p>Высота АТС</p>
              <TextField className="height_tf_s5" id="outlined-basic" label="Высота АТС в метрах" variant="outlined" />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Ширина АТС</p>
              <TextField className="height_tf_s5" id="outlined-basic" label="Ширина АТС в метрах" variant="outlined" />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Длина АТС с грузом</p>
              <TextField className="height_tf_s5" id="outlined-basic" label="Длина АТС с грузом в метрах" variant="outlined" />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Выступ за заднюю точку кузова АТС</p>
              <TextField className="height_tf_s5" id="outlined-basic" label="Выступ за заднюю точку кузова в метрах" variant="outlined" />
            </div>
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
              {index === steps.length - 1 ? 'Рассчитать стоимость' : 'Продолжить'}
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

export default StepFive;
