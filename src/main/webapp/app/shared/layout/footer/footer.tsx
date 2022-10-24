import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer page-content">
    <div className="container footer-container">
      <div className="row row-footer-logo">
        <div className="col">
          <div className="center_footer footer_logo">
            <Link to={'/'} className={'logo'}>
              <img src="/content/images/Group.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between footer-container-row">
        <div className="col-sm footer-menu-title ">
          <Link className="footer-container__contacts" to="/about">
            О компании
          </Link>
        </div>
        <div className="col-sm footer-menu-title">
          <Link className="footer-container__contacts" to="/calculator">
            Калькулятор
          </Link>
        </div>
        <div className="col-sm footer-menu-title">
          <a>Конструктор документов</a>
        </div>
        <div className="col-sm footer-menu-title">
          <a>Консалтинг</a>
        </div>
        <div className="col-sm footer-menu-title">
          <a>Аудит</a>
        </div>
        <div className="col-sm footer-menu-title">
          <a>Сопровождение</a>
        </div>
        <div className="col-sm footer-menu-title">
          <Link className="footer-container__contacts" to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="align-items-center justify-content-center footer-divider"></div>
      </div>
      <div className="row justify-content-between">
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="footer-copyright">© 2020 Trans consalting</div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="row social-network justify-content-end">
            <div className="col-1 col-sm-1">
              <div className="social-icons">
                <div className="BG">
                  <a className="path" rel="noopener noreferrer" href="https://www.instagram.com/transconsulting.kz" target="_blank" />
                </div>
              </div>
            </div>
            <div className="col-1 col-sm-1 ">
              <div className="social-icons">
                <div className="BG">
                  <a
                    className="path-twitter"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Transconsulting.kz"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
