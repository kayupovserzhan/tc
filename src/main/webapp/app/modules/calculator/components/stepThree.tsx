import { Box, Button, StepContent, StepLabel, Typography } from '@mui/material';
import React from 'react';
import ButtonBases from './button-bases';

const StepThree = props => {
  const { index, step, steps, handleNext, handleBack } = props;

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
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/1os.png" />
                Одиночные
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/2os.png" />
                Сдвоенные
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img className="atc-type-img" src="../../../../content/images/os/3os.png" />
                Строенные
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
              <Button variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
              </Button>
              <Button variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
              </Button>
              <Button variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
              </Button>
            </div>
            <div className="col">
              <Button variant="outlined">
                <img src="../../../../content/images/skat/1skat.png" />
                Односкатные
              </Button>
              <Button variant="outlined">
                <img src="../../../../content/images/skat/2skat.png" />
                Двускатные
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

export default StepThree;
