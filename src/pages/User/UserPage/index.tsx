import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import Layout from '../../../shared/layout';

import WidgetSidebar from '../../../shared/Sidebar';
import WidgetNavigation from '../../../shared/Navigation';
import WidgetAddButton from '../../../shared/AddButton';

import { Selector } from './styles';
import Filter from '../../../components/Filter';

interface Users {
  id: string;
  name: string;
}

const UserPage: React.FC = () => {
  const history = useHistory();
  const userId = history.location.state;

  const [users, setUsers] = useState<Users[]>([]);
  const [result, setResult] = useState<Users[]>([]);
  const [selectedUser, setSelectedUser] = useState(userId);
  const [userData, setUserData] = useState<Users>();

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, [users]);

  useEffect(() => {
    api.get('company', { params: { id: selectedUser } }).then(response => {
      setUserData(response.data);
    });
  }, [selectedUser]);

  const handleSelectCompany = useCallback((id: string) => {
    setSelectedUser(id);
  }, []);

  return (
    <Layout>
      <WidgetSidebar>
        <WidgetAddButton to="/create-user" />

        <Filter setResult={setResult} data={users} />

        <WidgetNavigation>
          {result.map((user, i) => (
            <Selector
              key={i}
              onClick={() => handleSelectCompany(user.id)}
              selected={user.id === selectedUser}
            >
              <h4>{user.name}</h4>
            </Selector>
          ))}
        </WidgetNavigation>
      </WidgetSidebar>
    </Layout>
  );
};

export default UserPage;
