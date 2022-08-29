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
import ModalPermitDocs from 'app/modules/home/components/modal/modal';
import { Link } from 'react-router-dom';

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
      id: 1,
      Name: 'Консалтинговые услуги',
      Sheets: [
        {
          id: 1,
          Title: 'Предрейсовая проверка',
          title: 'Предрейсовая проверка',
          description:
            'Данная услуга подразумевает проверку на соответствие требований законодательства в области автомобильного транспорта и документов на перевозимый груз, а также корректность их заполнения перед осуществлением перевозки. Исходя из типа груза и его параметров определяются перечень необходимых документов. За отсутствие установленных документов предусмотрен административный штраф и уплата дорожного сбора. Специалисты нашей компании проверят наличие необходимых документов и помогут произвести предрейсовую проверку, тем самым исключив непредусмотренные расходы и риски совершения нарушений.',
          image: '../../../../../content/images/Frame6.png',
        },
        {
          id: 2,
          Title: 'Консультация по Законам об автомобильном транспорте',
          title: 'Консультация по Законам об автомобильном транспорте',
          description:
            'Для перевозчиков и грузоотправителей действующими нормативно-правовыми актами в сфере автомобильного транспорта предусмотрены требования и обязательства, которые из-за юридических терминологий трудно воспринимаются и в результате не исполняются. Это приводит к нарушениям и большим затратам. Мы поможем Вам растолковать требования законов и избежать их нарушения, тем самым повысить юридическую грамотность и сохранить капитал.',
          image: '../../../../../content/images/Frame7.png',
        },
        {
          id: 3,
          Title: 'Консультация по ОГ',
          title: 'Консультация по перевозке ОГ',
          description:
            'Каждое предприятие, деятельность которого включает автомобильную перевозку опасных грузов или связанные с ней операции по упаковке, погрузке, наполнению или разгрузке, обязан иметь одного или нескольких консультантов по вопросам безопасности перевозки опасных грузов. Наша компания может предоставить консультанта и профессионально выполнять возникающие вопросы по перевозке ОГ.',
          image: '../../../../../content/images/Frame8.png',
        },
        {
          id: 4,
          Title: 'Расчет суммы сбора',
          title: 'Расчет суммы сбора',
          description:
            'Формирование стоимости перевозки негабаритных и тяжеловесных грузов напрямую зависит от суммы сбора за проезд (дорожный сбор). Перевозчики не могут получить стоимость суммы сбора до подачи заявки на получение спец разрешения и получения ответа от гос. органов, что занимает определенный период времени. Наш специалист рассчитает стоимости спецразрешения за 5 минут.',
          image: '../../../../../content/images/Frame9.png',
        },
        {
          id: 5,
          Title: 'Подбор автомобиля и правильное размещение груза',
          title: 'Подбор транспорта и правильное размещение груза',
          description:
            'Перевозки крупногабаритных и тяжеловесных грузов по своей технической характеристике часто являются сложными и дорогостоящими и несет опасность при погрузке и транспортировке. Для правильной организации перевозки данных грузов важно произвести корректный подбор транспорта и правильное размещения груза на транспорте. Данная работа поможет исключить опасность при перевозке и повлияет на снижение суммы сбора. Наши специалисты сделают проект подбора транспорта и размещения груза и предоставят в виде чертежа-документа.',
          image: '../../../../../content/images/Frame10.png',
        },
        {
          id: 6,
          Title: 'Консультация по тахографу',
          title: 'Консультация по тахографу',
          description:
            'Автотранспортные средства, задействованные в перевозках пассажиров и багажа, опасных грузов, а также в международных перевозках грузов должны быть оборудованы «тахографами», а водители данных автотранспортных средств обязаны соблюдать режим труда и отдыха согласно ЕСТР. За нарушение норм ЕСТР и национальных правил предусмотрено административная ответственность водителей и перевозчиков. Наши специалисты осуществляют консультацию в сфере соблюдения режима труда и отдыха водителей, а также производит считывание, расшифровку и анализ данных с карт водителей и тахографов. ',
          image: '../../../../../content/images/Frame11.png',
        },
        {
          id: 7,
          Title: 'Оформление перевозочных документов',
          title: 'Оформление перевозочных документов',
          description:
            'Каждая перевозка оформляется перевозочными документами (ТТН, CMR, путевой лист) и договором автомобильной перевозки между грузоотправителем и перевозчиком. Перевозка без оформления данных документов приводит к административному штрафом и риску не выполнения обязательств сторонами. Наши специалисты подготовят пакет перевозочных документов для каждого вида перевозки в кротчайшие сроки.Для удобства и экономии предлагаем подготовку документов в виде пакетов:',
          image: '../../../../../content/images/Frame12.png',
        },
      ],
    },
    {
      id: 2,
      Name: 'Проектные услуги',
      Sheets: [
        {
          id: 1,
          Title: 'Автомобиль прикрытия',
          url: '/cover-car',
        },
        {
          id: 2,
          Title: 'Взвешивание автомобиля и сопровождение погрузки с выездом',
          url: '/weighing-car',
        },
        {
          id: 3,
          Title: 'Обследование маршрута перевозки',
          url: '/route-survey',
        },
        {
          id: 4,
          Title: 'Полное сопровождение при перевозке опасных грузов',
          url: '/full-support',
        },
        {
          id: 5,
          Title: 'Профилактика и анализ деятельности компании',
          url: '/prevention-analysis',
        },
        {
          id: 6,
          Title: 'Защита интересов в гос.органах',
          url: '/protection-interests',
        },
        {
          id: 7,
          Title: 'Тахограф',
          url: '/tahograf',
        },

        {
          id: 8,
          Title: 'Сопровождение при открытии центра технического осмотра',
          url: '/escort',
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

  const [open, setOpen] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [listModal, setListModal] = React.useState('' as any);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClick = id => {
    setOpen({ ...open, [id]: !open[id] });
  };
  // console.log(open);
  // const [open, setOpen] = useState(false);

  // const onSetSidebarOpen = () => setOpen(true);
  // const onSetSidebarClose = () => setOpen(false);

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const list = () => {
    const docs = data.documents;
    return (
      <Box className='toolbar-box' sx={{ width: 350 }}>
        <Toolbar
          className="toolbar"
          style={{ background: '/content/images/highway-surrounded-by-hills-cloudy-sky.png' }}
          sx={{ justifyContent: 'center', background: '/content/images/highway-surrounded-by-hills-cloudy-sky.png' }}
        >
          <Typography variant="h6" noWrap component="div">
            <Link className="toolbar-title" to={'/'}>
              TransConsulting
            </Link>
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
          {docs.map(doc => {
            return (
              <CustomizedListItem
                handleClick={e => handleClick(e)}
                open={open}
                key={doc.id}
                doc={doc}
                handleOpen={handleOpen}
                handleClose={handleClose}
                setImage={setImage}
                setDescription={setDescription}
                setTitle={setTitle}
              />
            );
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
      <ModalPermitDocs open={openModal} handleClose={handleClose} title={title} description={description} image={image} list={list} />
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
      <ErrorBoundary>
        <Drawer anchor={'left'} open={openDrawer} onClose={() => toggle(false)}>
          {list()}
        </Drawer>
        <Header
          toggleDrawerProps={openProps => {
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

  const handleClick = sheet => {
    props.handleOpen();
    props.setTitle(sheet.title);
    props.setDescription(sheet.description);
    props.setImage(sheet.image);
  };

  return (
    <div>
      <ListItem button key={doc.id} onClick={() => props.handleClick(doc.id)}>
        <ListItemText primary={doc.Name} />
        {open[doc.id] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse key={doc.Sheets.id} in={props.open[doc.id]} timeout="auto" unmountOnExit>
        <List component="li" disablePadding key={doc.id}>
          {doc.Sheets.map(sheet => {
            if (sheet.url) {
              return (
                <Link className="sheet-link" key={sheet.id} to={sheet.url}>
                  <ListItem button key={sheet.id}>
                    <ListItemIcon>{/* <InsertDriveFileTwoToneIcon /> */}</ListItemIcon>
                    <ListItemText key={sheet.id} primary={sheet.Title} />
                  </ListItem>
                </Link>
              );
            }
            return (
              <ListItem button key={sheet.id}>
                <ListItemIcon>{/* <InsertDriveFileTwoToneIcon /> */}</ListItemIcon>
                <ListItemText key={sheet.id} primary={sheet.Title} onClick={() => handleClick(sheet)} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};
