import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FormControlLabel, FormGroup, Grid, Switch, TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const steps = [
  {
    label: 'Регистрация',
    description: `Контактные данные`,
  },
  {
    label: 'Заявка',
    description: '',
  },
  {
    label: 'Отправка',
    description: `Ознакомлен и согласен с публичным договором-офертой и с политикой в отношении обработки персональных данных`,
  },
];

export default function NewRequestStepper() {
  const [contactForm, setContactForm] = React.useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChangeContactForm = e => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Stepper activeStep={0} orientation="vertical">
        <Step>
          <StepLabel>Регистрация</StepLabel>
          <StepContent>
            <Typography>Контактные данные</Typography>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField fullWidth id="last-name" label="Фамилия" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth id="first-name" label="Имя" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth id="parent-name" label="Отчество" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="password" label="Пароль" type={'password'} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="phone" label="Телефон" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Ознакомлен и согласен с публичным договором-офертой и с политикой в отношении обработки персональных данных"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12}>
                  <Button>Зарегистрироваться</Button>
                  <Button>Войти</Button>
                </Grid>
              </Grid>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Заявка</StepLabel>
          <StepContent>
            <Typography>
              Рекомендуем указать в тексте обращения адрес описанного вами места действия, факта или события. Ответ по сути обращения не
              даётся в случае, если в обращении отсутствует текст, даны только ссылки на прилагаемые файлы или адреса интернет-сайтов.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField fullWidth id="last-name" label="Фамилия" variant="outlined" />
                </Grid>
              </Grid>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
