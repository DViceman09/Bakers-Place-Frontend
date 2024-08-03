import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { Dark } from './Theme/Dark';
import { CssBaseline } from '@mui/material';
import Home from './Home/Home';
import RestaurantCard from './Restaurant/RestaurantCard';
import RestaurantDetails from './Restaurant/RestaurantDetails';
import Cart from './Cart/Cart';
import Profile from './Profile/Profile';
import CustomerRoutes from './Routers/CustomerRoutes';


function App() {
  return (
    <ThemeProvider theme={Dark}> 
    <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/>*/}
      <CustomerRoutes/>
    </ThemeProvider>
  )
}

export default App;
