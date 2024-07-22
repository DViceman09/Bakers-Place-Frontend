import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import { Dark } from './Theme/Dark';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={Dark}> 
    <CssBaseline/>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App;
