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
import { AUTHORITIES } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import React, { useEffect } from 'react';
import { hasAnyAuthority } from '../auth/private-route';
import Header from './header/header';
import Sidebar from 'react-sidebar';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Toolbar, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import ErrorBoundary from '../error/error-boundary';

const menuChildList = [
  { name: 'Предрейсовая проверка', id: 1, parentId: 1 },
  { name: 'Консультация по НПА', id: 2, parentId: 1 },
  { name: 'Консультация по ОГ', id: 3, parentId: 1 },
  { name: 'Расчет суммы сбора', id: 4, parentId: 1 },
  { name: 'Подбор автомобиля и правильное размещение груза', id: 5, parentId: 1 },
  { name: 'Консультация по тахографу', id: 6, parentId: 1 },
  { name: 'Оформление перевозочных документов', id: 7, parentId: 1 },
];

const data = {
  documents: [
    {
      Id: 1,
      Name: 'Консалтинговые услуги',
      Sheets: [
        {
          Id: 1,
          Title: 'Предрейсовая проверка ',
        },
        {
          Id: 2,
          Title: 'Консультация по НПА',
        },
        {
          Id: 3,
          Title: 'Консультация по ОГ',
        },
        {
          Id: 4,
          Title: 'Расчет суммы сбора',
        },
        {
          Id: 5,
          Title: 'Подбор автомобиля и правильное размещение груза',
        },
        {
          Id: 6,
          Title: 'Консультация по тахографу',
        },
        {
          Id: 7,
          Title: 'Оформление перевозочных документов',
        },
      ],
    },
    {
      Id: 2,
      Name: 'Category 2',
      Sheets: [
        {
          Id: 1,
          Title: 'Title1 ',
        },
        {
          Id: 2,
          Title: 'Title 2',
        },
        {
          Id: 3,
          Title: 'Title 3',
        },
      ],
    },
  ],
};

const MainLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getSession());
    // dispatch(getProfile());
  }, []);

  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prevState => {
      console.log(prevState);
      return !open;
    });
  };
  // const [open, setOpen] = useState(false);

  // const onSetSidebarOpen = () => setOpen(true);
  // const onSetSidebarClose = () => setOpen(false);

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const list = () => {
    const docs = data.documents;
    return (
      <Box sx={{ width: 350 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            TransConsulting
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
          {docs.map(doc => {
            return <CustomizedListItem handleClick={handleClick} open={open} key={doc.Id} doc={doc} />;
          })}
        </List>
      </Box>
    );
  };

  const toggle = (openToggle: boolean) => {
    setOpenDrawer(openToggle);
  };

  return (
    <>
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
      <ErrorBoundary>
        <Drawer anchor={'left'} open={openDrawer} onClose={() => toggle(false)}>
          {list()}
        </Drawer>
        <Header
          toggleDrawerProps={openProps => {
            console.log(openProps);
            toggle(openProps);
            // toggleDrawer(openProps);
          }}
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          ribbonEnv={ribbonEnv}
          isInProduction={isInProduction}
          isOpenAPIEnabled={isOpenAPIEnabled}
        />
      </ErrorBoundary>
    </>
  );
};

export default MainLayout;

const CustomizedListItem = (props: any) => {
  const { doc } = props;
  return (
    <div>
      <ListItem button key={doc.Id} onClick={props.handleClick}>
        <ListItemText primary={doc.Name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse key={doc.Sheets.Id} in={doc.Id === 1 ? props.open : false} timeout="auto" unmountOnExit>
        <List component="li" disablePadding key={doc.Id}>
          {doc.Sheets.map(sheet => {
            return (
              <ListItem button key={sheet.Id}>
                <ListItemIcon>{/* <InsertDriveFileTwoToneIcon /> */}</ListItemIcon>
                <ListItemText key={sheet.Id} primary={sheet.Title} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};
