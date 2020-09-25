import React, { ButtonHTMLAttributes } from 'react';

import Load from '../../shared/Load';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  onClick?: () => any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading,
  ...rest
}) => (
  <Container onClick={onClick} type="button" {...rest}>
    {loading ? <Load /> : children}
  </Container>
);

export default Button;
