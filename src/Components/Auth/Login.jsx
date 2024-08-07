import { Typography, TextField, Button, CssBaseline, Container } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";


const initialValues = { email: '', password: '' };

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(loginUser({ data: values, navigate }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div>
        <Typography className="text-center" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              id="email"
              autoComplete="email"
            />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, padding: "1rem" }}
            >
              Login
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Button onClick={() => navigate("/account/register")}>
            Register
          </Button>
        </Typography>
      </div>
    </Container>
  );
};

export default Login;