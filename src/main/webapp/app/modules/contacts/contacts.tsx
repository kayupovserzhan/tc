import { Box, Button, TextField, FormHelperText, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contacts.scss';

import DG from '2gis-maps';

interface IInitialState {
  errorName: boolean;
  errorEmail: boolean;
  errorMessage: boolean;
  errorCaptcha: boolean;
  errorNameHelperText: string;
  errorEmailHelperText: string;
  errorMessageHelperText: string;
  errorCaptchaHelperText: string;
}

const InitialState: IInitialState = {
  errorName: false,
  errorEmail: false,
  errorMessage: false,
  errorNameHelperText: '',
  errorEmailHelperText: '',
  errorMessageHelperText: '',
  errorCaptcha: false,
  errorCaptchaHelperText: '',
};

const Contacts = () => {
  const [errorState, setErrorState] = useState(InitialState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');

  useEffect(() => {
    const map = DG.map('map', {
      center: [51.123012, 71.434037],
      zoom: 26,
    });
    DG.marker([51.123012, 71.434037]).addTo(map).bindPopup('ул. Сыганак, д.29, БЦ "Евроцентр", оф. 1012');
  }, []);

  const validate = () => {
    if (!name) {
      setErrorState({ ...errorState, errorName: true, errorNameHelperText: 'Пожалуйста введите Ваше имя!' });
      return false;
    }
    if (!email) {
      setErrorState({ ...errorState, errorEmail: true, errorEmailHelperText: 'Пожалуйста введите Ваше почту!' });
      return false;
    }
    if (!message) {
      setErrorState({ ...errorState, errorMessage: true, errorMessageHelperText: 'Пожалуйста введите сообщение!' });
      return false;
    }
    if (!captcha) {
      setErrorState({ ...errorState, errorCaptcha: true, errorCaptchaHelperText: 'Подтвердите что вы не "Робот"!' });
      return false;
    }
    return true;
  };

  const onChangeRecaptcha = value => {
    console.log(`captcha: ${value}`);
    setErrorState({ ...errorState, errorCaptcha: false, errorCaptchaHelperText: '' });
    setCaptcha(value);
  };

  const onHandle = e => {
    validate();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="map" className="map" />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <Divider />
        </div>

        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p className="feedback-text">Форма обратной связи</p>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  value={name}
                  onChange={e => {
                    setErrorState({ ...errorState, errorName: false, errorNameHelperText: '' });
                    setName((e.target as HTMLInputElement).value);
                  }}
                  fullWidth
                  required
                  id="standard-required"
                  label="Имя"
                  variant="outlined"
                  error={errorState.errorName}
                  helperText={errorState.errorNameHelperText}
                />
                <TextField
                  value={email}
                  onChange={e => {
                    setErrorState({ ...errorState, errorEmail: false, errorEmailHelperText: '' });
                    setEmail((e.target as HTMLInputElement).value);
                  }}
                  fullWidth
                  required
                  id="standard-required"
                  label="Почта"
                  variant="outlined"
                  error={errorState.errorEmail}
                  helperText={errorState.errorEmailHelperText}
                />
                <TextField
                  value={phone}
                  onChange={e => setPhone((e.target as HTMLInputElement).value)}
                  fullWidth
                  id="standard-required"
                  label="Телефон для обратной связи"
                  variant="outlined"
                />
                <TextField
                  value={message}
                  onChange={e => {
                    setErrorState({ ...errorState, errorMessage: false, errorMessageHelperText: '' });
                    setMessage((e.target as HTMLInputElement).value);
                  }}
                  required
                  fullWidth
                  id="standard-multiline-static"
                  label="Сообщение"
                  multiline
                  maxRows={10}
                  minRows={3}
                  variant="outlined"
                  error={errorState.errorMessage}
                  helperText={errorState.errorMessageHelperText}
                />
              </div>
              <div style={{ margin: '8px' }}>
                <ReCAPTCHA sitekey="6LdXPzEaAAAAAJDNN4VWMzN5eqewi8bvGREDsr6c" onChange={onChangeRecaptcha} />
                <FormHelperText error={errorState.errorCaptcha}>{errorState.errorCaptchaHelperText}</FormHelperText>
              </div>
              <div style={{ margin: '8px' }}>
                <Button variant="outlined" onClick={onHandle}>
                  Отправить
                </Button>
              </div>
            </Box>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <h2>Контактные данные:</h2>
            <p className="lead">ул. Сыганак, д.29, БЦ &quot;Евроцентр&quot;, оф. 1012</p>
            <p className="lead">Телефон: +7 777 808 88 22</p>
            <p className="lead">E-mail: info@transconsulting.kz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
