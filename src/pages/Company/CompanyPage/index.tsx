import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiAward, FiCheckCircle, FiLayers, FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
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

import { WrapperForm } from '../../../styles/shared';
import { TitlePage } from '../styles';
import {
  Container,
  Navigation,
  Selector,
  Sidebar,
  InputFilter,
} from './styles';

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
  const companyId = history.location.state;

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [selectedCompany, setSelectedCompany] = useState(companyId);
  const [company, setCompany] = useState<CompanyData>();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState<CompanyData[]>([]);

  const handleFilteredCompanies = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  useEffect(() => {
    const result = companies.filter(cia =>
      cia.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredCompanies(result);
  }, [companies, searchTerm]);

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
        <Sidebar>
          <Link to="/create-company">
            <Button>
              <FiPlus /> Adicionar
            </Button>
          </Link>

          <InputFilter
            placeholder="Pesquise uma empresa"
            onChange={e => handleFilteredCompanies(e)}
          />

          <Navigation>
            {filteredCompanies.map((company, i) => (
              <Selector
                key={i}
                onClick={() => handleSelectCompany(company.id)}
                selected={company.id === selectedCompany}
              >
                <h4>{company.name}</h4>
              </Selector>
            ))}
          </Navigation>
        </Sidebar>

        <WrapperForm>
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
            <TitlePage>
              <span>
                <strong>Empresa:</strong> {company?.name}
              </span>
              <span>
                <FiLayers />
                {company?.plan}
              </span>
            </TitlePage>

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
        </WrapperForm>
      </Container>
    </Layout>
  );
};

export default CompanyPage;
