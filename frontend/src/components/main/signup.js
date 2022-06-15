import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import app_config from "../../config";
import { Formik } from "formik";
import * as Yup from "yup";

const theme = createTheme();
const Signup = () => {
  const url = app_config.api_url;

  const signupform = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const formSubmit = (values) => {
    console.log(values);

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    // request on server and parse the json response
    fetch(url + "/user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Registered!",
            text: "Welcome! Now Login to Continue",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong",
          });
        }
      });
  };

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="signup">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Formik
            initialValues={signupform}
            onSubmit={formSubmit}
            validationSchema={SignupSchema}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      value={values.firstname}
                      name="firstname"
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      error={Boolean(errors.firstname)}
                      helperText={errors.firstname}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      value={values.lastname}
                      name="lastname"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      error={Boolean(errors.lastname)}
                      helperText={errors.lastname}
                      autoFocus
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      autoFocus
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      required
                      fullWidth
                      // name="password"
                      label="Password"
                      type="password"
                      id="password"
                      error={Boolean(errors.password)}
                      helperText={errors.password}
                      autoFocus
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Remember Password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    Already have an account?
                    <Link href="./login" variant="body2">
                      Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};
export default Signup;
