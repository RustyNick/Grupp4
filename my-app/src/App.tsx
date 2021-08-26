import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider';
import './style.css'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ToDoPage from "./components/ToDoPage";
import Group4 from "./components/Group4";
import AboutPage from "./components/AboutPage";
import { Navbar } from './components/Navbar';
import { Button } from '@material-ui/core'
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div>

      <BrowserRouter>
        <Navbar />
        <div>
          <div className="container">
            <ErrorBoundary>
            <Button size="small" variant="contained" color="default" onClick={toggleTheme}>
               {theme === "light" ? "dark" : "light"} mode
            </Button>
            </ErrorBoundary>
          </div>
          <Switch>
              <Route component={ToDoPage} path="/" exact />
              <Route component={Group4} path="/Group4" />
              <Route component={AboutPage} path="/AboutPage" />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;

