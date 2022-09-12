import { Email } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useLoginUserMutation, useSomeGetQuery } from 'app/services/authApi';
import { fromPairs } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IinitialState {
  login: string;
  password: string;
}

const initialState: IinitialState = {
  login: '',
  password: '',
};

const SignIn = () => {
  const [formValue, setFormValue] = useState(initialState);

  const [loginUser, { data: loginData, isSuccess: isLoginSuccess, error, isError }] = useLoginUserMutation({});

  const history = useHistory();

  function handleClick() {
    history.push('/sign-up');
  }

  const handleAuth = () => {
    console.log(formValue.login);
    console.log(formValue.password);
    if (formValue.login && formValue.password) {
      loginUser({ login: formValue.login, password: formValue.password });
    } else {
      toast.error('Заполните все поля');
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('Вы успешно авторизовались');
    }
    if (isError) {
      toast.error('Ошибка при авторизации');
    }
  }, [isLoginSuccess, isError]);

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 800,
                  p: 2,
                }}
              >
                <Typography sx={{ marginBottom: 5 }} variant="h4">
                  Авторизация
                </Typography>
                <TextField
                  onChange={handleChange}
                  value={formValue.login}
                  name="login"
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-login"
                  label="Логин"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={formValue.password}
                  name="password"
                  type={'password'}
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-pass"
                  label="Пароль"
                  variant="outlined"
                />
                <Button onClick={handleAuth} sx={{ marginRight: 2 }} variant="outlined">
                  Войти
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>
                    Нет аккаунта? <Link to={'/sign-up'}>Зарегистрируйтесь</Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
