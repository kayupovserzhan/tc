import { Box, Button, FormControl, InputLabel, MenuItem, Select, StepContent, StepLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from 'app/config/store';
import {
  setFirstGroupOS,
  setFirstGroupOSDistance,
  setFirstGroupOSSkat,
  setSecondGroupOS,
  setSecondGroupOSDistance,
  setSecondGroupOSSkat,
  setThirdGroupOS,
  setThirdGroupOSDistance,
  setThirdGroupOSSkat,
} from '../calculatorSlice';

const StepThree = props => {
  const {
    firstGroupOSDistance,
    secondGroupOSDistance,
    thirdGroupOSDistance,
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
    setFirstGroupOsDistanceVal('');
  };
  const handleSecondGroupOs = e => {
    setSecondGroupOSVal(e);
    setSecondGroupOsDistanceVal('');
  };
  const handleThirdGroupOs = e => {
    setThirdGroupOSVal(e);
    setThirdGroupOsDistanceVal('');
  };

  // скатность осей
  const [firstGroupOSSkatVal, setFirstGroupOSSkatVal] = useState(firstGroupOSSkat || 0);
  const [secondGroupOSSkatVal, setSecondGroupOSSkatVal] = useState(secondGroupOSSkat || 0);
  const [thirdGroupOSSkatVal, setThirdGroupOSSkatVal] = useState(thirdGroupOSSkat || 0);

  // расстояние между осями
  const [firstGroupOsDistanceVal, setFirstGroupOsDistanceVal] = useState(firstGroupOSDistance || '');
  const [secondGroupOsDistanceVal, setSecondGroupOsDistanceVal] = useState(secondGroupOSDistance || '');
  const [thirdGroupOsDistanceVal, setThirdGroupOsDistanceVal] = useState(thirdGroupOSDistance || '');
  const optionValues = {
    first: firstGroupOSVal === '2' ? '12' : '18',
    second: firstGroupOSVal === '2' ? '14' : '21',
    third: firstGroupOSVal === '2' ? '16' : '24',
    fourth: firstGroupOSVal === '2' ? '18' : '27',
  };
  const { first, second, third, fourth } = optionValues;

  const handleChangeFirst = e => {
    setFirstGroupOsDistanceVal(e.target.value as string);
  };

  const handleChangeSecond = e => {
    setSecondGroupOsDistanceVal(e.target.value as string);
  };

  const handleChangeThird = e => {
    setThirdGroupOsDistanceVal(e.target.value as string);
  };

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
    dispatch(setFirstGroupOS(firstGroupOSVal));
    dispatch(setSecondGroupOS(secondGroupOSVal));
    dispatch(setThirdGroupOS(thirdGroupOSVal));
    dispatch(setFirstGroupOSSkat(firstGroupOSSkatVal));
    dispatch(setSecondGroupOSSkat(secondGroupOSSkatVal));
    dispatch(setThirdGroupOSSkat(thirdGroupOSSkatVal));
    dispatch(setFirstGroupOSDistance(firstGroupOsDistanceVal));
    dispatch(setSecondGroupOSDistance(secondGroupOsDistanceVal));
    dispatch(setThirdGroupOSDistance(thirdGroupOsDistanceVal));
    handleNext();
  };

  function FGroupOSVal() {
    if (firstGroupOSVal > 1 || secondGroupOSVal > 1 || thirdGroupOSVal > 1) {
      return true;
    } else {
      return false;
    }
  }
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
              <Button fullWidth onClick={() => handleFirstGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {firstGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleSecondGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {secondGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleThirdGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
                {thirdGroupOSVal === 1 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button fullWidth onClick={() => handleFirstGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {firstGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleSecondGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {secondGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleThirdGroupOs(2)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
                {thirdGroupOSVal === 2 && <CheckIcon />}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button fullWidth onClick={() => handleFirstGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {firstGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleSecondGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {secondGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleThirdGroupOs(3)} variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
                {thirdGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </div>
          </div>
          {FGroupOSVal() && (
            <>
              <div className="row mt-4">
                <div className="col">
                  {firstGroupOSVal > 1 && (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Расстояние между осями</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={firstGroupOsDistanceVal}
                        defaultValue={firstGroupOsDistanceVal}
                        label="Расстояние между осями"
                        onChange={handleChangeFirst}
                      >
                        <MenuItem value={first}>до 1 метра</MenuItem>
                        <MenuItem value={second}>от 1 метра включительно до 1,3 метра</MenuItem>
                        <MenuItem value={third}>от 1,3 метра включительно до 1,8 метра</MenuItem>
                        <MenuItem value={fourth}>от 1,8 метра до 2 метров</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </div>
                <div className="col">
                  {secondGroupOSVal > 1 && (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Расстояние между осями</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={secondGroupOsDistanceVal}
                        defaultValue={secondGroupOsDistanceVal}
                        label="Расстояние между осями"
                        onChange={handleChangeSecond}
                      >
                        <MenuItem value={first}>до 1 метра</MenuItem>
                        <MenuItem value={second}>от 1 метра включительно до 1,3 метра</MenuItem>
                        <MenuItem value={third}>от 1,3 метра включительно до 1,8 метра</MenuItem>
                        <MenuItem value={fourth}>от 1,8 метра до 2 метров</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </div>
                <div className="col">
                  {thirdGroupOSVal > 1 && (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Расстояние между осями</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={thirdGroupOsDistanceVal}
                        defaultValue={thirdGroupOsDistanceVal}
                        label="Расстояние между осями"
                        onChange={handleChangeThird}
                      >
                        <MenuItem value={first}>до 1 метра</MenuItem>
                        <MenuItem value={second}>от 1 метра включительно до 1,3 метра</MenuItem>
                        <MenuItem value={third}>от 1,3 метра включительно до 1,8 метра</MenuItem>
                        <MenuItem value={fourth}>от 1,8 метра до 2 метров</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="row mt-4">
            <div className="col">Скатность колес</div>
            <div className="col">Скатность колес</div>
            <div className="col">Скатность колес</div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <Button fullWidth onClick={() => handleFirstGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {firstGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button fullWidth onClick={() => handleFirstGroupOsSkat(2)} variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
                {firstGroupOSSkatVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleSecondGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {secondGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button fullWidth onClick={() => handleSecondGroupOsSkat(2)} variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
                {secondGroupOSSkatVal === 2 && <CheckIcon />}
              </Button>
            </div>
            <div className="col">
              <Button fullWidth onClick={() => handleThirdGroupOsSkat(1)} variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
                {thirdGroupOSSkatVal === 1 && <CheckIcon />}
              </Button>
              <Button fullWidth onClick={() => handleThirdGroupOsSkat(2)} variant="outlined">
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
