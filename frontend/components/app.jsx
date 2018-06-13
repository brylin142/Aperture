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
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import EditPhotoFormContainer from './photos/edit_photo_form_container';
import PhotoForm from './photos/create_photo_form_container';


const App = () => {
  return (
 <div className="app">    
    <Switch>
      
      <AuthRoute path='/login' component={NavbarContainer} />
      <AuthRoute path='/signup' component={NavbarContainer} />
      <Route path='/' component={NavbarContainer} />
    </Switch>
    <Switch>
      
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Route exact path='/' component={SplashContainer} />
    </Switch>

    <Switch>
      <Route path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
      <Route exact path="/photos/new" component={PhotoForm} />
      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      <Route path='/photos' component={PhotoIndexContainer} />
    </Switch>

    
  </div>
  );
};

export default App;
