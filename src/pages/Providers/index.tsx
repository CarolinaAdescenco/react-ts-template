import React, { useEffect, useState, useCallback } from 'react';
import { FiClock, FiCalendar, FiSearch } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import Layout from '../../shared/layout/index';
import Button from '../../components/Button';
import api from '../../services/api';
import AvatarPlaceholder from '../../images/user-placeholder.png';

import { CardProvider, ContainerFilter, InputWrapper } from './styles';

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Providers: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProvider, setFilteredProvider] = useState<Provider[]>([]);
  const history = useHistory();

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      history.push('/create-appointment', providerId);
    },
    [history],
  );

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const handleFilterProviders = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  useEffect(() => {
    const result = providers.filter(provider =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProvider(result);
  }, [providers, searchTerm]);

  return (
    <Layout>
      <ContainerFilter>
        <h1>Cabeileireiros</h1>

        <InputWrapper htmlFor="provider-search">
          <input
            onChange={e => handleFilterProviders(e)}
            type="text"
            placeholder="Digite um nome"
          />
          <Button type="button">
            <FiSearch />
          </Button>
        </InputWrapper>
      </ContainerFilter>

      {filteredProvider.map((provider, i) => (
        <CardProvider
          key={i}
          onClick={() => navigateToCreateAppointment(provider.id)}
        >
          <img
            src={provider.avatar_url || AvatarPlaceholder}
            alt={provider.name}
          />

          <div>
            <p>{provider.name}</p>
            <span>
              <FiClock />
              08:00
            </span>
            <span>
              <FiCalendar />
              Segunda a sexta-feira
            </span>
          </div>
        </CardProvider>
      ))}
    </Layout>
  );
};

export default Providers;
