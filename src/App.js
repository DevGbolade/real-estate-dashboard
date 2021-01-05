import React, { useContext } from "react";
import Dashboard from './Containers/Dashboard';
import { ThemeProvider } from 'styled-components'
import {
BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './context/themeContext'

function App() {
 
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
        <GlobalStyles/>
        <Dashboard/>
        </Router>
      </ThemeProvider>
  );
}

export default App;
