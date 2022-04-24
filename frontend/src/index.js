import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import FrontPage from './FrontPage';
import Scheme from './Scheme';
import Contact from './Contact';
import './Login.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            <Route exact path='/Scheme' component={Scheme} />
            <Route exact path='/contact' component={Contact} />
            {/* <Route component={NotFound}/> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);