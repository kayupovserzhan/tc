import VerticalLinearStepper from './components/stepper';
import React from 'react';
import './calculator.scss';
import { Link } from 'react-router-dom';

const Calcultor = () => {
  return (
    <div className="container container_calc">
      <div className="row mt-5">
        <Link to={'/'}>Вернуться на главную</Link>
        <p className="calc_main_text">Стоимость спец разрешения</p>
      </div>
      <div className="row mt-2">
        <p className="calc_description">
          Рассчитайте стоимость спецразрешения за перевозку негабаритного или тяжеловесного груза и подберите автомобиль под ваш груз в
          нашем калькуляторе?
        </p>
      </div>
      <div className="row mt-2">
        <div className="col">
          <VerticalLinearStepper />
        </div>
      </div>
    </div>
  );
};

export default Calcultor;
