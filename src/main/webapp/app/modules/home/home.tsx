import './home.scss';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';
import ModalPermitDocs from './components/modal/modal';
import { jsx } from '@emotion/react';
// import Button from 'app/components/button/button';

export const Home = () => {
  // const account = useAppSelector(state => state.authentication.account);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [list, setList] = React.useState('' as any);
  const [image, setImage] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();

  const handleCalc = () => {
    history.push('/calculator');
  };

  return (
    <>
      <ModalPermitDocs open={open} handleClose={handleClose} title={title} description={description} image={image} list={list} />
      <section className="main-section-home">
        <div className="container">
          <div className="row">
            <div className="col app-main-text">
              <text>TRANS CONSULTING</text>
            </div>
          </div>
          <div className="row">
            <div className="app-main-secondary-text">Ваш эксперт в автомобильных &#10;перевозках!</div>
          </div>
          <div className="row justify-content-center first-sections-block">
            <div className="row justify-content-center col-sm-12 col-md-12 col-lg-7 col-xl-6 mb-md-3 mb-sm-3">
              <div className="row left-box">
                <div className="row">
                  <div className="col-sm-7">
                    <text className="first-section-left-block-text">Получить стоимость спец разрешения</text>
                  </div>
                </div>
                <div className="row first-section-left-block-second-text ">
                  <text>
                    Рассчитайте стоимость спецразрешения за перевозку негабаритного или тяжеловесного груза и подберите автомобиль под ваш
                    груз в нашем калькуляторе?
                  </text>
                </div>
                <div className="row calculate-button-row align-items-end">
                  <button onClick={handleCalc} className="calculate-button">
                    Перейти к расчету
                  </button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center col-sm-12 col-md-12 col-lg-7 col-xl-6 mb-md-3 mb-sm-3">
              <div className="row right-box">
                <div className="row">
                  <div className="col-sm-7">
                    <text className="first-section-left-block-text">КОНСТРУКТОР ДОКУМЕНТОВ</text>
                  </div>
                </div>
                <div className="row first-section-left-block-second-text ">
                  <text>
                    Наш конструктор документов предназначен для составления следующих документов: Договор автомобильной перевозки,
                    Товарно-транспортная накладная (ТТН), международная товарно-транспортная накладная (CMR), Путевой лист.
                  </text>
                </div>
                <div className="row calculate-button-row align-items-end">
                  <button className="calculate-button">Перейти к расчету</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="consult-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="consult-text">КОНСАЛТИНГОВЫЕ УСЛУГИ</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="consult-text">Юридическая и специализированная консультация в сфере автомобильных перевозок.</div>
            </div>
          </div>
          <div className="row justify-content-between consult-box">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-lg-3 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Предрейсовая проверка</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        handleOpen();
                        setTitle('Предрейсовая проверка');
                        setDescription(
                          'Данная услуга подразумевает проверку на соответствие требований законодательства в области автомобильного транспорта и документов на перевозимый груз, а также корректность их заполнения перед осуществлением перевозки. Исходя из типа груза и его параметров определяются перечень необходимых документов. За отсутствие установленных документов предусмотрен административный штраф и уплата дорожного сбора. Специалисты нашей компании проверят наличие необходимых документов и помогут произвести предрейсовую проверку, тем самым исключив непредусмотренные расходы и риски совершения нарушений.'
                        );
                        setList('');
                        setImage('../../../../../content/images/Frame6.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-lg-3 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Консультация по НПА</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        handleOpen();
                        setTitle('Консультация по Законам об автомобильном транспорте');
                        setDescription(
                          'Для перевозчиков и грузоотправителей действующими нормативно-правовыми актами в сфере автомобильного транспорта предусмотрены требования и обязательства, которые из-за юридических терминологий трудно воспринимаются и в результате не исполняются. Это приводит к нарушениям и большим затратам. Мы поможем Вам растолковать требования законов и избежать их нарушения, тем самым повысить юридическую грамотность и сохранить капитал.'
                        );
                        setList('');
                        setImage('../../../../../content/images/Frame7.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-lg-3 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Консультация по ОГ</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        handleOpen();
                        setTitle('Консультация по перевозке ОГ');
                        setDescription(
                          'Каждое предприятие, деятельность которого включает автомобильную перевозку опасных грузов или связанные с ней операции по упаковке, погрузке, наполнению или разгрузке, обязан иметь одного или нескольких консультантов по вопросам безопасности перевозки опасных грузов. Наша компания может предоставить консультанта и профессионально выполнять возникающие вопросы по перевозке ОГ.'
                        );
                        setList('');
                        setImage('../../../../../content/images/Frame8.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-lg-3 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Расчет суммы сбора</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        handleOpen();
                        setTitle('Расчет суммы сбора');
                        setDescription(
                          'Формирование стоимости перевозки негабаритных и тяжеловесных грузов напрямую зависит от суммы сбора за проезд (дорожный сбор). Перевозчики не могут получить стоимость суммы сбора до подачи заявки на получение спец разрешения и получения ответа от гос. органов, что занимает определенный период времени. Наш специалист рассчитает стоимости спецразрешения за 5 минут.'
                        );
                        setList('');
                        setImage('../../../../../content/images/Frame9.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around consult-box">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Подбор автомобиля и правильное размещение груза</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        handleOpen();
                        setTitle('Подбор транспорта и правильное размещение груза');
                        setDescription(
                          'Перевозки крупногабаритных и тяжеловесных грузов по своей технической характеристике часто являются сложными и дорогостоящими и несет опасность при погрузке и транспортировке. Для правильной организации перевозки данных грузов важно произвести корректный подбор транспорта и правильное размещения груза на транспорте. Данная работа поможет исключить опасность при перевозке и повлияет на снижение суммы сбора. Наши специалисты сделают проект подбора транспорта и размещения груза и предоставят в виде чертежа-документа.'
                        );
                        setList('');
                        setImage('../../../../../content/images/Frame10.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Консультация по тахографу</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        const listVar = (
                          <ol>
                            <li>Выпуск карточки тахографа водителей и предприятии;</li>
                            <li>Подготовка и обучение водителей по соблюдение режима труда и отдыха;</li>
                            <li>Расшифровка активностей и рабочих смен;</li>
                            <li>Поиск нарушений по соблюдению режима труда и отдыха.</li>
                          </ol>
                        );
                        handleOpen();
                        setTitle('Консультация по тахографу');
                        setDescription(
                          'Автотранспортные средства, задействованные в перевозках пассажиров и багажа, опасных грузов, а также в международных перевозках грузов должны быть оборудованы «тахографами», а водители данных автотранспортных средств обязаны соблюдать режим труда и отдыха согласно ЕСТР. За нарушение норм ЕСТР и национальных правил предусмотрено административная ответственность водителей и перевозчиков. Наши специалисты осуществляют консультацию в сфере соблюдения режима труда и отдыха водителей, а также производит считывание, расшифровку и анализ данных с карт водителей и тахографов. '
                        );
                        setList(listVar);
                        setImage('../../../../../content/images/Frame11.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-md-3 mb-sm-3">
              <div className="pred-reisovaya-proverka">
                <div className="cover-car-main-title">Оформление перевозочных документов</div>
                <div className="detailed-consult-link">
                  <div className="col-sm-6">
                    <Button
                      className="detailed-consult-button"
                      onClick={() => {
                        const listVar = (
                          <ol>
                            <li>Пакет - </li>
                          </ol>
                        );
                        handleOpen();
                        setTitle('Оформление перевозочных документов');
                        setDescription(
                          'Каждая перевозка оформляется перевозочными документами (ТТН, CMR, путевой лист) и договором автомобильной перевозки между грузоотправителем и перевозчиком. Перевозка без оформления данных документов приводит к административному штрафом и риску не выполнения обязательств сторонами. Наши специалисты подготовят пакет перевозочных документов для каждого вида перевозки в кротчайшие сроки.Для удобства и экономии предлагаем подготовку документов в виде пакетов:'
                        );
                        setList(listVar);
                        setImage('../../../../../content/images/Frame12.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="permit-docs-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="permit-docs-title">Разрешительные документы</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="permit-docs-text">Поможем легко и быстро получить государственные услуги.</div>
            </div>
          </div>
          <div className="row justify-content-between consult-box">
            <div className="row col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3 ">
              <div className="permit-docs-box">
                <div className="permit-docs-first-box-text">
                  Получение специального разрешения на перевозку тяжеловесных и крупногабаритных грузов
                </div>
                <div className="row justify-content-start align-items-end">
                  <div className="col-sm-6">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setTitle('Получение специального разрешения на перевозку тяжеловесных и крупногабаритных грузов');
                        setDescription(
                          'В случаях, когда перевозимый груз является крупногабаритным или тяжеловесным необходимо получение специального разрешения. Получение специального разрешение выдается посредством электронного портала государственных услуг с использованием ЭЦП. Получение специального разрешения состоит из многочисленных операции и последовательных шагов. Не правильное выполнение данных процессов приводит к отказу в выдаче специального разрешения. Наш специалист получит специальное разрешения без вашего ЭЦП.'
                        );
                        setImage('../../../../../content/images/Frame-140.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3 ">
              <div className="permit-docs-box">
                <div className="row permit-docs-first-box-text">Получение специального разрешения на перевозку опасных грузов</div>
                <div className="row justify-content-start align-items-end">
                  <div className="col-sm-6">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setTitle('Получение специального разрешения на перевозку опасных грузов');
                        setDescription(
                          'Для перевозок грузов повышенной опасности необходимо наличие специального разрешения. Получение специального разрешение выдается посредством электронного портала государственных услуг с использованием ЭЦП. Получение специального разрешения состоит из многочисленных операции и последовательных шагов. Не правильное выполнение данных процессов приводит к отказу в выдаче специального разрешения. Наш специалист получит специальное разрешения без вашего ЭЦП.'
                        );
                        setImage('../../../../../content/images/Frame2.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-md-3 mb-sm-3 ">
              <div className="permit-docs-box">
                <div className="row permit-docs-first-box-text">
                  Получение удостоверения допуска к осуществлению международных автомобильных перевозок и карточки допуска
                </div>
                <div className="row justify-content-start align-items-end">
                  <div className="col-sm-6">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setTitle(
                          'Получение удостоверения допуска к осуществлению международных автомобильных перевозок и карточки допуска'
                        );
                        setDescription(
                          'Наличие удостоверения и карточки допуска является одним из условии для выполнения международных грузоперевозок. Получение специального разрешение выдается посредством электронного портала государственных услуг с использованием ЭЦП. Получение специального разрешения состоит из многочисленных операции и последовательных шагов. Не правильное выполнение данных процессов приводит к отказу в выдаче специального разрешения. Наш специалист получит удостоверение и карточку допуска в кратчайщие сроки.'
                        );
                        setImage('../../../../../content/images/Frame3.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around ">
            <div className="row col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3 ">
              <div className="permit-docs-box">
                <div className="row permit-docs-first-box-text">
                  Получение иностранного бланка разрешения (дозвол) и заполнение отечественного бланка разрешения
                </div>
                <div className="row justify-content-start align-items-end">
                  <div className="col-sm-6">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setTitle('Получение иностранного бланка разрешения (дозвол) и заполнение отечественного бланка разрешения');
                        setDescription(
                          'Международными договорами предусмотрено получение разрешительных документов по территории иностранного государства. Данными договорами предусмотрено корректное заполнение иностранного бланка разрешении. За отсутствие и не заполнение разрешении предусмотрено административная ответственность. Наши специалисты помогут получить и корректно заполнить данные документы.'
                        );
                        setImage('../../../../../content/images/Frame4.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-md-3 mb-sm-3 ">
              <div className="permit-docs-box">
                <div className="row permit-docs-first-box-text">
                  Получение свидетельство о допущении транспортного средства к перевозке опасных грузов в международном сообщении
                </div>
                <div className="row justify-content-start align-items-end">
                  <div className="col-sm-6">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setTitle(
                          'Получение свидетельство о допущении транспортного средства к перевозке опасных грузов в международном сообщении'
                        );
                        setDescription(
                          'Согласно требованиям ДОПОГ одним из условий осуществления международных перевозок опасных грузов является получение свидетельства о допущении ТС. Наши специалисты помогут получить свидетельство ДОПОГ на ТС в кратчайщие сроки.'
                        );
                        setImage('../../../../../content/images/Frame5.png');
                      }}
                      variant="text"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-services-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="project-services-title">ПРОЕКТНЫЕ УСЛУГИ</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="project-services-text">Комплексные услуги для перевозчиков по решению проектных задач.</div>
            </div>
          </div>
          <div className="row justify-content-between mt-5 ">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Автомобиль прикрытия</div>
                <div className="row cover-car-main-description">
                  При перевозке негабаритных и тяжеловесных, а также опасных грузов необходимо сопровождение автомобилем прикрытия в целях
                  обеспечения безопасной перевозки.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/cover-car'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Взвешивание автомобиля и сопровождение погрузки с выездом</div>
                <div className="row cover-car-main-description">
                  Проверка весовых параметров вашего ТС после погрузки посредством взвешивания каждой оси на мобильных весах.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/weighing-car'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Обследование маршрута перевозки</div>
                <div className="row cover-car-main-description">
                  При перевозке негабаритных и тяжеловесных грузов необходимо проводить предварительное обследование маршрута на возможность
                  проезда и наличие препятствии по маршруту.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/route-survey'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Полное сопровождение при перевозке опасных грузов</div>
                <div className="row cover-car-main-description">
                  Перевозка опасных грузов является одним сложных видов перевозки, который требует особой подготовки как водителя, так и
                  самого транспортного средства.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/full-support'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between ">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Профилактика и анализ деятельности компании</div>
                <div className="row cover-car-main-description">
                  Профилактика и анализ деятельности предприятий в области автомобильного транспорта это комплекс мероприятий направленных
                  на предупреждение правонарушений и устранение факторов их совершения.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/prevention-analysis'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Защита интересов в гос.органах</div>
                <div className="row cover-car-main-description">
                  Проверка весовых параметров вашего ТС после погрузки посредством взвешивания каждой оси на мобильных весах.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/protection-interests'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Тахограф</div>
                <div className="row cover-car-main-description">
                  При перевозке негабаритных и тяжеловесных грузов необходимо проводить предварительное обследование маршрута на возможность
                  проезда и наличие препятствии по маршруту.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/tahograf'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-md-3 mb-sm-3 ">
              <div className="project-services-box">
                <div className="row cover-car-main-title">Сопровождение при открытии центра технического осмотра</div>
                <div className="row cover-car-main-description">
                  Перевозка опасных грузов является одним сложных видов перевозки, который требует особой подготовки как водителя, так и
                  самого транспортного средства.
                </div>
                <div className="row align-items-end">
                  <Link className="cover-car-detailed" to={'/escort'}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
