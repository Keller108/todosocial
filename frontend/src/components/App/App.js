import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from'../Register/Register';
import Login from '../Login/Login';

function App() {
    return (
        <div className="app">
          <div className="page">
            <Switch>
              <Route exact path="/">
                  <Header />
                  <Main />
                  <Footer />
              </Route>
              <Route exact path="/signup">
                <Register />
              </Route>
              <Route exact path="/signin">
                <Login />
              </Route>
            </Switch>  
          </div>
        </div>  
    )
}

export default App;