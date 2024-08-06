import './App.css';
import { ThemeProvider } from '@mui/system';
import { Dark } from './Theme/Dark';
import { CssBaseline } from '@mui/material';
import CustomerRoutes from './Routers/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Authentication/Action';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  useEffect(() => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
    }
  }, [auth.user]);
  return (
    <ThemeProvider theme={Dark}>
      <CssBaseline />
      <CustomerRoutes />
    </ThemeProvider>
  )
}

export default App;
