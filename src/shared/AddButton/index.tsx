import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

interface ButtonProps {
  to: string;
}

const WidgetAddButton: React.FC<ButtonProps> = ({ to }) => {
  return (
    <Link to={to}>
      <Button>
        <FiPlus /> Adicionar
      </Button>
    </Link>
  );
};

export default WidgetAddButton;
