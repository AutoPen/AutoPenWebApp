import React from 'react';
import HelloWorld from './HelloWorld';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './components/homepage';

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
    <><ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
      
      <div>
      <HelloWorld />
    </div></>
  );
}

export default App;


