import React from 'react';
import './button.scss';

const Button = props => {
  const { text, icon } = props;
  return (
    <button className="some-button">
      <span className="material-icons">{icon}</span>
      {text}
    </button>
  );
};

export default Button;
