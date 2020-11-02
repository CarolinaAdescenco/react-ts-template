import React from 'react';

import { Sidebar } from './styles';

const WidgetSidebar: React.FC = ({ children }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default WidgetSidebar;
