import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider';
import './style.css'
import ErrorBoundary from './components/errorBoundary';
import { AddTodoForm } from './components/AddTodoForm';
import Header from './components/Head';
import { TodoList } from './components/TodoList';
import Modal from './components/Modal';
import ModalView from './components/ModalView';
import ViewPage from './components/ViewPage';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ToDoPage from "./components/ToDoPage";
import Group4 from "./components/Group4";
import AboutPage from "./components/AboutPage";
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div>
     
    <BrowserRouter>
    <Navbar />
    <button onClick={toggleTheme}>
        Bytt till {theme === "ljust" ? "mörkt" : "ljust"} läge
      </button>
        <div className="container">
            <Switch>
                <Route component={ToDoPage} path="/" exact/>
                <Route component={Group4} path="/Group4" />
                <Route component={AboutPage} path="/AboutPage" />
                <Redirect to ="/"/>
            </Switch>
        </div>
    </BrowserRouter>
    </div >
  );
}

export default App;

