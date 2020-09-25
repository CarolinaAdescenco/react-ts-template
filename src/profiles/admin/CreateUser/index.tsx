import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock, FiUser, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import { roles } from '../../../utils/data/roles.json';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  profile: string;
}

const CreateUserAdmin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          profile: Yup.string().required('Selecione o perfil'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no GoBarber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>Criar novo usuário</h1>

      <Input name="name" icon={FiUser} placeholder="Nome" />
      <Input name="email" icon={FiMail} placeholder="E-mail" />
      <Select name="profile" data={roles} icon={FiUserCheck} />
      <Input
        name="password"
        icon={FiLock}
        type="password"
        placeholder="Senha"
      />
      <Button type="submit">Cadastrar</Button>
      <Link to="/dashboard">Cancelar</Link>
    </Form>
  );
};

export default CreateUserAdmin;
