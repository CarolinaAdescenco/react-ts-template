import React from 'react';

import DashboardRoot from '../../profiles/root/Dashboard';
import DashboardAdmin from '../../profiles/admin/Dashboard';
import DashboardStaff from '../../profiles/staff/Dashboard';

import Layout from '../../shared/layout/index';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user.profile) {
      case 'root':
        return <DashboardRoot />;
      case 'administrator':
        return <DashboardAdmin />;
      case 'staff':
        return <DashboardStaff />;
      default:
        break;
    }
  };

  return <>{renderDashboard()}</>;
};

export default Dashboard;
