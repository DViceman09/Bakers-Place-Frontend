import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { Dark } from './Theme/Dark';
import { CssBaseline } from '@mui/material';
import Home from './Home/Home';


function App() {
  return (
    <ThemeProvider theme={Dark}> 
    <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App;
