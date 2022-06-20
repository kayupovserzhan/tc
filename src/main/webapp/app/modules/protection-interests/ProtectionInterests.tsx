import React from 'react';
import './protection-interests.scss';

const ProtectionInterests = () => {
  return (
    <>
      <section className="protection-interests-main-section">
        <div className="container  ">
          <div className="row">
            <div className="col-sm main-title">тут будет заголовок</div>
          </div>
          <div className="row">
            <div className="col-sm main-description">
              <p>тут будет описание</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="main-text">
                <p>тут будет описание</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtectionInterests;
