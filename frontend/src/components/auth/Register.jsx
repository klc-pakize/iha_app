import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { blue } from "@mui/material/colors";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form } from "formik";

const theme = createTheme();

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is mandatory"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

export default function Register({
  handleToggle,
  handleVisible,
  visible,
  register,
  navigate,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            sx={{ mt: 3 }}
            initialValues={{
              username: "",
              email: "",
              phone: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              actions.setSubmitting(false);
              register({ ...values, password2: values.password }, navigate);
              console.log(values);
            }}
          >
            {({ values, handleChange, errors, touched, handleBlur }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      color="success"
                      fullWidth
                      id="username"
                      label="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      color="success"
                      id="email"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helpertext={touched.email && errors.email}
                      error={touched.email && Boolean(errors.email)}
                      autoComplete="email"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      color="success"
                      id="phone"
                      label="Phoe"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helpertext={touched.phone && errors.phone}
                      error={touched.email && Boolean(errors.phone)}
                      autoComplete="phone"
                    />
                    <ErrorMessage
                      component="span"
                      name="phone"
                      className="form-error"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      color="success"
                      name="password"
                      label="Password"
                      type={visible ? "text" : "password"}
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helpertext={touched.password && errors.password}
                      error={touched.password && Boolean(errors.password)}
                      autoComplete="new-password"
                      InputProps={{
                        endAdornment: visible ? (
                          <VisibilityOffIcon
                            sx={{
                              color: "#0089ff",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={handleVisible}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{
                              color: "#0089ff",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={handleVisible}
                          />
                        ),
                      }}
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                      style={{ color: "red" }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: blue[200],
                    "&:hover": { bgcolor: blue[500] },
                  }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Typography onClick={handleToggle} variant="body2">
                      Already have an account?
                      <span style={{ color: "red", cursor: "pointer" }}>
                        Sign in
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
