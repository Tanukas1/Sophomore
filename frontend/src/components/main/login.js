import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import app_config from "../../config";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const url = app_config.api_url;

  const navigate = useNavigate();

  const loginform = {
    email: '',
    password: ''
  }

  const formSubmit = (values) => {

    fetch(url + '/user/authenticate', {
      method : 'POST',
      body : JSON.stringify(values),
      headers : {
        'Content-Type' : 'application/json'
      } 
    })
      .then(res => {
        if(res.status === 200){
          Swal.fire({
            icon : 'success',
            title: 'LoggedIn!',
            text: 'Welcome Back'
          })
          res.json().then(data => {
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/user')
          })
        }else if(res.status === 400){
          Swal.fire({
            icon : 'error',
            title: 'Oops!',
            text: 'Something went wrong'
          })
        }
      })
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={loginform}
          onSubmit={formSubmit}
        >{({
          values,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleChange}
                value={values.email}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={handleChange}
                value={values.password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  Don't have an account?
                  <Link href="./signup" variant="body2">
                    Sign Up
                  </Link>

                </Grid>
              </Grid>

            {/* </Box> */}
          </form>

        )}
        </Formik>
      </Container>
    </ThemeProvider>
  );
}