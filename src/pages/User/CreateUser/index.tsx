import React from 'react';

import Layout from '../../../shared/layout';
import Page404 from '../../../components/404';
import CreateUserAdmin from '../../../profiles/admin/CreateUser';

import { useAuth } from '../../../hooks/auth';

const CreateUser: React.FC = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    if (user.profile === 'administrator') {
      return <CreateUserAdmin />;
    }
    return <Page404 />;
  };

  return <Layout>{renderDashboard()}</Layout>;
};

export default CreateUser;
