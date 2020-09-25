import React, { useCallback, useRef, ChangeEvent } from 'react';
import { FiMail, FiUser, FiLock, FiCamera, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/auth';

import Layout from '../../../shared/layout';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import AvatarPlaceholder from '../../../images/user-placeholder.png';

import { Content, AvatarInput, ContentWrapper } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  perfil: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado com sucesso',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          perfil,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          perfil,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description: 'Seus dados foram atualizados com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao atualizar dados',
          description: 'Verifique seus dados e tente novamente.',
        });
      }
    },
    [addToast, updateUser, history],
  );

  return (
    <Layout>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
            profile: user.profile,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url || AvatarPlaceholder} alt={user.name} />

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <ContentWrapper>
            <h1>Meu perfil</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="profile"
              icon={FiUserCheck}
              placeholder="Perfil"
              disabled
            />
            <div className="container-password">
              <Input
                name="old_password"
                icon={FiLock}
                type="password"
                placeholder="Senha atual"
              />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Nova senha"
              />
              <Input
                name="password_confirmation"
                icon={FiLock}
                type="password"
                placeholder="Confirmação de senha"
              />
            </div>
            <Button type="submit">Salvar</Button>
          </ContentWrapper>
        </Form>
      </Content>
    </Layout>
  );
};

export default Profile;