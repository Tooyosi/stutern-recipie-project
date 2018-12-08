import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import SinglePage from './components/SinglePage';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  img{
    width: 100%;
  }
`;

const  Routes = () => {
<Router>
  <Fragment>
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/single' component={SinglePage}></Route>
    </Switch>
  </Fragment>
</Router>
};

export default Routes;