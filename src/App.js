import './App.css';
import { ThemeProvider } from '@mui/system';
import { Dark } from './Theme/Dark';
import { CssBaseline } from '@mui/material';
import CustomerRoutes from './Routers/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Authentication/Action';
import { findCart } from './State/Cart/Cart_Action';
import Routers from './Routers/Routers';
import { getRestaurantByUserId } from './State/Restaurant/Restaurant_Action';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  useEffect(() => {
   
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(findCart(jwt));
    }
  }, [auth.jwt]);

  useEffect(() => {
    dispatch(getRestaurantByUserId(jwt));
  }, [auth.user]);

  return (
    <ThemeProvider theme={Dark}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  )
}

export default App;
