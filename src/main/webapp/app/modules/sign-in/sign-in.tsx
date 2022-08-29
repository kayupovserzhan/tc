import { Box, Button, TextField, Typography } from '@mui/material';
import { useSomeGetQuery } from 'app/services/authApi';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  const { data, error, isLoading } = useSomeGetQuery('');
  console.log(data);
  const history = useHistory();

  function handleClick() {
    history.push('/sign-up');
  }

  function handleAuth() {}

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
                <TextField sx={{ marginBottom: 2 }} fullWidth id="outlined-basic" label="Логин" variant="outlined" />
                <TextField type={'password'} sx={{ marginBottom: 2 }} fullWidth id="outlined-basic" label="Пароль" variant="outlined" />
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
                {/* <Button onClick={handleClick} variant="outlined">
                  Регистрация
                </Button> */}
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
