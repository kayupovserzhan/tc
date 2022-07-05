import { Button, Typography } from '@mui/material';
import { useAppSelector } from 'app/config/store';
import React from 'react';

const StepLast = props => {
  const { handleReset, finalCost } = props;
  // const atcType = useAppSelector(state => state.calculator.atcType);
  // const imgUrl = () => {
  //   if (atcType === 'single') return "";
  // }
  return (
    <>
      {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
      <div className="row mb-3">
        <div className="col">
          <img src="/content/images/step/last-step-img.png" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Стоимость спец разрешения:</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{finalCost < 0 ? 0 : finalCost} тенге:</p>
        </div>
      </div>
      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        Перерасчитать
      </Button>
    </>
  );
};

export default StepLast;
