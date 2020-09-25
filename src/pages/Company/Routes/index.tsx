import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';

import Route from '../../../routes/Routes';

import CompanyPage from '../CompanyPage';
import CreateCompany from '../CreateCompany';

const RoutesCompany: React.FC = () => {
  const { user } = useAuth();

  const renderRoutes = () => {
    if (user.profile === 'root') {
      return (
        <Switch>
          <Route path="/companies" component={CompanyPage} isPrivate />
          <Route path="/create-company" component={CreateCompany} isPrivate />
        </Switch>
      );
    }
    return (
      <>
        <h1>Acesso negado!</h1>
        <Link to="/dashboard">Voltar</Link>
      </>
    );
  };

  return <>{renderRoutes()}</>;
};

export default RoutesCompany;
