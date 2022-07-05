import { Box, Button, FormControl, InputLabel, MenuItem, Select, StepContent, StepLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch, useAppSelector } from 'app/config/store';
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
  setFourGroupOS,
  setFourGroupOSDistance,
  setFourGroupOSSkat,
} from '../calculatorSlice';

const StepThree = props => {
  const { index, step, steps, handleNext, handleBack } = props;

  const atcType = useAppSelector(state => state.calculator.atcType);
  const firstGroupOSDistance = useAppSelector(state => state.calculator.firstGroupOSDistance);
  const secondGroupOSDistance = useAppSelector(state => state.calculator.secondGroupOSDistance);
  const thirdGroupOSDistance = useAppSelector(state => state.calculator.thirdGroupOSDistance);
  const fourGroupOSDistance = useAppSelector(state => state.calculator.fourGroupOSDistance);

  const firstGroupOSSkat = useAppSelector(state => state.calculator.firstGroupOSSkat);
  const secondGroupOSSkat = useAppSelector(state => state.calculator.secondGroupOSSkat);
  const thirdGroupOSSkat = useAppSelector(state => state.calculator.thirdGroupOSSkat);
  const fourGroupOSSkat = useAppSelector(state => state.calculator.fourGroupOSSkat);

  const firstGroupOS = useAppSelector(state => state.calculator.firstGroupOS);
  const secondGroupOS = useAppSelector(state => state.calculator.secondGroupOS);
  const thirdGroupOS = useAppSelector(state => state.calculator.thirdGroupOS);
  const fourGroupOS = useAppSelector(state => state.calculator.fourGroupOS);

  const [checkFoursGroupOsVal, setCheckFoursGroupOsVal] = useState(false);

  // группа осей
  const [firstGroupOSVal, setFirstGroupOSVal] = useState(firstGroupOS || 0);
  const [secondGroupOSVal, setSecondGroupOSVal] = useState(secondGroupOS || 0);
  const [thirdGroupOSVal, setThirdGroupOSVal] = useState(thirdGroupOS || 0);
  const [fourGroupOSVal, setFourGroupOSVal] = useState(fourGroupOS || 0);

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
  const handleFourGroupOs = e => {
    setFourGroupOSVal(e);
    setFourGroupOsDistanceVal('');
  };

  // скатность осей
  const [firstGroupOSSkatVal, setFirstGroupOSSkatVal] = useState(firstGroupOSSkat || 0);
  const [secondGroupOSSkatVal, setSecondGroupOSSkatVal] = useState(secondGroupOSSkat || 0);
  const [thirdGroupOSSkatVal, setThirdGroupOSSkatVal] = useState(thirdGroupOSSkat || 0);
  const [fourGroupOSSkatVal, setFourGroupOSSkatVal] = useState(fourGroupOSSkat || 0);

  // расстояние между осями
  const [firstGroupOsDistanceVal, setFirstGroupOsDistanceVal] = useState(firstGroupOSDistance || '');
  const [secondGroupOsDistanceVal, setSecondGroupOsDistanceVal] = useState(secondGroupOSDistance || '');
  const [thirdGroupOsDistanceVal, setThirdGroupOsDistanceVal] = useState(thirdGroupOSDistance || '');
  const [fourGroupOsDistanceVal, setFourGroupOsDistanceVal] = useState(fourGroupOSDistance || '');

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

  const handleChangeFour = e => {
    setFourGroupOsDistanceVal(e.target.value as string);
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
  const handleFourGroupOsSkat = e => {
    setFourGroupOSSkatVal(e);
  };

  const handleNextStep = () => {
    dispatch(setFirstGroupOS(firstGroupOSVal));
    dispatch(setSecondGroupOS(secondGroupOSVal));
    dispatch(setThirdGroupOS(thirdGroupOSVal));
    dispatch(setFourGroupOS(fourGroupOSVal));

    dispatch(setFirstGroupOSSkat(firstGroupOSSkatVal));
    dispatch(setSecondGroupOSSkat(secondGroupOSSkatVal));
    dispatch(setThirdGroupOSSkat(thirdGroupOSSkatVal));
    dispatch(setFourGroupOSSkat(fourGroupOSSkatVal));

    dispatch(setFirstGroupOSDistance(firstGroupOsDistanceVal));
    dispatch(setSecondGroupOSDistance(secondGroupOsDistanceVal));
    dispatch(setThirdGroupOSDistance(thirdGroupOsDistanceVal));
    dispatch(setFourGroupOSDistance(fourGroupOsDistanceVal));
    handleNext();
  };

  function isAllValuesSelected(): boolean {
    if (atcType === 'single') {
      if (firstGroupOSVal > 0 && secondGroupOSVal > 0 ) {
        if (firstGroupOSVal > 1 && firstGroupOsDistanceVal === '') return true;
        if (secondGroupOSVal > 1 && secondGroupOsDistanceVal === '') return true;

        if (firstGroupOSSkatVal === 0 || secondGroupOSSkatVal === 0) return true;
        return false;
      } else {
        return true;
      }
    }

    if (atcType === 'polupricep') {
      if (firstGroupOSVal > 0 && secondGroupOSVal > 0 && thirdGroupOSVal > 0) {
        if (firstGroupOSVal > 1 && firstGroupOsDistanceVal === '') return true;
        if (secondGroupOSVal > 1 && secondGroupOsDistanceVal === '') return true;
        if (thirdGroupOSVal > 1 && thirdGroupOsDistanceVal === '') return true;

        if (firstGroupOSSkatVal === 0 || secondGroupOSSkatVal === 0 || thirdGroupOSSkatVal === 0) return true;
        return false;
      } else {
        return true;
      }
    }

    if (atcType === 'pricep' || atcType === 'trall') {
      if (checkFoursGroupOsVal) {
        if (firstGroupOSVal > 0 && secondGroupOSVal > 0 && thirdGroupOSVal > 0 && fourGroupOSVal > 0) {
          if (firstGroupOSVal > 1 && firstGroupOsDistanceVal === '') return true;
          if (secondGroupOSVal > 1 && secondGroupOsDistanceVal === '') return true;
          if (thirdGroupOSVal > 1 && thirdGroupOsDistanceVal === '') return true;
          if (fourGroupOSVal > 1 && fourGroupOsDistanceVal === '') return true;

          if (firstGroupOSSkatVal === 0 || secondGroupOSSkatVal === 0 || thirdGroupOSSkatVal === 0 || fourGroupOSSkatVal === 0) return true;
          return false;
        } else {
          return true;
        }
      } else {
        if (firstGroupOSVal > 0 && secondGroupOSVal > 0 && thirdGroupOSVal > 0) {
          if (firstGroupOSVal > 1 && firstGroupOsDistanceVal === '') return true;
          if (secondGroupOSVal > 1 && secondGroupOsDistanceVal === '') return true;
          if (thirdGroupOSVal > 1 && thirdGroupOsDistanceVal === '') return true;

          if (firstGroupOSSkatVal === 0 || secondGroupOSSkatVal === 0 || thirdGroupOSSkatVal === 0) return true;
          return false;
        } else {
          return true;
        }
      }
    }
  }

  const handleClickAdd = () => {
    setCheckFoursGroupOsVal(!checkFoursGroupOsVal);
    if (checkFoursGroupOsVal) {
      setFourGroupOSVal(0);
      setFourGroupOsDistanceVal('');
      setFourGroupOSSkatVal(0);
      console.log('deleted');
    } else {
      setThirdGroupOSVal(0);
    }
  };

  const handleChangeOsGroupTrall = (os, e) => {
    if (os === 3) setThirdGroupOSVal(e.target.value as number);
    if (os === 4) setFourGroupOSVal(e.target.value as number);
  };

  const FirstOsGroupRender = () => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        Первая группа осей
        <Button className="mt-10" fullWidth onClick={() => handleFirstGroupOs(1)} variant="outlined">
          <img className="atc-type-img" src="/content/images/os/1os.png" />
          Одиночные
          {firstGroupOSVal === 1 && <CheckIcon />}
        </Button>
        <Button
          disabled={atcType === 'polupricep' ? true : atcType === 'pricep' ? true : false}
          className="mt-10"
          fullWidth
          onClick={() => handleFirstGroupOs(2)}
          variant="outlined"
        >
          <img className="atc-type-img" src="/content/images/os/2os.png" />
          Сдвоенные
          {firstGroupOSVal === 2 && <CheckIcon />}
        </Button>
        <Button
          disabled={atcType === 'polupricep' ? true : atcType === 'pricep' ? true : false}
          className="mt-10"
          fullWidth
          onClick={() => handleFirstGroupOs(3)}
          variant="outlined"
        >
          <img className="atc-type-img" src="/content/images/os/3os.png" />
          Строенные
          {firstGroupOSVal === 3 && <CheckIcon />}
        </Button>
        {firstGroupOSVal > 1 && (
          <FormControl className="mt-10" fullWidth>
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
        <div className="mt-10">Скатность колес</div>
        <Button className="mt-10" fullWidth onClick={() => handleFirstGroupOsSkat(1)} variant="outlined">
          <img src="/content/images/skat/1skat.png" />
          Односкатные
          {firstGroupOSSkatVal === 1 && <CheckIcon />}
        </Button>
        <Button
          disabled={atcType === 'single' ? true : atcType === 'polupricep' ? true : atcType === 'pricep' ? true : false}
          className="mt-10"
          fullWidth
          onClick={() => handleFirstGroupOsSkat(2)}
          variant="outlined"
        >
          <img src="/content/images/skat/2skat.png" />
          Двускатные
          {firstGroupOSSkatVal === 2 && <CheckIcon />}
        </Button>
      </div>
    );
  };

  const SecondOsGroupRender = () => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        Вторая группа осей
        <Button className="mt-10" fullWidth onClick={() => handleSecondGroupOs(1)} variant="outlined">
          <img className="atc-type-img" src="/content/images/os/1os.png" />
          Одиночные
          {secondGroupOSVal === 1 && <CheckIcon />}
        </Button>
        <Button className="mt-10" fullWidth onClick={() => handleSecondGroupOs(2)} variant="outlined">
          <img className="atc-type-img" src="/content/images/os/2os.png" />
          Сдвоенные
          {secondGroupOSVal === 2 && <CheckIcon />}
        </Button>
        <Button className="mt-10" fullWidth onClick={() => handleSecondGroupOs(3)} variant="outlined">
          <img className="atc-type-img" src="/content/images/os/3os.png" />
          Строенные
          {secondGroupOSVal === 3 && <CheckIcon />}
        </Button>
        {secondGroupOSVal > 1 && (
          <FormControl className="mt-10" fullWidth>
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
        <div className="mt-10">Скатность колес</div>
        <Button className="mt-10" fullWidth onClick={() => handleSecondGroupOsSkat(1)} variant="outlined">
          <img src="/content/images/skat/1skat.png" />
          Односкатные
          {secondGroupOSSkatVal === 1 && <CheckIcon />}
        </Button>
        <Button className="mt-10" fullWidth onClick={() => handleSecondGroupOsSkat(2)} variant="outlined">
          <img src="/content/images/skat/2skat.png" />
          Двускатные
          {secondGroupOSSkatVal === 2 && <CheckIcon />}
        </Button>
      </div>
    );
  };

  const osForTrall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const ThirdOsGroupRender = () => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div>
          Третья группа осей
          {atcType === 'trall' ? (
            <>
              <FormControl className="mt-10" fullWidth>
                <InputLabel id="demo-simple-select-label">группа осей</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={thirdGroupOSVal === 0 ? '' : (thirdGroupOSVal as string)}
                  defaultValue={thirdGroupOSVal === 0 ? '' : (thirdGroupOSVal as string)}
                  label="группа осей"
                  onChange={e => handleChangeOsGroupTrall(3, e)}
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map(
                    os => (
                      <MenuItem key={os} value={os}>
                        {os}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </>
          ) : (
            <>
              <Button className="mt-10" fullWidth onClick={() => handleThirdGroupOs(1)} variant="outlined">
                <img className="atc-type-img" src="/content/images/os/1os.png" />
                Одиночные
                {thirdGroupOSVal === 1 && <CheckIcon />}
              </Button>
              <Button
                disabled={checkFoursGroupOsVal ? true : false}
                className="mt-10"
                fullWidth
                onClick={() => handleThirdGroupOs(2)}
                variant="outlined"
              >
                <img className="atc-type-img" src="/content/images/os/2os.png" />
                Сдвоенные
                {thirdGroupOSVal === 2 && <CheckIcon />}
              </Button>
              <Button
                disabled={checkFoursGroupOsVal ? true : false}
                className="mt-10"
                fullWidth
                onClick={() => handleThirdGroupOs(3)}
                variant="outlined"
              >
                <img className="atc-type-img" src="/content/images/os/3os.png" />
                Строенные
                {thirdGroupOSVal === 3 && <CheckIcon />}
              </Button>
            </>
          )}
          {thirdGroupOSVal > 1 && (
            <FormControl className="mt-10" fullWidth>
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
        <div className="mt-10">Скатность колес</div>
        <Button className="mt-10" fullWidth onClick={() => handleThirdGroupOsSkat(1)} variant="outlined">
          <img src="/content/images/skat/1skat.png" />
          Односкатные
          {thirdGroupOSSkatVal === 1 && <CheckIcon />}
        </Button>
        <Button className="mt-10" fullWidth onClick={() => handleThirdGroupOsSkat(2)} variant="outlined">
          <img src="/content/images/skat/2skat.png" />
          Двускатные
          {thirdGroupOSSkatVal === 2 && <CheckIcon />}
        </Button>
      </div>
    );
  };

  const FourOsGroupRender = () => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        {['pricep', 'trall'].includes(atcType) && <Button onClick={handleClickAdd}>{checkFoursGroupOsVal ? 'Удалить' : 'Добавить'}</Button>}
        {checkFoursGroupOsVal && (
          <>
            Четвертая группа осей
            {atcType === 'trall' ? (
              <>
                <FormControl className="mt-10" fullWidth>
                  <InputLabel id="demo-simple-select-label">группа осей</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={thirdGroupOSVal === 0 ? '' : (thirdGroupOSVal as string)}
                    defaultValue={thirdGroupOSVal === 0 ? '' : (thirdGroupOSVal as string)}
                    label="группа осей"
                    onChange={e => handleChangeOsGroupTrall(4, e)}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map(
                      os => (
                        <MenuItem key={os} value={os}>
                          {os}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </>
            ) : (
              <>
                <Button className="mt-10" fullWidth onClick={() => handleFourGroupOs(1)} variant="outlined">
                  <img className="atc-type-img" src="/content/images/os/1os.png" />
                  Одиночные
                  {fourGroupOSVal === 1 && <CheckIcon />}
                </Button>
                <Button className="mt-10" fullWidth onClick={() => handleFourGroupOs(2)} variant="outlined">
                  <img className="atc-type-img" src="/content/images/os/2os.png" />
                  Сдвоенные
                  {fourGroupOSVal === 2 && <CheckIcon />}
                </Button>
                <Button
                  disabled={checkFoursGroupOsVal ? true : false}
                  className="mt-10"
                  fullWidth
                  onClick={() => handleFourGroupOs(3)}
                  variant="outlined"
                >
                  <img className="atc-type-img" src="/content/images/os/3os.png" />
                  Строенные
                  {fourGroupOSVal === 3 && <CheckIcon />}
                </Button>
              </>
            )}
            {fourGroupOSVal > 1 && (
              <FormControl className="mt-10" fullWidth>
                <InputLabel id="demo-simple-select-label">Расстояние между осями</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fourGroupOsDistanceVal}
                  defaultValue={fourGroupOsDistanceVal}
                  label="Расстояние между осями"
                  onChange={handleChangeFour}
                >
                  <MenuItem value={first}>до 1 метра</MenuItem>
                  <MenuItem value={second}>от 1 метра включительно до 1,3 метра</MenuItem>
                  <MenuItem value={third}>от 1,3 метра включительно до 1,8 метра</MenuItem>
                  <MenuItem value={fourth}>от 1,8 метра до 2 метров</MenuItem>
                </Select>
              </FormControl>
            )}
            Скатность колес
            <Button className="mt-10" fullWidth onClick={() => handleFourGroupOsSkat(1)} variant="outlined">
              <img src="/content/images/skat/1skat.png" />
              Односкатные
              {fourGroupOSSkatVal === 1 && <CheckIcon />}
            </Button>
            <Button className="mt-10" fullWidth onClick={() => handleFourGroupOsSkat(2)} variant="outlined">
              <img src="/content/images/skat/2skat.png" />
              Двускатные
              {fourGroupOSSkatVal === 2 && <CheckIcon />}
            </Button>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <StepLabel>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div className="row mt-5">
            <FirstOsGroupRender />
            <SecondOsGroupRender />
            {!['single', 'polupricep'].includes(atcType) && (
              <>
                <ThirdOsGroupRender />
                <FourOsGroupRender />
              </>
            )}
          </div>
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

export default StepThree;
