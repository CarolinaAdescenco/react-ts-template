import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import RoutesCompany from '../pages/Company/Routes';

// Login
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';

// User
import Profile from '../pages/User/Profile';
import CreateUser from '../pages/User/CreateUser';

// Administrative tasks

import Dashboard from '../pages/Dashboard';
import CreateAppointment from '../pages/CreateAppointment';
import Providers from '../pages/Providers';

// Company
import CompanyPanel from '../pages/Company';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/create-appointment" component={CreateAppointment} isPrivate />
    <Route path="/providers" component={Providers} isPrivate />
    <Route path="/create-user" component={CreateUser} isPrivate />
    <RoutesCompany />

    {/* Company */}
    {/* <Route path="/company" component={CompanyPanel} isPrivate /> */}
  </Switch>
);

export default Routes;
