import { Box, Button, StepContent, StepLabel, Typography } from '@mui/material';
import React from 'react';

const StepTwo = props => {
  const { index, step, steps, handleNext, handleBack } = props;

  return (
    <>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="row mt-2">
            <div className="col">
              <Button>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/single.png" />
                Одиночные АТС
              </Button>
            </div>
            <div className="col">
              <Button>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/polupricep.png" />
                Автопоезд в составе тягача и полуприцепа
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/pricep.png" />
                Автопоезд в составе тягача и прицепа
              </Button>
            </div>
            <div className="col">
              <Button>
                <img className="atc-type-img" src="../../../../content/images/calc-atc-type/trall.png" />
                Автопоезд в составе тягача и трала
              </Button>
            </div>
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

export default StepTwo;
