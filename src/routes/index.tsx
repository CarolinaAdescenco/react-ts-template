import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Routes';

// Login
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';

// Administrative tasks
import Dashboard from '../pages/Dashboard';
import CreateAppointment from '../pages/CreateAppointment';
import Providers from '../pages/Providers';

import CompanyPage from '../pages/Company/CompanyPage';
import CreateCompany from '../pages/Company/CreateCompany';

import UserPage from '../pages/User/UserPage';
import Profile from '../pages/User/Profile';
import CreateUser from '../pages/User/CreateUser';
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';

const Routes: React.FC = () => {
  const { user } = useAuth();
  const { addToast } = useToast();

  // const renderDefault = () => (
  //   <>
  //     <Redirect to="/" />
  //     {addToast({
  //       type: 'error',
  //       title: 'Acesso negado!',
  //       description: 'Você não tem permissão para acessar esta área',
  //     })}
  //   </>
  // );
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route
        path="/create-appointment"
        component={CreateAppointment}
        isPrivate
      />
      <Route path="/providers" component={Providers} isPrivate />

      <Route path="/companies" component={CompanyPage} isPrivate />
      <Route path="/create-company" component={CreateCompany} isPrivate />

      <Route path="/create-user" component={CreateUser} isPrivate />
      <Route path="/users" component={UserPage} isPrivate />
      <Route path="/update-profile" component={Profile} isPrivate />
    </Switch>
  );
};

export default Routes;
