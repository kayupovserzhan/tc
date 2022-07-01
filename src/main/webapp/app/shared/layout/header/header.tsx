import './header.scss';

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';

import { Home, Brand } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu } from '../menus';
import { Link } from 'react-router-dom';

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

  /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

  return (
    <div id="app-header">
      {/* <LoadingBar className="loading-bar" /> */}
      <header>
        <div className="container header-row">
          <div className="row header-row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1">
              <div>
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
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <div className="center_header">
                <Link to={'/'} className={'logo'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 939.5 280.39">
                    <title>trans consulting_3</title>
                    <g id="Слой_2" data-name="Слой 2">
                      <g id="Слой_1-2" data-name="Слой 1">
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M365.14,131.92c0,7.3,1.31,12.17,18.17,12.17v.75H326v-.75c16.86,0,18.17-4.87,18.17-12.17V19.14c0-7.12-.38-8.43-4.12-8.43h-4.5c-28.1,0-34.1,11.61-42.34,40.65h-.75l4.87-44.58h.75c1.69,2.43,8.06,2.81,11.43,2.81h90.3c3.56,0,9.93-.38,11.61-2.81h.75L417,51.36h-.75c-6.74-26-12.92-40.65-42.52-40.65h-4.69c-3.37,0-3.93,1.5-3.93,8.43Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M482.22,144.84H424.9v-.75c16.86,0,18.17-4.87,18.17-12.17V22.7c0-7.31-1.31-12.37-18.17-12.37V9.59h66.69C518,9.59,537.3,21.2,537.3,43.68c0,20.8-19.29,33.53-48.33,34.47,44.58,7.87,40.84,64.45,59.57,64.45,2.81,0,5.44-1.69,7.87-6,.37.38.75.38,1.12.75-3.18,5.25-7.68,9.37-15.73,9.37-41.78,0-32-68.57-61.45-68.57h-16.3v53.77c0,7.3,1.31,12.17,18.17,12.17ZM472.86,10.71c-6.56,0-8.81,4.68-8.81,12.18V77H482.6c21.73,0,33.53-13.87,33.53-32.79s-11.8-33.53-27.54-33.53Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M642.58,96.14H591.44l-6.93,17.23c-5.06,12.74-5.44,16.3-5.44,17.8,0,5.24.94,12.92,18,12.92v.75H557.34v-.75c14.24,0,21-17.79,25.86-30.16L626.1,6.78h.56l51.89,126.64c3.37,8.05,7.68,10.67,16.3,10.67v.75H642.4v-.75c14.42,0,16.11-3.18,16.11-6.18a14.29,14.29,0,0,0-1.13-4.68ZM591.81,95h50.4L617.29,31.32Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M808.37,39.37c0-11.61-.75-29-18.54-29V9.59h39.52v.74c-18.73,0-19.85,17.43-19.85,29V144.84h-6.37l-82.81-124h-.75V114.5c0,12,2.63,29.59,18.74,29.59v.75H698.78v-.75c18.73,0,19.86-17.61,19.86-29.59V24.2c0-9.18-4.87-13.68-19.86-13.87V9.59h39.53l70.06,105.47Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M842.27,45.37c0-26.42,20.24-38.22,42.9-38.22,21.74,0,26,8.8,36.35,8.8,4.31,0,7.12-5.24,7.68-9H930l3.37,49.46h-.75C925.83,21,904.66,8.09,885.17,8.09c-13.3,0-27.91,9.18-27.91,26.79,0,43.83,82.24,20,82.24,72.31,0,28.29-27.72,40.09-50.58,40.09-19.67,0-29.78-8.06-39.9-8.06-5.62,0-7.68,5.25-8.24,8.25h-1.13l-2.06-53.21h.75c5.06,36.91,30.16,52.08,50.58,52.08,17.24,0,33.72-10.11,33.72-28.47C922.64,74,842.27,97.82,842.27,45.37Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M348.07,198.32c1.85,0,3.21-1.55,3.69-4.37h.49l2.23,26.91H354c-4-19.14-15-26.33-22.73-26.33-13.41,0-21.08,14-21.08,36,0,22.73,9.52,35.17,21.85,35.17s19.92-10.49,21.08-23.8c.1-1.46.88-2,1.46-2a1.5,1.5,0,0,1,1.56,1.65,25.56,25.56,0,0,1-25.55,25.16c-19.63,0-31.87-15-31.87-34.88,0-19.33,10.5-38,31.48-38C338.07,193.85,344.38,198.32,348.07,198.32Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M396.54,266.51c-19.72,0-31.76-15.73-31.76-36.33s12-36.33,31.76-36.33,31.77,15.84,31.77,36.33S416.36,266.51,396.54,266.51Zm0-72.17c-12.82,0-20.4,15.25-20.4,35.84S383.72,266,396.54,266,417,250.87,417,230.18,409.46,194.34,396.54,194.34Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M490.48,210.56c0-6-.39-15.06-9.62-15.06v-.39h20.5v.39c-9.72,0-10.3,9-10.3,15.06v54.69h-3.3l-42.94-64.31h-.39v48.57c0,6.22,1.36,15.35,9.72,15.35v.39h-20.5v-.39c9.71,0,10.29-9.13,10.29-15.35V202.69c0-4.76-2.52-7.09-10.29-7.19v-.39h20.5l36.33,54.7Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M508.05,213.67c0-13.7,10.5-19.82,22.25-19.82,11.27,0,13.5,4.57,18.85,4.57,2.23,0,3.69-2.72,4-4.67h.39l1.75,25.65h-.39c-3.5-18.36-14.48-25.06-24.58-25.06-6.9,0-14.47,4.76-14.47,13.89,0,22.73,42.64,10.39,42.64,37.5,0,14.66-14.38,20.78-26.23,20.78-10.2,0-15.44-4.17-20.69-4.17-2.91,0-4,2.72-4.27,4.27h-.58L505.63,239H506c2.63,19.14,15.64,27,26.23,27,8.94,0,17.49-5.25,17.49-14.77C549.73,228.53,508.05,240.87,508.05,213.67Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M624.23,244.27c0,15.15-11.55,22.44-25.35,22.44-14.18,0-25.35-7.68-25.35-22.44v-42c0-3.79-.68-6.8-9.43-6.8v-.39h29.83v.39c-8.84,0-9.52,3-9.52,6.8v42c0,12.72,9,20.4,19.52,20.4,11.17,0,19.72-8,19.72-20.4V205.8c0-4.57-.87-10.3-10.3-10.3v-.39h21.08v.39c-9.81,0-10.2,5.73-10.2,10.3Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M660.07,258.55c0,4.56,1.66,6.22,4.18,6.22h7.48c15.74,0,20.6-.39,26-24.87h.38c-.87,8.45-1.84,16.9-2.81,25.35H639.77v-.39c8.75,0,9.42-2.52,9.42-6.31V201.91c0-3.78-.67-6.41-9.42-6.41v-.39H669.6v.39c-8.84,0-9.53,2.63-9.53,6.41Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M729.14,258.55c0,3.79.68,6.31,9.43,6.31v.39H708.84v-.39c8.74,0,9.42-2.52,9.42-6.31V200.07c0-3.69-.19-4.37-2.14-4.37h-2.33c-14.57,0-17.68,6-21.95,21.08h-.39L694,193.66h.39c.87,1.26,4.17,1.45,5.92,1.45h46.82c1.85,0,5.15-.19,6-1.45h.39l2.52,23.12h-.39c-3.49-13.51-6.7-21.08-22-21.08h-2.43c-1.75,0-2,.77-2,4.37Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M760,195.11H790v.39c-8.84,0-9.52,3-9.52,6.8v56.25c0,3.79.68,6.31,9.52,6.31v.39H760v-.39c8.74,0,9.52-2.52,9.52-6.31V202.4c0-3.79-.68-6.8-9.52-6.8Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M851.44,210.56c0-6-.39-15.06-9.62-15.06v-.39h20.5v.39c-9.71,0-10.3,9-10.3,15.06v54.69h-3.3l-42.94-64.31h-.39v48.57c0,6.22,1.36,15.35,9.72,15.35v.39h-20.5v-.39c9.71,0,10.3-9.13,10.3-15.35V202.69c0-4.76-2.53-7.09-10.3-7.19v-.39h20.5l36.33,54.7Z"
                        />
                        <path
                          className="cls-1"
                          // tslint:disable-next-line:max-line-length
                          d="M916.71,198.32c1.85,0,3.21-1.55,3.7-4.37h.48c.68,8.94,1.46,18,2.24,26.91h-.49c-4-19.14-15-26.33-22.73-26.33-12.73,0-21.08,12.44-21.08,36,0,22.64,9.33,35.17,21.86,35.17,7.67,0,13.79-6.22,13.79-10.88V239.61c0-4.76-.87-5.93-9.71-5.93v-.39h28.46v.39c-6.9,0-7.77,1.17-7.77,5.93V266.9h-.39c-1.56-5.15-2.92-8.16-5.05-8.16-3.5,0-8.16,8-20.79,8-19.62,0-31.86-15-31.86-34.88,0-19.33,10.49-38,31.47-38C906.71,193.85,913,198.32,916.71,198.32Z"
                        />
                        <path
                          className="cls-2"
                          // tslint:disable-next-line:max-line-length
                          d="M109.69,226a67.24,67.24,0,0,1,110.39-51V124q0-56,0-112c0-9.06-2.67-11.75-11.69-11.75-33,0-66,.08-99.06-.1-4.37,0-5.76.76-5.72,5.52.25,34.23,0,68.46.24,102.69,0,4.2-1.23,5.07-5.19,5.05-31.29-.16-62.59,0-93.88-.19C.85,113.16,0,114.2,0,118,.15,158,.08,197.9.1,237.84c0,7.67,2.92,10.56,10.69,10.6,9,.06,18-.23,27,.12l75.64,0A68.22,68.22,0,0,1,109.69,226ZM192.91,89.89c.33,2.65.8,5.42-3.79,5.25-9.31-.33-18.65-.1-28-.1-8.29,0-16.58.08-24.87,0s-7.11,1.5-7.39-7.38c-.09-3,.56-4.27,3.94-4.25,18.82.15,37.64.19,56.46,0C195.06,83.35,192.6,87.37,192.91,89.89Zm.17-28.07c-.05,3.83,0,6.17-5.28,6-17.09-.43-34.21-.16-51.31-.16-7.78,0-7.56,0-7.65-7.67,0-3.48,1.35-3.91,4.26-3.86,9.33.15,18.66.05,28,.05,9,0,18,.34,26.94-.13C193,55.83,193.13,58,193.08,61.82ZM129,34.45c-.37-2.71-.71-5.38,3.85-5.21,9.31.34,18.64.1,28,.1h24.34c8.12,0,8,0,7.88,7.94,0,2.61-.62,3.64-3.44,3.62-19-.11-38-.17-57,0C126.85,41,129.34,37,129,34.45Z"
                        />
                        <path
                          className="cls-2"
                          // tslint:disable-next-line:max-line-length
                          d="M228.5,226.34c-.06,30.43-23.88,54.12-54.32,54a54.05,54.05,0,1,1,54.32-54Zm-54.18,21.39a21.09,21.09,0,0,0,21.45-21.27,21.37,21.37,0,0,0-21.26-21.57,21.77,21.77,0,0,0-21.85,21.64A21.47,21.47,0,0,0,174.32,247.73Z"
                        />
                        <path
                          className="cls-2"
                          // tslint:disable-next-line:max-line-length
                          d="M.84,101.36c1.41,1.2,2.68.84,3.84.84q41.73,0,83.44,0c2.35,0,4.25.24,4.23-3.31C92.23,66.47,92.28,34,92.28,0Z"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 info-right ">
              <div className="center_header">+7 777 808 88 22</div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 info-right ">
              <div className="center_header">
                <button className="order-call-button">Заказать звонок</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 info-right ">
              <div className="center_header">Войти | Зарегистрироваться</div>
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
