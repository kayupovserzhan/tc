import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect, useState } from 'react';
import { Card } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Drawer from '@mui/material/Drawer';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import Header from 'app/shared/layout/header/header';
import Footer from 'app/shared/layout/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';
import Sidebar from 'react-sidebar';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Toolbar, Typography } from '@mui/material';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

const menuList = [
  { name: 'Консалтинговые услуги', id: 1 },
  { name: 'Разрешительные документы', id: 2 },
  { name: 'Проектные услуги', id: 3 },
];



export const App = () => {
  

  return (
    <Router basename={baseHref}>
      <div className="app-container">
        
        <div id="app-view-container">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
          <Footer />
        </div>
      </div>
    </Router>
  );
};



export default App;
