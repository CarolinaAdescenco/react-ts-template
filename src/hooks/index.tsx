import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { CalendarProvider } from './calendar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
    <CalendarProvider>{children}</CalendarProvider>
  </AuthProvider>
);

export default AppProvider;
