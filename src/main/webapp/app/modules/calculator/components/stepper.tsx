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
import { useAppSelector } from 'app/config/store';
import { GetCoef, getCoefDimension, table1OS } from '../calculator-coef';

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
  // 1step
  const distance = useAppSelector(state => state.calculator.distance);
  const isometric = useAppSelector(state => state.calculator.isometric);
  // 2step
  const atcType = useAppSelector(state => state.calculator.atcType);
  // 3step
  const firstGroupOS = useAppSelector(state => state.calculator.firstGroupOS);
  const secondGroupOS = useAppSelector(state => state.calculator.secondGroupOS);
  const thirdGroupOS = useAppSelector(state => state.calculator.thirdGroupOS);
  // скатность
  const firstGroupOSSkat = useAppSelector(state => state.calculator.firstGroupOSSkat);
  const secondGroupOSSkat = useAppSelector(state => state.calculator.secondGroupOSSkat);
  const thirdGroupOSSkat = useAppSelector(state => state.calculator.thirdGroupOSSkat);
  // расстояние между осями
  const firstGroupOSDistance = useAppSelector(state => state.calculator.firstGroupOSDistance);
  const secondGroupOSDistance = useAppSelector(state => state.calculator.secondGroupOSDistance);
  const thirdGroupOSDistance = useAppSelector(state => state.calculator.thirdGroupOSDistance);

  // 4 step
  const firstGroupOSWeight = useAppSelector(state => state.calculator.firstGroupOSWeight);
  const secondGroupOSWeight = useAppSelector(state => state.calculator.secondGroupOSWeight);
  const thirdGroupOSWeight = useAppSelector(state => state.calculator.thirdGroupOSWeight);
  // 5 step
  const height = useAppSelector(state => state.calculator.height);
  const width = useAppSelector(state => state.calculator.width);
  const length = useAppSelector(state => state.calculator.length);
  const ledge = useAppSelector(state => state.calculator.ledge);

  const [activeStep, setActiveStep] = React.useState(0);
  const [finalCost, setFinalCost] = React.useState(0);

  const calculate = () => {
    const veduchiTrak = +secondGroupOS === 2 && secondGroupOSSkat === 2 ? true : false;
    if (atcType === 'single') {
      // расчет по габаритам
      const heightCoef = getCoefDimension('height', height, isometric);
      const widthCoef = getCoefDimension('width', width, isometric);
      const lengthCoef = getCoefDimension('length', length, isometric);
      const ledgeCoef = ledge > 1 ? (ledge - 1) * 0.004 : 0;

      // расчет по осям
      // const track1Coef = table1OS(firstGroupOSWeight, isometric);
      // const track2Coef = table1OS(secondGroupOSWeight, isometric);

      const track1Coef =
        firstGroupOS === 1
          ? table1OS(firstGroupOSWeight, isometric)
          : GetCoef(isometric, firstGroupOSWeight, +firstGroupOSDistance, firstGroupOS);

      const track2Coef =
        secondGroupOS === '1'
          ? table1OS(firstGroupOSWeight, isometric)
          : GetCoef(isometric, firstGroupOSWeight, +secondGroupOSDistance, secondGroupOS, '', false, veduchiTrak);
      // расчет по весу
      const osCount = firstGroupOSWeight + secondGroupOSWeight;
      const allowWeight =
        osCount === 2
          ? isometric
            ? 14.4
            : 18
          : osCount === 3
          ? isometric
            ? secondGroupOS === 2 && secondGroupOSSkat === 2 && secondGroupOSWeight <= 19
              ? 20.8
              : 20
            : 25
          : osCount === 4
          ? isometric
            ? 25.6
            : 32
          : osCount === 5
          ? isometric
            ? 30.4
            : 38
          : osCount >= 6
          ? isometric
            ? 35.2
            : 44
          : 0;
      const currentWeight = firstGroupOSWeight + secondGroupOSWeight;
      const weightCoef = +(currentWeight > allowWeight ? (currentWeight - allowWeight) * 0.005 : 0);
      const mrp = 3063;
      console.log('heightCoef: ' + heightCoef);
      console.log('widthCoef: ' + widthCoef);
      console.log('lengthCoef: ' + lengthCoef);
      console.log('ledgeCoef: ' + ledgeCoef);
      console.log('weightCoef: ' + weightCoef);
      console.log('track1Coef: ' + track1Coef);
      console.log('track2Coef: ' + track2Coef);
      console.log(
        'final cost: ' +
          +((+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +track1Coef + +track2Coef) * mrp * +distance).toFixed()
      );
      setFinalCost(
        +((+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +track1Coef + +track2Coef) * mrp * +distance).toFixed()
      );
    }
  };

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
            {index === 0 && (
              <StepOne
                isometric={isometric}
                distance={distance}
                index={index}
                step={step}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}
            {index === 1 && (
              <StepTwo atcType={atcType} index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />
            )}
            {index === 2 && (
              <StepThree
                firstGroupOSSkat={firstGroupOSSkat}
                secondGroupOSSkat={secondGroupOSSkat}
                thirdGroupOSSkat={thirdGroupOSSkat}
                firstGroupOS={firstGroupOS}
                secondGroupOS={secondGroupOS}
                thirdGroupOS={thirdGroupOS}
                firstGroupOSDistance={firstGroupOSDistance}
                secondGroupOSDistance={secondGroupOSDistance}
                thirdGroupOSDistance={thirdGroupOSDistance}
                index={index}
                step={step}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}
            {index === 3 && (
              <StepFour
                firstGroupOSWeight={firstGroupOSWeight}
                secondGroupOSWeight={secondGroupOSWeight}
                thirdGroupOSWeight={thirdGroupOSWeight}
                index={index}
                step={step}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}
            {index === 4 && (
              <StepFive
                height={height}
                width={width}
                length={length}
                ledge={ledge}
                index={index}
                step={step}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
                calculate={calculate}
              />
            )}
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <StepLast finalCost={finalCost} handleReset={handleReset} />
        </Paper>
      )}
    </Box>
  );
}
