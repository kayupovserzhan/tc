import { Box, Button, FormControlLabel, FormGroup, StepContent, StepLabel, Switch, TextField, Typography } from '@mui/material';
import { useAppDispatch } from 'app/config/store';
import React, { useState } from 'react';
import { setFirstGroupOSWeight, setSecondGroupOSWeight, setThirdGroupOSWeight } from '../calculatorSlice';

const StepFour = props => {
  const { firstGroupOSWeight, secondGroupOSWeight, thirdGroupOSWeight, index, step, steps, handleNext, handleBack } = props;

  const [firstGroupOSWeightVal, setFirstGroupOSWeightVal] = useState(firstGroupOSWeight || 0);
  const [secondGroupOSWeightVal, setSecondGroupOSWeightVal] = useState(secondGroupOSWeight || 0);
  const [thirdGroupOSWeightVal, setThirdGroupOSWeightVal] = useState(thirdGroupOSWeight || 0);

  const dispatch = useAppDispatch();

  const handleFirst = e => {
    setFirstGroupOSWeightVal(e.target.value);
  };

  const handleSecond = e => {
    setSecondGroupOSWeightVal(e.target.value);
  };

  const handleThird = e => {
    setThirdGroupOSWeightVal(e.target.value);
  };

  const handleNextStep = () => {
    dispatch(setFirstGroupOSWeight(firstGroupOSWeightVal));
    dispatch(setSecondGroupOSWeight(secondGroupOSWeightVal));
    dispatch(setThirdGroupOSWeight(thirdGroupOSWeightVal));
    handleNext();
  };

  function isAllValuesSelected(): boolean {
    if (firstGroupOSWeightVal > 0 && secondGroupOSWeightVal > 0 && thirdGroupOSWeightVal > 0) return false;
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
              <TextField
                value={firstGroupOSWeightVal}
                onChange={handleFirst}
                type="number"
                className="weight_tf_s4"
                id="outlined-basic"
                label="Вес в тоннах"
                variant="outlined"
              />
            </div>
            <div className="col">
              <TextField
                value={secondGroupOSWeightVal}
                onChange={handleSecond}
                type="number"
                className="weight_tf_s4"
                id="outlined-basic"
                label="Вес в тоннах"
                variant="outlined"
              />
            </div>
            <div className="col">
              <TextField
                value={thirdGroupOSWeightVal}
                onChange={handleThird}
                type="number"
                className="weight_tf_s4"
                id="outlined-basic"
                label="Вес в тоннах"
                variant="outlined"
              />
            </div>
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button disabled={isAllValuesSelected()} variant="contained" onClick={handleNextStep} sx={{ mt: 1, mr: 1 }}>
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
