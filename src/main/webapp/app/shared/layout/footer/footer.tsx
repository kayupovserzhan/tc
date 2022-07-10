import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer page-content">
    <div className="container footer-container">
      <div className="row align-items-center justify-content-center footer-container-row">
        <div className="col-sm footer-menu-title ">
          <a>О компании</a>
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
        <div className="col-4">
          <div className="footer-copyright">© 2020 Trans consalting</div>
        </div>
        <div className="col-4">
          <div className="row social-network justify-content-end">
            <div className="col-sm-3 insta"></div>
            <div className="col-sm-3 insta"></div>
            <div className="col-sm-3 insta"></div>
            <div className="col-sm-3 insta"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
