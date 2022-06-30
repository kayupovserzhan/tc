import { Box, Button, StepContent, StepLabel, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import React, { useState } from 'react';
import { setHeight, setLedge, setLength, setWidth } from '../calculatorSlice';

const StepFive = props => {
  const { calculate, height, width, length, ledge, index, step, steps, handleNext, handleBack } = props;

  const [heightVal, setheightVal] = useState(height || 0);
  const [widthVal, setwidthVal] = useState(width || 0);
  const [lengthVal, setlengthVal] = useState(length || 0);
  const [ledgeVal, setledgeVal] = useState(ledge || 0);

  const dispatch = useAppDispatch();

  const handleHeight = e => {
    setheightVal(e.target.value);
  };

  const handleWidth = e => {
    setwidthVal(e.target.value);
  };

  const handleLength = e => {
    setlengthVal(e.target.value);
  };

  const handleLedge = e => {
    setledgeVal(e.target.value);
  };
  const handleNextStep = () => {
    dispatch(setHeight(heightVal));
    dispatch(setWidth(widthVal));
    dispatch(setLength(lengthVal));
    dispatch(setLedge(ledgeVal));
    calculate();
    handleNext();
  };

  function isAllValuesSelected(): boolean {
    if (heightVal > 0 && widthVal > 0 && lengthVal > 0 && ledgeVal > 0) return false;
    return true;
  }

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box>
          <div className="row mt-4 ">
            <div className="col">
              <p>Высота АТС</p>
              <TextField
                type="number"
                value={heightVal}
                onChange={handleHeight}
                className="height_tf_s5"
                id="outlined-basic"
                label="Высота АТС в метрах"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Ширина АТС</p>
              <TextField
                type="number"
                value={widthVal}
                onChange={handleWidth}
                className="height_tf_s5"
                id="outlined-basic"
                label="Ширина АТС в метрах"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Длина АТС с грузом</p>
              <TextField
                type="number"
                value={lengthVal}
                onChange={handleLength}
                className="height_tf_s5"
                id="outlined-basic"
                label="Длина АТС с грузом в метрах"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col">
              <p>Выступ за заднюю точку кузова АТС</p>
              <TextField
                type="number"
                value={ledgeVal}
                onChange={handleLedge}
                className="height_tf_s5"
                id="outlined-basic"
                label="Выступ за заднюю точку кузова в метрах"
                variant="outlined"
              />
            </div>
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button disabled={isAllValuesSelected()} variant="contained" onClick={handleNextStep} sx={{ mt: 1, mr: 1 }}>
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
