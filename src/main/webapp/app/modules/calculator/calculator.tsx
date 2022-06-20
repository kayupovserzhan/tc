import VerticalLinearStepper from './components/stepper';
import React from 'react';
import './calculator.scss';

const Calcultor = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <p className="calc_main_text">Стоимость спец разрешения</p>
      </div>
      <div className="row mt-2">
        <p className="calc_description">
          Рассчитайте стоимость спецразрешения за перевозку негабаритного или тяжеловесного груза и подберите автомобиль под ваш груз в
          нашем калькуляторе?
        </p>
      </div>
      <div className="row mt-5">
        <div className="col">
          <VerticalLinearStepper />
        </div>
      </div>
    </div>
  );
};

export default Calcultor;
