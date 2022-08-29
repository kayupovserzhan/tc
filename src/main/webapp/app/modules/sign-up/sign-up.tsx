import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InitialState = {};

const SignUp = () => {
  const [formValue, setFormValue] = useState(InitialState);

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  console.log(formValue);
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
                  Регистрация
                </Typography>
                <TextField
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Логин"
                  name="login"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="firstName"
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Имя"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="lastName"
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Фамилия"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="email"
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Почта"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Button variant="outlined">Регистрироваться</Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>
                    Есть аккаунт? <Link to={'/sign-in'}>Авторизуйтесь</Link>
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

export default SignUp;
