import { Box, Button, StepContent, StepLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from 'app/config/store';
import {
  setFirstGroupOS,
  setFirstGroupOSSkat,
  setSecondGroupOS,
  setSecondGroupOSSkat,
  setThirdGroupOS,
  setThirdGroupOSSkat,
} from '../calculatorSlice';

const StepThree = props => {
  const {
    firstGroupOSSkat,
    secondGroupOSSkat,
    thirdGroupOSSkat,
    firstGroupOS,
    secondGroupOS,
    thirdGroupOS,
    index,
    step,
    steps,
    handleNext,
    handleBack,
  } = props;

  // группа осей
  const [firstGroupOSVal, setFirstGroupOSVal] = useState(firstGroupOS || 0);
  const [secondGroupOSVal, setSecondGroupOSVal] = useState(secondGroupOS || 0);
  const [thirdGroupOSVal, setThirdGroupOSVal] = useState(thirdGroupOS || 0);

  const handleFirstGroupOs = e => {
    setFirstGroupOSVal(e);
  };
  const handleSecondGroupOs = e => {
    setSecondGroupOSVal(e);
  };
  const handleThirdGroupOs = e => {
    setThirdGroupOSVal(e);
  };

  // скатность осей
  const [firstGroupOSSkatVal, setFirstGroupOSSkatVal] = useState(firstGroupOSSkat || 0);
  const [secondGroupOSSkatVal, setSecondGroupOSSkatVal] = useState(secondGroupOSSkat || 0);
  const [thirdGroupOSSkatVal, setThirdGroupOSSkatVal] = useState(thirdGroupOSSkat || 0);

  const dispatch = useAppDispatch();

  const handleFirstGroupOsSkat = e => {
    setFirstGroupOSSkatVal(e);
  };
  const handleSecondGroupOsSkat = e => {
    setSecondGroupOSSkatVal(e);
  };
  const handleThirdGroupOsSkat = e => {
    setThirdGroupOSSkatVal(e);
  };

  const handleNextStep = () => {
    dispatch(setFirstGroupOS);
    dispatch(setSecondGroupOS);
    dispatch(setThirdGroupOS);
    dispatch(setFirstGroupOSSkat);
    dispatch(setSecondGroupOSSkat);
    dispatch(setThirdGroupOSSkat);
    handleNext();
  };

  return (
    <>
      <StepLabel>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="row mt-5">
            <div className="col">Первая группа осей</div>
            <div className="col">Вторая группа осей</div>
            <div className="col">Третья группа осей</div>
          </div>
          <div className="row mt-2">
            <div className="col">
              {/* <ButtonBases url={'../../../../content/images/os/1os.png'} title={'Одиночные'} width={'100%'} /> */}
              <Button onClick={() => handleFirstGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {firstGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleSecondGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {secondGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleThirdGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {thirdGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={() => handleFirstGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {firstGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleSecondGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {secondGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleThirdGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {thirdGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={() => handleFirstGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {firstGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleSecondGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {secondGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleThirdGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {thirdGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col">Скатность колес</div>
            <div className="col">Скатность колес</div>
            <div className="col">Скатность колес</div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <Button onClick={() => handleFirstGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {firstGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button onClick={() => handleFirstGroupOsSkat(2)} variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
                {firstGroupOSSkatVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleSecondGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {secondGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button onClick={() => handleSecondGroupOsSkat(2)} variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
                {secondGroupOSSkatVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button onClick={() => handleThirdGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {thirdGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button onClick={() => handleThirdGroupOsSkat(2)} variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
                {thirdGroupOSSkatVal === 2 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div>
            <Button variant="contained" onClick={handleNextStep} sx={{ mt: 1, mr: 1 }}>
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

export default StepThree;
