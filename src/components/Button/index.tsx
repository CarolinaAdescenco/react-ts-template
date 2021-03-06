import React, { ButtonHTMLAttributes } from 'react';

import Load from '../Load';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Load /> : children}
  </Container>
);

export default Button;
