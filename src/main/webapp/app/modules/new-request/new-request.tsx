import React from 'react';
import NewRequestStepper from './new-request-stepper';
import './new-request.scss';

const NewRequest = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Новая заявка</h1>
      </div>
      <div className="row">
        <p>Оформить новую заявку на бюджет</p>
      </div>
      <div className="row">
        <NewRequestStepper />
      </div>
    </div>
  );
};

export default NewRequest;
