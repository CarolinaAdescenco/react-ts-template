import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiAward, FiCheckCircle, FiLayers } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import { useToast } from '../../../hooks/toast';
import { plans } from '../../../utils/data/roles.json';

import Layout from '../../../shared/layout';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import WidgetSidebar from '../../../shared/Sidebar';
import WidgetNavigation from '../../../shared/Navigation';
import WidgetAddButton from '../../../shared/AddButton';
import WidgetForm from '../../../shared/WidgetForm';

import { Container, Selector } from './styles';
import TitlePage from '../../../shared/TitlePage';
import Filter from '../../../components/Filter';

interface CompanyData {
  id: string;
  name: string;
  responsible: string;
  email: string;
  plan: string;
  active: boolean;
}

const CompanyPage: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const companyId = history.location.state;

  const formRef = useRef<FormHandles>(null);
  const [result, setResult] = useState<CompanyData[]>([]);
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [selectedCompany, setSelectedCompany] = useState(companyId);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState<CompanyData>();

  useEffect(() => {
    api.get('company/all').then(response => {
      setCompanies(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('company', { params: { id: selectedCompany } }).then(response => {
      setCompany(response.data);
    });
  }, [selectedCompany]);

  const handleSelectCompany = useCallback((id: string) => {
    setSelectedCompany(id);
  }, []);

  const handleSubmit = useCallback(
    async (data: CompanyData) => {
      try {
        setLoading(true);
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

        await api.put('/company', data);

        addToast({
          type: 'success',
          title: 'Empresa atualizada!',
          description: 'Os dados foram atualizados com sucesso!',
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
          description: 'Verifique os dados e tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Layout>
      <Container>
        <WidgetSidebar>
          <WidgetAddButton to="/create-company" />

          <Filter setResult={setResult} data={companies} />

          <WidgetNavigation>
            {result.map((company, i) => (
              <Selector
                key={i}
                onClick={() => handleSelectCompany(company.id)}
                selected={company.id === selectedCompany}
              >
                <h4>{company.name}</h4>
              </Selector>
            ))}
          </WidgetNavigation>
        </WidgetSidebar>

        <WidgetForm>
          <Form
            ref={formRef}
            initialData={{
              id: company?.id,
              name: company?.name,
              responsible: company?.responsible,
              email: company?.email,
              plan: company?.plan,
              active: company?.active,
            }}
            onSubmit={handleSubmit}
          >
            <TitlePage icon={<FiLayers />} text={`Empresa: ${company?.name}`} />

            <Input name="id" invisible />
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input
              name="responsible"
              icon={FiUserCheck}
              placeholder="Responsavel"
            />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Select name="plan" data={plans} icon={FiAward} />
            <Input name="active" icon={FiCheckCircle} placeholder="Status" />
            <Button loading={loading} type="submit">
              Salvar
            </Button>
          </Form>
        </WidgetForm>
      </Container>
    </Layout>
  );
};

export default CompanyPage;
