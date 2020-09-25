import React from 'react';

import { Card } from './styles';

interface Props {
  onClick?: () => any;
}

const WidgetCard: React.FC<Props> = ({ onClick, children }) => {
  return <Card onClick={onClick}>{children}</Card>;
};

export default WidgetCard;
