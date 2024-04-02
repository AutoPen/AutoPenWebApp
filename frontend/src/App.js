import React from 'react';
import Navbar from "./components/Navbar";
import HomePage from './pages/homepage';
import HelloWorld from './HelloWorld';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A1B9A', // Purple accent 6
    },
    // Add other shades of purple and black as needed
  },
});

function App() {
  return (
    <>


  

    <Router>
      <Navbar />
      <div >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          
        </Routes>
      </div>
    </Router>

    
  
      
      </>
  );
}

export default App;

/*
<div className="container mt-4"> //The the navbar was in this container

<ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>

      <div>
      <HelloWorld />
    </div>

      
*/


