import React, { useRef, useCallback } from 'react';
import { FiAward, FiMail, FiPlus, FiUser, FiUserCheck } from 'react-icons/fi';
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
import Layout from '../../../shared/layout';

import { plans } from '../../../utils/data/roles.json';

import { WrapperForm } from '../../../styles/shared';
import { TitlePage } from '../styles';
import { ButtonBack } from './styles';

interface CreateCompanyFormData {
  name: string;
  responsible: string;
  email: string;
  plan: string;
  active: string;
}

const CreateCompany: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CreateCompanyFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          responsible: Yup.string().required('Informe um responsavel'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          plan: Yup.string().required('Plano obrigatório'),
          active: Yup.boolean(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/company', data);

        history.push('/companies');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer o cadastro dos usuarios',
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
    <Layout>
      <WrapperForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TitlePage>
            <span>
              <FiPlus />
              Criar nova empresa
            </span>
          </TitlePage>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input
            name="responsible"
            icon={FiUserCheck}
            placeholder="Responsavel"
          />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Select name="plan" data={plans} icon={FiAward} />

          <Button type="submit">Cadastrar</Button>
          <ButtonBack to="/companies">Cancelar</ButtonBack>
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default CreateCompany;
