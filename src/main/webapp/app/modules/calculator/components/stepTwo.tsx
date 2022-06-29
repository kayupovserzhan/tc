import { Box, Button, StepContent, StepLabel, Typography } from '@mui/material';
import { useAppDispatch } from 'app/config/store';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { setAtcType } from '../calculatorSlice';

const StepTwo = props => {
  const { atcType, index, step, steps, handleNext, handleBack } = props;

  const [atcTypeVal, setAtcTypeVal] = useState(atcType || '');

  const dispatch = useAppDispatch();

  const handleClick = e => {
    setAtcTypeVal(e);
  };

  const handleNextStep = () => {
    dispatch(setAtcType(atcTypeVal));
    handleNext();
  };

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="row mt-2">
            <div className="col">
              <Button variant="outlined" fullWidth onClick={() => handleClick('single')}>
                <div>
                  <img className="atc-type-img" src="../../../../content/images/calc-atc-type/single.png" />
                  Одиночные АТС
                  {atcTypeVal === 'single' && <CheckIcon />}
                </div>
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined" fullWidth onClick={() => handleClick('polupricep')}>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/polupricep.png" />
                Автопоезд в составе тягача и полуприцепа
                {atcTypeVal === 'polupricep' && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button variant="outlined" fullWidth onClick={() => handleClick('pricep')}>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/pricep.png" />
                Автопоезд в составе тягача и прицепа
                {atcTypeVal === 'pricep' && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined" fullWidth onClick={() => handleClick('trall')}>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/trall.png" />
                Автопоезд в составе тягача и трала
                {atcTypeVal === 'trall' && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div>
            <Button disabled={!atcTypeVal ? true : false} variant="contained" onClick={handleNextStep} sx={{ mt: 1, mr: 1 }}>
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

export default StepTwo;
