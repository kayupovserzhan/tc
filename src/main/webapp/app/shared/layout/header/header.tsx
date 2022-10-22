import './header.scss';

import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';

import { Home, Brand } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu } from '../menus';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isOpenAPIEnabled: boolean;
  toggleDrawerProps?: (open: boolean) => void;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [activeClass, setActiveClass] = useState('top');

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY === 0) {
  //       setActiveClass('top');
  //     } else {
  //       setActiveClass('normal');
  //     }
  //   });
  // }, []);

  const [openHamburger, setOpenHamburger] = useState(false);
  const [openNavLinks, setOpenNavLinks] = useState(false);

  const hamburgerClick = () => {
    setOpenHamburger(!openHamburger);
    setOpenNavLinks(!openNavLinks);

    // const links = document.querySelectorAll('.nav-links li');

    // links.forEach(link => {
    //   link.classList.toggle('fade');
    // });
  };

  return (
    <div id="app-header">
      {/* <LoadingBar className="loading-bar" /> */}
      <header className={activeClass}>
        <div className="header-row">
          <div className="row header-row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1">
              <div className="menu-icon">
                <IconButton
                  onClick={() => props.toggleDrawerProps(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-5">
              <div className="center_header header_logo">
                <Link to={'/'} className={'logo'}>
                  <img src="/content/images/Group.png" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 info-right ">
              <div className="center_header">
                <a className="header_phone" href="tel:+7-777-780-8247">
                  +7 777 808 88 22
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 info-right ">
              <div className="center_nav_header">
                <div onClick={hamburgerClick} className={`hamburger ${openHamburger ? 'toggle' : ''}`}>
                  <div className="bars1"></div>
                  <div className="bars2"></div>
                  <div className="bars3"></div>
                </div>
                <ul className={`nav-links ${openNavLinks ? 'open' : ''}`}>
                  <li>
                    <button className="order-call-button">Заказать звонок</button>
                  </li>
                  <li>
                    <Link to={'/sign-in'}>Войти</Link>
                  </li>
                  <li className="register-li">
                    <Link to={'/sign-up'}>Зарегистрироваться</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Navbar data-cy="navbar" dark expand="md" fixed="top" className="bg-primary">
        <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
        <Brand />
        <Collapse isOpen={menuOpen} navbar>
          <Nav id="header-tabs" className="ms-auto" navbar>
            <Home />
            {props.isAuthenticated && <EntitiesMenu />}
            {props.isAuthenticated && props.isAdmin && <AdminMenu showOpenAPI={props.isOpenAPIEnabled} />}
            <AccountMenu isAuthenticated={props.isAuthenticated} />
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
};

export default Header;
