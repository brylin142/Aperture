import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import NavbarContainer from '../components/navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/' component={SplashContainer} />
    </Switch>
    
  </div>
);

export default App;
