import { Typography, Grid, TextField, Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const initialValues = { email: '', password: '' };
  const handleSubmit = () => { };
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant='h5' className='text-center'>Login</Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className='pt-5'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field as={TextField}
                name="Email-id"
                label="Email-id"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField}
                name="Password"
                label="Password"
                fullWidth
                variant="outlined"
              />
            </Grid>
            </Grid>
            <Button fullWidth type='submit' variant='contained' sx={{mt:2, padding:"1rem"}}>
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
  );
};

export default Login;