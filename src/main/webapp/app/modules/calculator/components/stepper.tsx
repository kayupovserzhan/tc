import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepFour from './stepFour';
import StepThree from './stepThree';
import StepFive from './stepFive';
import StepLast from './stepLast';

const steps = [
  {
    label: 'Маршрут',
    description: `Киллометраж маршрута`,
  },
  {
    label: 'Тип транспортного средства',
    description: 'Выберите тип транспортного средства',
  },
  {
    label: 'Конструктор колесной формулы',
    description: `Выберите тип группы осей`,
  },
  {
    label: 'Весовые параметры',
    description: ``,
  },
  {
    label: 'Габаритные параметры',
    description: ``,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            {index === 0 && <StepOne index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
            {index === 1 && <StepTwo index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
            {index === 2 && <StepThree index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
            {index === 3 && <StepFour index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
            {index === 4 && <StepFive index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <StepLast handleReset={handleReset} />
        </Paper>
      )}
    </Box>
  );
}
