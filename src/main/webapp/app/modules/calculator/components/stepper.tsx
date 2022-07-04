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

const MRP = 3063;

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
  const fourGroupOS = useAppSelector(state => state.calculator.fourGroupOS);
  // скатность
  const firstGroupOSSkat = useAppSelector(state => state.calculator.firstGroupOSSkat);
  const secondGroupOSSkat = useAppSelector(state => state.calculator.secondGroupOSSkat);
  const thirdGroupOSSkat = useAppSelector(state => state.calculator.thirdGroupOSSkat);
  const fourGroupOSSkat = useAppSelector(state => state.calculator.fourGroupOSSkat);
  // расстояние между осями
  const firstGroupOSDistance = useAppSelector(state => state.calculator.firstGroupOSDistance);
  const secondGroupOSDistance = useAppSelector(state => state.calculator.secondGroupOSDistance);
  const thirdGroupOSDistance = useAppSelector(state => state.calculator.thirdGroupOSDistance);
  const fourGroupOSDistance = useAppSelector(state => state.calculator.fourGroupOSDistance);

  // 4 step
  const firstGroupOSWeight = useAppSelector(state => state.calculator.firstGroupOSWeight);
  const secondGroupOSWeight = useAppSelector(state => state.calculator.secondGroupOSWeight);
  const thirdGroupOSWeight = useAppSelector(state => state.calculator.thirdGroupOSWeight);
  const fourGroupOSWeight = useAppSelector(state => state.calculator.fourGroupOSWeight);
  // 5 step
  const height = useAppSelector(state => state.calculator.height);
  const width = useAppSelector(state => state.calculator.width);
  const length = useAppSelector(state => state.calculator.length);
  const ledge = useAppSelector(state => state.calculator.ledge);

  const [activeStep, setActiveStep] = React.useState(0);
  const [finalCost, setFinalCost] = React.useState(0);

  function calculateSingle() {
    const veduchiTrak = +secondGroupOS === 2 && secondGroupOSSkat === 2 ? true : false;
    // расчет по габаритам
    const heightCoef = getCoefDimension('height', height, isometric);
    const widthCoef = getCoefDimension('width', width, isometric);
    const lengthCoef = getCoefDimension('length', length, isometric);
    const ledgeCoef = ledge > 1 ? (ledge - 1) * 0.004 : 0;

    // расчет по осям

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
    console.log('heightCoef: ' + heightCoef);
    console.log('widthCoef: ' + widthCoef);
    console.log('lengthCoef: ' + lengthCoef);
    console.log('ledgeCoef: ' + ledgeCoef);
    console.log('weightCoef: ' + weightCoef);
    console.log('track1Coef: ' + track1Coef);
    console.log('track2Coef: ' + track2Coef);
    console.log(
      'final cost: ' +
        +((+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +track1Coef + +track2Coef) * MRP * +distance).toFixed()
    );
    setFinalCost(
      +((+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +track1Coef + +track2Coef) * MRP * +distance).toFixed()
    );
  }

  function calculatePolupricep() {
    const osCount = firstGroupOS + secondGroupOS + thirdGroupOS;
    const veduchiTrak = +secondGroupOS === 2 && secondGroupOSSkat === 2 ? true : false;
    // расчет по габаритам
    const heightCoef = getCoefDimension('height', height, isometric);
    const widthCoef = getCoefDimension('width', width, isometric);
    const lengthCoef = length > 16.5 ? getCoefDimension('length', length, isometric) : 0;
    const ledgeCoef = ledge > 1 ? (ledge - 1) * 0.004 : 0;

    // расчет по осям
    const trak1Coef = table1OS(firstGroupOSWeight, isometric);
    const trak2Coef =
      secondGroupOS === '1'
        ? table1OS(secondGroupOSWeight, isometric)
        : GetCoef(isometric, +secondGroupOSWeight, +secondGroupOSDistance, +secondGroupOS, '', false, veduchiTrak);

    const trak3Coef =
      thirdGroupOS === '1'
        ? table1OS(thirdGroupOSWeight, isometric)
        : GetCoef(isometric, thirdGroupOSWeight, +thirdGroupOSDistance, thirdGroupOS);

    // расчет по весу
    const allowWeight =
      osCount === 3
        ? isometric
          ? 22.4
          : 28
        : osCount === 4
        ? secondGroupOSSkat === 2 && thirdGroupOSSkat === 2 && thirdGroupOSDistance === '18' && thirdGroupOSWeight <= 19
          ? isometric
            ? 30.4
            : 38
          : isometric
          ? 25.6
          : 36
        : osCount >= 5
        ? isometric
          ? 32
          : 40
        : 0;

    const currentWeight = +firstGroupOSWeight + +secondGroupOSWeight + +thirdGroupOSWeight;
    const weightCoef = +(currentWeight > allowWeight ? (currentWeight - allowWeight) * 0.005 : 0);

    console.log('heightCoef: ' + heightCoef);
    console.log('widthCoef: ' + widthCoef);
    console.log('lengthCoef: ' + lengthCoef);
    console.log('ledgeCoef: ' + ledgeCoef);
    console.log('weightCoef: ' + weightCoef);
    console.log('track1Coef: ' + trak1Coef);
    console.log('track2Coef: ' + trak2Coef);
    console.log('track3Coef: ' + trak3Coef);
    console.log(
      'final cost: ' +
        +(
          (+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +trak1Coef + +trak2Coef + +trak3Coef) *
          MRP *
          +distance
        ).toFixed()
    );
    setFinalCost(
      +(
        (+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +trak1Coef + +trak2Coef + +trak3Coef) *
        MRP *
        +distance
      ).toFixed()
    );
  }

  function calculatePricep() {
    const osCount = +firstGroupOS + +secondGroupOS + +thirdGroupOS;

    const veduchiTrak = +secondGroupOS === 2 && secondGroupOSSkat === 2 ? true : false;
    // расчет по габаритам
    const heightCoef = getCoefDimension('height', height, isometric);
    const widthCoef = getCoefDimension('width', width, isometric);
    const lengthCoef = length > 20 ? getCoefDimension('length', length, isometric) : 0;
    const ledgeCoef = ledge > 1 ? (ledge - 1) * 0.004 : 0;

    // расчет по осям
    const trak1Coef =
      firstGroupOS === 1
        ? table1OS(firstGroupOSWeight, isometric)
        : GetCoef(isometric, +firstGroupOSWeight, +firstGroupOSDistance, +firstGroupOS);
    const trak2Coef =
      secondGroupOS === 1
        ? table1OS(secondGroupOSWeight, isometric)
        : GetCoef(isometric, +secondGroupOSWeight, +secondGroupOSDistance, +secondGroupOS, '', false, veduchiTrak);

    const trak3Coef =
      thirdGroupOS === 1
        ? table1OS(thirdGroupOSWeight, isometric)
        : GetCoef(isometric, +thirdGroupOSWeight, +thirdGroupOSDistance, +thirdGroupOS);
    // const = trak4Coef = trak4OsValue === 1 ? table1OS(trak4weight) : GetCoef(isometric, +trak4weight, +trak4OsDistance, +trak4OsValue);

    // расчет по весу
    const allowWeight =
      osCount === 3 ? (isometric ? 22.4 : 28) : osCount === 4 ? (isometric ? 28.8 : 36) : osCount >= 5 ? (isometric ? 35.2 : 44) : 0;
    // const currentWeight = +trak1weight + +trak2weight + +trak3weight + +trak4weight;
    const currentWeight = +firstGroupOSWeight + +secondGroupOSWeight + +thirdGroupOSWeight;
    const weightCoef = +(currentWeight > allowWeight ? (currentWeight - allowWeight) * 0.005 : 0);

    console.log('heightCoef: ' + heightCoef);
    console.log('widthCoef: ' + widthCoef);
    console.log('lengthCoef: ' + lengthCoef);
    console.log('ledgeCoef: ' + ledgeCoef);
    console.log('weightCoef: ' + weightCoef);
    console.log('track1Coef: ' + trak1Coef);
    console.log('track2Coef: ' + trak2Coef);
    console.log('track3Coef: ' + trak3Coef);
    console.log(
      'final cost: ' +
        +(
          (+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +trak1Coef + +trak2Coef + +trak3Coef) *
          MRP *
          +distance
        ).toFixed()
    );

    setFinalCost(
      +(
        (+heightCoef + +widthCoef + +lengthCoef + +ledgeCoef + weightCoef + +trak1Coef + +trak2Coef + +trak3Coef) *
        MRP *
        +distance
      ).toFixed()
    );
  }

  function calculateTrall() {
    const veduchiTrak = +secondGroupOS === 2 && secondGroupOSSkat === 2 ? true : false;

    // расчет по габаритам
    const heightCoef = getCoefDimension('height', height, isometric);
    const widthCoef = getCoefDimension('width', width, isometric);
    const lengthCoef = length > 20 ? getCoefDimension('length', length, isometric) : 0;
    const ledgeCoef = ledge > 1 ? (ledge - 1) * 0.004 : 0;

    // расчет по осям
    const trak1Coef =
      firstGroupOS === '1'
        ? table1OS(firstGroupOSWeight, isometric)
        : GetCoef(isometric, firstGroupOSWeight, firstGroupOSDistance, firstGroupOS, '', false);

    // setTrak2Coef(
    //   trak2OsValue === '1'
    //     ? table1OS(trak2weight)
    //     : GetCoef(isometric, +trak2weight, +trak2OsDistance, +trak2OsValue, '', lenivec, veduchiTrak)
    // );
    // setTrak3Coef(
    //   trak3OsValue === '1'
    //     ? table1OS(trak3weight)
    //     : GetCoef(isometric, +trak3weight, +trak3OsDistance, +trak3OsValue, +trak3OsValue < 4 ? '' : 'trawl')
    // );
    // setTrak4Coef(
    //   pricepOs === 2
    //     ? trak4OsValue === '1'
    //       ? table1OS(trak4weight)
    //       : GetCoef(isometric, +trak4weight, +trak4OsDistance, +trak4OsValue, 'trawl')
    //     : 0
    // );

    // const tyagachOsCounttemp = +trak1OsValue + +trak2OsValue;
    // const tralOsCounttemp = pricepOs === 1 ? +trak3OsValue : +trak3OsValue + +trak4OsValue;
    // const tyagachAllowWeight = getAllowWeight(tyagachOsCounttemp);

    // let tralAllowWeight;
    // if (+tralOsCounttemp === 1 || +tralOsCounttemp === 2) {
    //   tralAllowWeight = getAllowWeight(tralOsCounttemp);
    // } else if (+tralOsCounttemp === 3) {
    //   tralAllowWeight = 25;
    // } else {
    //   if (+pricepOs === 1) {
    //     tralAllowWeight = +trak3OsValue === 1 ? 10 : +trak3OsDistance;
    //   } else {
    //     tralAllowWeight = (+trak3OsValue === 1 ? 10 : +trak3OsDistance) + (+trak4OsValue === 1 ? 10 : +trak4OsDistance);
    //   }
    // }
    // const allowWeight = isometric
    //   ? tyagachAllowWeight + tralAllowWeight - ((tyagachAllowWeight + tralAllowWeight) / 100) * 20
    //   : tyagachAllowWeight + tralAllowWeight;

    // const currentWeight = +trak1weight + +trak2weight + +trak3weight + +trak4weight;
    // setWeightCoef(+(currentWeight > allowWeight ? (currentWeight - allowWeight) * 0.005 : 0));
  }

  const calculate = () => {
    if (atcType === 'single') calculateSingle();
    if (atcType === 'polupricep') calculatePolupricep();
    if (atcType === 'pricep') calculatePricep();
    if (atcType === 'trall') calculateTrall();
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
            {index === 2 && <StepThree index={index} step={step} steps={steps} handleNext={handleNext} handleBack={handleBack} />}
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
